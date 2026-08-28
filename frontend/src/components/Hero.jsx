import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { WordReveal } from "@/components/Reveal";
import { COMPANY } from "@/data/site";
=======
import { COMPANY } from "@/data/site";
import { trackGoogleAdsCallConversion } from "@/lib/utils";

const HERO_IMG_SM = "/images/hero/hero-m.webp";
const HERO_IMG_LG = "/images/hero/hero-d.webp";
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

<<<<<<< HEAD
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "24%"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, 0]
  );

  /*
   * ============================================================
   * GOOGLE ADS - WEBSITE PHONE CLICK CONVERSION
   * ============================================================
   *
   * Conversion ID:
   * AW-18349608095
   *
   * Conversion Label:
   * MOMmCPqqk-IcEJ-Z461E
   *
   * This conversion fires when a visitor clicks
   * the phone number / Call button.
   */

  const handleCallClick = () => {
    try {
      if (
        typeof window !== "undefined" &&
        typeof window.gtag_report_call_conversion === "function"
      ) {
        window.gtag_report_call_conversion();
      }
    } catch (error) {
      // Do not block the phone link if tracking fails.
      console.warn(
        "Google Ads call conversion tracking failed:",
        error
      );
    }

    /*
     * We intentionally DO NOT prevent the default action.
     *
     * Therefore:
     *
     * <a href="tel:...">
     *
     * will continue to open the phone dialer normally.
     */
  };
=======
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d

  return (
    <section
      ref={ref}
<<<<<<< HEAD
      className="relative min-h-[100vh] w-full overflow-hidden bg-[#071B3B] text-white"
      data-testid="hero-section"
    >
      {/* =========================================================
          BACKGROUND IMAGE + PARALLAX
      ========================================================== */}

      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=srgb&fm=jpg&q=85"
          alt="Enterprise data center with server racks and networking equipment"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* =========================================================
          DARK BLUE OVERLAY
      ========================================================== */}

      <div className="absolute inset-0 bg-[#071B3B]/85" />

      <div className="absolute inset-0 bg-gradient-to-br from-[#071B3B] via-[#071B3B]/70 to-transparent" />

      <div className="absolute inset-0 navy-grid-bg opacity-[0.5]" />

      {/* =========================================================
          ORBITING LOGO / DOT
      ========================================================== */}

      <div className="absolute right-[6%] top-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-[440px] h-[440px]"
        >
          <div className="absolute inset-0 rounded-full border border-[#25B5FF]/25" />

          <div className="absolute inset-6 rounded-full border border-[#0066FF]/25" />

          <div className="absolute inset-14 rounded-full border border-[#25B5FF]/15" />

          {/* Rotating top dot */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
            }}
            className="absolute inset-0"
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full brand-gradient shadow-[0_0_30px_rgba(37,181,255,0.9)]" />
          </motion.div>

          {/* Rotating bottom dot */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 34,
              ease: "linear",
              repeat: Infinity,
            }}
            className="absolute inset-6"
          >
            <div className="absolute -bottom-1.5 right-8 w-3 h-3 rounded-full bg-[#25B5FF] shadow-[0_0_18px_rgba(37,181,255,0.9)]" />
          </motion.div>

          {/* Company logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              src={COMPANY.logo}
              alt="M DOT IT SOLUZIONE logo - Enterprise IT Hardware Supplier"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 0.9,
                y: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.9,
              }}
              className="w-[240px] h-[240px] object-contain drop-shadow-[0_10px_40px_rgba(0,102,255,0.6)]"
            />
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 pt-40 md:pt-48 pb-24 min-h-[100vh] flex flex-col justify-center"
      >
        {/* =======================================================
            BADGE
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="chip chip-navy mb-8 w-fit"
          data-testid="hero-badge"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#25B5FF]" />

          Refurbished Laptops · IT Hardware · Buy & Sell
        </motion.div>

        {/* =======================================================
            MAIN HEADING
        ======================================================== */}

        <h1
          className="font-display font-semibold text-white text-[28px] sm:text-[42px] md:text-[52px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] max-w-[20ch]"
          data-testid="hero-heading"
        >
          <div>
            <WordReveal
              text="Trusted M DOT IT SOLUZIONE"
              delay={0.25}
            />
          </div>

          <div className="mt-2">
            <WordReveal
              text="refurbished laptop"
              delay={0.45}
              className="brand-gradient-text"
            />
          </div>

          <div className="mt-2">
            <WordReveal
              text="suppliers in India"
              delay={0.72}
            />
          </div>
        </h1>

        {/* =======================================================
            DESCRIPTION
        ======================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1.0,
          }}
          className="mt-8 text-white/70 text-base md:text-lg max-w-[52ch]"
          data-testid="hero-description"
        >
          Premium refurbished Dell, HP, Lenovo laptops and enterprise IT
          hardware — certified quality, tested by engineers, delivered
          across India at unbeatable prices.
        </motion.p>

        {/* =======================================================
            CTA BUTTONS
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1.15,
          }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {/* =====================================================
              REQUEST QUOTE
          ====================================================== */}

          <Link
            to="/request-quote"
            className="btn-primary"
            data-testid="hero-cta-primary"
          >
            Request a quote

            <ArrowUpRight size={18} />
          </Link>

          {/* =====================================================
              PHONE / CALL BUTTON

              GOOGLE ADS CONVERSION TRACKING
          ====================================================== */}

          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="btn-ghost"
            data-testid="hero-cta-secondary"
            onClick={handleCallClick}
            aria-label={`Call M DOT IT SOLUZIONE at ${COMPANY.phone}`}
          >
            <PhoneCall size={16} />

            {COMPANY.phone}
          </a>
        </motion.div>

        {/* =======================================================
            BOTTOM INLINE META
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 1.6,
          }}
          className="mt-16 md:mt-24 flex flex-wrap items-center gap-8 text-white/60 text-xs font-mono uppercase tracking-[0.18em]"
        >
          <span>Cisco Premier</span>

          <span className="w-px h-3 bg-white/20" />

          <span>Dell Titanium</span>

          <span className="w-px h-3 bg-white/20" />

          <span>HPE Platinum</span>

          <span className="w-px h-3 bg-white/20" />

          <span>ISO 9001 · 27001</span>
        </motion.div>
      </motion.div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.9,
          duration: 0.6,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[10px] font-mono uppercase tracking-[0.3em]"
      >
        <span>Scroll</span>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="w-px h-8 bg-white/40"
        />
=======
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
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
      </motion.div>
    </section>
  );
}
