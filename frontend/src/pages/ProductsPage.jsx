<<<<<<< HEAD
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/site";
import { Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function ProductsPage() {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  // Redirect old query parameter URLs to clean URLs
  useEffect(() => {
    const oldCat = params.get("cat");
    if (oldCat && oldCat !== "All") {
      navigate(`/products/${oldCat.toLowerCase()}`, { replace: true });
    }
  }, [params, navigate]);

  const list = useMemo(() => {
    return PRODUCTS.filter((p) => (cat === "All" || p.category === cat))
      .filter((p) => !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.tagline.toLowerCase().includes(q.toLowerCase()));
  }, [cat, q]);

  const onCat = (c) => {
    if (c === "All") {
      setParams({});
      setCat("All");
    } else {
      // Navigate to clean URL instead of using query parameters
      navigate(`/products/${c.toLowerCase()}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>Enterprise IT Hardware in Mumbai | M DOT IT SOLUZIONE</title>
        <meta name="description" content="Buy & Sell enterprise IT hardware, servers, laptops, networking equipment in Mumbai. Quality checked equipment from Cisco, Dell, HPE, Lenovo." />
        <link rel="canonical" href="https://www.mdotitsoluzione.com/products" />
      </Helmet>
      <PageShell
        eyebrow="Products · 30+ SKUs in stock"
        title="Enterprise IT hardware, curated by engineers."
        description="Cisco, Dell, HPE, Lenovo, Juniper, Aruba, MikroTik, Fortinet — filter, compare and request a quote in seconds."
        imageUrl="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=srgb&fm=jpg&q=85"
      >
        <section className="bg-white section-pad" data-testid="products-catalog">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:items-center lg:justify-between mb-8 sm:mb-12">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => onCat(c)}
                    data-testid={`filter-${c.toLowerCase()}`}
                    className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                      cat === c
                        ? "bg-[#071B3B] text-white"
                        : "bg-[#F5F7FA] text-[#071B3B] hover:bg-[#0066FF]/10 hover:text-[#0066FF]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="relative w-full lg:w-80">
                <Search size={16} className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-[#2E3440]/40 w-4 h-4" />
                <input
                  type="text"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search products…"
                  className="w-full bg-[#F5F7FA] border border-transparent focus:border-[#0066FF] focus:bg-white rounded-full pl-10 sm:pl-12 pr-4 sm:pr-5 py-2.5 sm:py-3 text-xs sm:text-sm outline-none transition-colors"
                  data-testid="product-search"
                />
              </div>
            </div>

            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {list.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </motion.div>
            {list.length === 0 && (
              <div className="text-center py-16 sm:py-20 text-[#2E3440]/60 text-sm sm:text-base">
                No products match your filters. Reset and try again.
              </div>
            )}
          </div>
        </section>
      </PageShell>
    </>
  );
}
=======
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import {
  LANDING_CATEGORY_SLUGS,
  PRODUCT_CATEGORIES,
  categoryNameToSlug,
  getProductsByCategoryName,
} from "@/data/site";

export default function ProductsPage() {
  const [params] = useSearchParams();
  const legacyCat = params.get("cat") || params.get("category");
  const legacySlug = categoryNameToSlug(legacyCat);

  if (legacySlug) {
    return <Navigate to={`/products/${legacySlug}`} replace />;
  }

  return (
    <PageShell
      eyebrow="Products"
      title="Enterprise IT hardware, curated by category."
      description="Open a dedicated landing page for networking, servers, storage, workstations, laptops or security — each with its own catalog, enquiry path and SEO."
      imageUrl="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=srgb&fm=jpg&q=85"
      seoTitle="IT Hardware Products | Servers, Laptops, Networking | M DOT IT SOLUZIONE"
      seoDescription="Browse enterprise IT hardware by category: refurbished servers, laptops, networking, storage, workstations and security appliances. Cisco, Dell, HPE, Lenovo and more."
      seoKeywords="IT Hardware Catalog Mumbai, Buy Servers India, Refurbished Laptops, Networking Equipment, Workstation Supplier"
    >
      <section className="bg-white py-14 md:py-20" data-testid="products-catalog">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {LANDING_CATEGORY_SLUGS.map((slug) => {
              const cat = PRODUCT_CATEGORIES[slug];
              const count = getProductsByCategoryName(cat.name).length;
              return (
                <Link
                  key={slug}
                  to={`/products/${slug}`}
                  className="card-soft overflow-hidden group"
                  data-testid={`category-card-${slug}`}
                >
                  <div className="relative aspect-[16/10] bg-[#F5F7FA] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.imageAlt}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071B3B]/55 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 chip !bg-white/95 !text-[#0066FF]">
                      {count} SKUs
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-xl font-semibold text-[#071B3B] flex items-center justify-between gap-3">
                      {cat.name}
                      <ArrowUpRight size={18} className="text-[#0066FF] shrink-0" />
                    </h2>
                    <p className="mt-2 text-sm text-[#2E3440]/70 leading-relaxed">{cat.short}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
