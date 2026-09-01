import { motion } from "framer-motion";
import { WordReveal } from "./Reveal";
import SEO from "./SEO";
import { sizedUnsplash } from "../lib/unsplash";

export default function PageShell({ eyebrow, title, description, children, imageUrl, seoTitle, seoDescription, seoKeywords, customActions, quickContact }) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} />
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#071B3B] text-white" data-testid="page-shell-hero">
        {imageUrl && (
          <div className="absolute inset-0">
            <img
              src={sizedUnsplash(imageUrl, { w: 1400, q: 70 })}
              alt="M DOT IT SOLUZIONE - Enterprise IT Hardware and Networking Solutions"
              className="w-full h-full object-cover opacity-30"
              width={1400}
              height={700}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              importance="high"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#071B3B] via-[#071B3B]/85 to-[#071B3B]/70" />
          </div>
        )}
        <div className="absolute inset-0 navy-grid-bg opacity-[0.35]" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0066FF]/25 blur-[130px]" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 py-16 lg:py-20">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-center">
            <div>
              {eyebrow && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="chip chip-navy w-fit mb-6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25B5FF]" />
                  {eyebrow}
                </motion.div>
              )}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight max-w-6xl">
                <WordReveal text={title} delay={0.1} />
              </h1>
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.55 }}
                  className="mt-6 text-white/70 text-base lg:text-lg max-w-3xl"
                >
                  {description}
                </motion.p>
              )}
            </div>
            <div className="flex flex-col items-end gap-6 min-w-0">
              {customActions && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.65 }}
                  className="flex flex-wrap gap-4 justify-end w-full"
                >
                  {customActions}
                </motion.div>
              )}
              {quickContact && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.75 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 w-full max-w-sm"
                >
                  <h3 className="font-semibold text-lg mb-4">Quick Contact</h3>
                  {quickContact}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
      {children}
    </>
  );
}
