import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import NotFoundPage from "@/pages/NotFoundPage";
import SEO from "@/components/SEO";
import { COMPANY, getCategoryBySlug, getCategoryListingItems, getProductsByCategoryName, LANDING_CATEGORY_SLUGS, PRODUCT_CATEGORIES } from "@/data/site";
import { trackGoogleAdsCallConversion } from "@/lib/utils";

export default function ProductCategoryPage() {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return <NotFoundPage />;
  }

  const products = getProductsByCategoryName(category.name);
  const listing = getCategoryListingItems(category.slug, products);
  const sellTo = "/sell-equipment";
  const related = LANDING_CATEGORY_SLUGS.filter((slug) => slug !== category.slug);

  return (
    <>
      <SEO
        title={category.title}
        description={category.description}
        keywords={category.keywords}
        image={category.image}
      />

      <section className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden bg-[#071B3B] text-white" data-testid="category-hero">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#071B3B] via-[#071B3B]/88 to-[#071B3B]/70" />
        </div>
        <div className="absolute inset-0 navy-grid-bg opacity-[0.35]" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0066FF]/25 blur-[130px]" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight max-w-4xl">
            {category.h1}
          </h1>
          <p className="mt-6 text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            {category.short}
          </p>

          {category.highlights?.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {category.highlights.map((item) => (
                <li key={item} className="chip chip-navy">
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <a href="#category-products" className="btn-primary justify-center" data-testid="category-cta-buy">
              {category.buyButton} <ArrowUpRight size={16} />
            </a>
            <Link to={sellTo} className="btn-ghost justify-center" data-testid="category-cta-sell">
              {category.sellButton}
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              onClick={trackGoogleAdsCallConversion}
              className="inline-flex items-center justify-center gap-2 min-h-12 px-5 py-3 rounded-full bg-white text-[#071B3B] text-sm font-medium hover:bg-[#F5F7FA] transition-colors"
              aria-label={`Call Now ${COMPANY.phone}`}
              data-testid="category-call-now"
            >
              <PhoneCall size={16} className="shrink-0" />
              Call Now — {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16" data-testid="category-overview">
        <div className="max-w-3xl mx-auto px-4 sm:px-5 md:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#071B3B]">
            About {category.name}
          </h2>
          <p className="mt-5 text-[#2E3440]/75 leading-relaxed">{category.intro}</p>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-12 md:py-16" data-testid="category-buy">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8 grid md:grid-cols-2 gap-6">
          <div className="card-soft p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-[#071B3B]">{category.buyHeading}</h2>
            <p className="mt-4 text-[#2E3440]/75 leading-relaxed">{category.buyBody}</p>
            <a href="#category-products" className="btn-primary mt-6 w-fit inline-flex">
              {category.buyCta} <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="card-soft p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-[#071B3B]">{category.sellHeading}</h2>
            <p className="mt-4 text-[#2E3440]/75 leading-relaxed">{category.sellBody}</p>
            <Link to={sellTo} className="btn-outline-navy mt-6 w-fit inline-flex">
              {category.sellCta} <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="category-products" className="bg-white py-14 md:py-20 scroll-mt-24" data-testid="category-products">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#071B3B]">
                Available {category.name}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#2E3440]/70">
                {listing.length} {listing.length === 1 ? "item" : "items"} in this category.
              </p>
            </div>
            <Link to="/products" className="text-sm font-medium text-[#0066FF] inline-flex items-center gap-1.5">
              All categories <ArrowUpRight size={14} />
            </Link>
          </div>

          {listing.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {listing.map((item, i) =>
                item.product ? (
                  <ProductCard
                    key={item.key}
                    product={item.product}
                    image={item.image}
                    index={i}
                    categorySlug={category.slug}
                  />
                ) : null
              )}
            </div>
          ) : (
            <div className="text-center py-16 text-[#2E3440]/60">
              Ask our team for current {category.name.toLowerCase()} availability, or sell your stock using the button above.
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-12 md:py-16 border-t border-[#071B3B]/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8">
          <h2 className="font-display text-xl font-semibold text-[#071B3B] mb-6">Related categories</h2>
          <div className="flex flex-wrap gap-2">
            {related.map((slug) => {
              const item = PRODUCT_CATEGORIES[slug];
              return (
                <Link
                  key={slug}
                  to={`/products/${slug}`}
                  className="px-4 py-2.5 rounded-full text-sm bg-[#F5F7FA] text-[#071B3B] hover:bg-[#0066FF]/10 hover:text-[#0066FF] transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
