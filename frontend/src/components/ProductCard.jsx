import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="card-soft overflow-hidden group flex flex-col"
      data-testid={`product-card-${product.id}`}
    >
      <div className="relative aspect-[4/3] bg-[#F5F7FA] overflow-hidden">
        <div className="absolute top-3 left-3 z-10 chip !bg-white/95 !text-[#0066FF] backdrop-blur text-[10px] sm:text-xs">
          {product.category}
        </div>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          onError={(e) => {
            e.target.src = "/images/laptops/Dell1.jpg"; // Fallback image
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3B]/30 via-transparent to-transparent" />
      </div>

      <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1">
        <h3 className="font-display text-lg sm:text-xl font-semibold text-[#071B3B] leading-tight">
          {product.name}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#2E3440]/70 leading-relaxed">{product.tagline}</p>

        <ul className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-[#071B3B]/80">
              <Check size={14} className="mt-0.5 text-[#0066FF] shrink-0 w-3.5 h-3.5 sm:w-3.5 sm:h-3.5" />
              <span className="leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 sm:pt-6 flex items-center justify-between">
          <Link
            to={`/request-quote?product=${encodeURIComponent(product.name)}`}
            className="text-xs sm:text-sm font-medium text-[#0066FF] inline-flex items-center gap-1.5 group/link"
            data-testid={`product-quote-${product.id}`}
          >
            Get quote
            <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 w-3.5 h-3.5" />
          </Link>
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-[#2E3440]/40">
            #{product.id.split("-")[0]}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
