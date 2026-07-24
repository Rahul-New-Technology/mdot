import { motion } from "framer-motion";
import { WordReveal } from "@/components/Reveal";
import SEO from "@/components/SEO";

export default function PageShell({ eyebrow, title, description, children, imageUrl, seoTitle, seoDescription, seoKeywords }) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} />
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[#071B3B] text-white" data-testid="page-shell-hero">
        {imageUrl && (
          <div className="absolute inset-0">
            <img src={imageUrl} alt="M DOT IT SOLUZIONE - Enterprise IT Hardware and Networking Solutions" className="w-full h-full object-cover opacity-30" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#071B3B] via-[#071B3B]/85 to-[#071B3B]/70" />
          </div>
        )}
        <div className="absolute inset-0 navy-grid-bg opacity-[0.35]" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0066FF]/25 blur-[130px]" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="chip chip-navy w-fit mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25B5FF]" />
              {eyebrow}
            </motion.div>
          )}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight max-w-5xl">
            <WordReveal text={title} delay={0.1} />
          </h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 text-white/70 text-lg max-w-2xl"
            >
              {description}
            </motion.p>
          )}
        </div>
      </section>
      {children}
    </>
  );
}
