import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
<<<<<<< HEAD

export default function ProductCard({ product, index = 0 }) {
=======
import { categoryNameToSlug } from "@/data/site";

export default function ProductCard({ product, index = 0, categorySlug, image }) {
  const slug = categorySlug || categoryNameToSlug(product.category) || "products";
  const detailTo = `/products/${slug}/${product.id}`;
  const photo = image || product.image;

>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="card-soft overflow-hidden group flex flex-col"
      data-testid={`product-card-${product.id}`}
    >
<<<<<<< HEAD
      <div className="relative aspect-[4/3] bg-[#F5F7FA] overflow-hidden">
=======
      <Link to={detailTo} className="relative aspect-[4/3] bg-[#F5F7FA] overflow-hidden block">
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
        <div className="absolute top-3 left-3 z-10 chip !bg-white/95 !text-[#0066FF] backdrop-blur text-[10px] sm:text-xs">
          {product.category}
        </div>
        <img
<<<<<<< HEAD
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
=======
          src={photo}
          alt={`${product.name} — ${product.category} from M DOT IT SOLUZIONE`}
          loading="lazy"
          decoding="async"
          width={640}
          height={480}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          onError={(e) => {
            if (e.currentTarget.dataset.fallbackApplied) return;
            e.currentTarget.dataset.fallbackApplied = "1";
            const fallbacks = {
              Laptops: "/images/laptops/Dell1.jpg",
              Servers: "/images/servers/server1.jpg",
              Networking: "/images/networking/networking1.jpg",
              Storage: "/images/storage/storage1.jpg",
              Workstations: "/images/workstations/workstation1.jpg",
              Security: "/images/security/security1.jpg",
              Accessories: "/images/accessories/accessories1.jpg",
            };
            e.currentTarget.src = fallbacks[product.category] || "/images/laptops/Dell1.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3B]/30 via-transparent to-transparent" />
      </Link>

      <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1">
        <Link to={detailTo}>
          <h3 className="font-display text-lg sm:text-xl font-semibold text-[#071B3B] leading-tight hover:text-[#0066FF] transition-colors">
            {product.name}
          </h3>
        </Link>
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
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
<<<<<<< HEAD
            to={`/request-quote?product=${encodeURIComponent(product.name)}`}
            className="text-xs sm:text-sm font-medium text-[#0066FF] inline-flex items-center gap-1.5 group/link"
            data-testid={`product-quote-${product.id}`}
          >
            Get quote
=======
            to={detailTo}
            className="text-xs sm:text-sm font-medium text-[#0066FF] inline-flex items-center gap-1.5 group/link"
            data-testid={`product-quote-${product.id}`}
          >
            View photos
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
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
