import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check, PhoneCall } from "lucide-react";
import NotFoundPage from "./NotFoundPage";
import SEO from "../components/SEO";
import {
  COMPANY,
  categoryNameToSlug,
  getProductById,
  getProductGallery,
} from "../data/site";
import { trackGoogleAdsCallConversion } from "../lib/utils";

export default function ProductDetailPage() {
  const { categorySlug, productId } = useParams();
  const product = getProductById(productId);
  const gallery = getProductGallery(product);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [productId]);

  if (!product) {
    return <NotFoundPage />;
  }

  const backTo = `/products/${categorySlug || categoryNameToSlug(product.category)}`;
  const quoteTo = `/request-quote?product=${encodeURIComponent(product.name)}`;
  const mainImage = gallery[active] || product.image;

  return (
    <>
      <SEO
        title={`${product.name} | Buy & Sell | M DOT IT SOLUZIONE`}
        description={product.tagline}
        keywords={`${product.name}, ${product.category}, refurbished, Mumbai`}
        image={product.image}
      />

      <section className="pt-28 md:pt-32 pb-16 bg-[#F5F7FA]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8">
          <Link to={backTo} className="inline-flex items-center gap-2 text-sm text-[#0066FF] mb-8">
            <ArrowLeft size={16} /> Back to {product.category}
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="relative rounded-[24px] overflow-hidden bg-white aspect-[4/3] shadow-[0_8px_30px_rgba(7,27,59,0.06)]">
                <img
                  src={mainImage}
                  alt={`${product.name} — ${product.category}`}
                  className="w-full h-full object-cover"
                  width={960}
                  height={720}
                />
              </div>
              {gallery.length > 1 && (
                <div className="mt-3 grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {gallery.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActive(i)}
                      className={`rounded-xl overflow-hidden aspect-[4/3] border-2 ${
                        i === active ? "border-[#0066FF]" : "border-transparent"
                      }`}
                      aria-label={`View photo ${i + 1}`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="chip mb-4">{product.category}</div>
              <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#071B3B] leading-tight">
                {product.name}
              </h1>
              <p className="mt-4 text-[#2E3440]/75 text-base sm:text-lg">{product.tagline}</p>

              <ul className="mt-8 space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[#071B3B]">
                    <Check size={18} className="mt-0.5 text-[#0066FF] shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {product.applications?.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-display text-lg font-semibold text-[#071B3B]">Typical use</h2>
                  <p className="mt-2 text-[#2E3440]/70">{product.applications.join(" · ")}</p>
                </div>
              )}

              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
                <Link to={quoteTo} className="btn-primary justify-center">
                  Get quote <ArrowUpRight size={16} />
                </Link>
                <Link to="/sell-equipment" className="btn-outline-navy justify-center">
                  Sell this type
                </Link>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  onClick={trackGoogleAdsCallConversion}
                  className="inline-flex items-center justify-center gap-2 min-h-12 px-5 py-3 rounded-full bg-[#071B3B] text-white text-sm font-medium"
                >
                  <PhoneCall size={16} /> Call Now — {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
