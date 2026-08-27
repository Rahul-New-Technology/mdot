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
