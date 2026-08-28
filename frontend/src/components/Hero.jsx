import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { WordReveal } from "./Reveal";
import { COMPANY } from "../data/site";
import { trackGoogleAdsCallConversion } from "../lib/utils";

const HERO_IMG_SM = "/images/hero/hero-m.webp";
const HERO_IMG_LG = "/images/hero/hero-d.webp";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#071B3B] text-white"
      data-testid="hero-section"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <picture>
          <source media="(max-width: 767px)" srcSet={HERO_IMG_SM} type="image/webp" />
          <source media="(min-width: 768px)" srcSet={HERO_IMG_LG} type="image/webp" />
          <img
            src={HERO_IMG_LG}
            alt="IT hardware and server environment"
            className="w-full h-full object-cover"
            width={1400}
            height={1750}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </motion.div>

      <div className="absolute inset-0 bg-[#071B3B]/85" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#071B3B] via-[#071B3B]/70 to-transparent" />
      <div className="absolute inset-0 navy-grid-bg opacity-[0.5]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-20 min-h-[100svh] flex flex-col justify-center"
      >
        <div className="grid lg:grid-cols-[0.92fr,1.08fr] gap-8 lg:gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="chip chip-navy mb-7 w-fit"
              data-testid="hero-badge"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25B5FF]" />
              REFURBISHED LAPTOPS · IT HARDWARE · BUY &amp; SELL
            </motion.div>

            <h1
              className="font-display font-semibold text-white text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.08] tracking-[-0.03em] max-w-[16ch]"
              data-testid="hero-heading"
            >
              Trusted {COMPANY.name}
              <br />
              <span className="text-[#0066FF]">refurbished laptop</span>
              <br />
              suppliers in India
            </h1>

            <p
              className="mt-6 text-white/70 text-base md:text-lg max-w-[46ch] leading-relaxed"
              data-testid="hero-description"
            >
              Premium refurbished Dell, HP, Lenovo laptops and enterprise IT hardware — certified quality, tested by engineers, delivered across India at unbeatable prices.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3"
            >
              <Link to="/request-quote" className="btn-primary justify-center" data-testid="hero-cta-primary">
                Request a quote
                <ArrowUpRight size={18} />
              </Link>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                onClick={trackGoogleAdsCallConversion}
                className="btn-ghost justify-center"
                data-testid="hero-cta-call"
                aria-label={`Call ${COMPANY.phone}`}
              >
                <PhoneCall size={18} />
                {COMPANY.phone}
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:flex justify-center" data-testid="hero-logo">
            <div className="hero-logo-stage" aria-hidden="false">
              <span className="hero-logo-ring" />
              <span className="hero-logo-ring hero-logo-ring-2" />
              <span className="hero-logo-ring hero-logo-ring-3" />
              <span className="hero-logo-orbit">
                <span className="hero-logo-dot" />
              </span>
              <span className="hero-logo-orbit hero-logo-orbit-b">
                <span className="hero-logo-dot hero-logo-dot-b" />
              </span>
              <div className="hero-logo-plate">
                <img
                  src="/images/brand/logo.webp"
                  alt="M DOT IT SOLUZIONE logo"
                  width={420}
                  height={420}
                  loading="eager"
                  decoding="async"
                  className="w-[78%] h-[78%] object-contain"
                  onError={(e) => {
                    if (!e.currentTarget.src.includes("logo.png")) {
                      e.currentTarget.src = "/images/brand/logo.png";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
