import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageShell from "../components/PageShell";
import ProductCard from "../components/ProductCard";
import ContactBlock from "../components/ContactBlock";
import { PRODUCTS, CATEGORIES, COMPANY } from "../data/site";
import { Search, Phone, ArrowUpRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { trackGoogleAdsPhoneConversion } from "../utils/googleAdsTracking";

export default function ProductCategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [q, setQ] = useState("");

  // Normalize category name (convert slug to title case)
  const normalizeCategory = (cat) => {
    if (!cat) return "All";
    if (cat === "ram-ssd") return "RAM & SSD";
    return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
  };

  const cat = normalizeCategory(category);

  // Redirect if category is invalid
  useEffect(() => {
    if (cat !== "All" && !CATEGORIES.includes(cat)) {
      navigate("/products", { replace: true });
    }
  }, [cat, navigate]);

  // Handle old query parameter URLs - redirect to clean URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const oldCat = searchParams.get("cat");
    if (oldCat && oldCat !== category) {
      navigate(`/products/${oldCat.toLowerCase()}`, { replace: true });
    }
  }, [location.search, category, navigate]);

  const list = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === cat)
      .filter((p) => !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.tagline.toLowerCase().includes(q.toLowerCase()));
  }, [cat, q]);

  // Category-specific content
  const getCategoryContent = (category) => {
    const content = {
      "All": {
        title: "Buy & Sell Enterprise IT Hardware",
        description: "We BUY and SELL enterprise IT hardware including servers, laptops, networking equipment, and more. Quality checked equipment from leading brands with warranty. We BUY servers, laptops, networking gear, and other IT assets from businesses and organizations at competitive prices.",
        seoTitle: "Enterprise IT Hardware in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell enterprise IT hardware, servers, laptops, networking equipment in Mumbai. Quality checked equipment from Cisco, Dell, HPE, Lenovo."
      },
      "Networking": {
        title: "Buy & Sell Used & Refurbished Networking Equipment",
        description: "We BUY and SELL used and refurbished networking equipment for businesses, offices, IT companies, and data centers. We deal in routers, networking equipment, wireless equipment, network accessories, and enterprise networking hardware from leading brands. We BUY used, surplus, excess, and decommissioned networking equipment from businesses and organizations. Contact us with your equipment details and quantity.",
        seoTitle: "Buy & Sell Used & Refurbished Networking Equipment in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell used & refurbished networking equipment, routers, switches, firewalls in Mumbai. Enterprise networking solutions from Cisco, Juniper, Aruba, MikroTik."
      },
      "Servers": {
        title: "Buy & Sell Used & Refurbished Enterprise Servers",
        description: "We BUY and SELL used and refurbished enterprise servers including rack servers, tower servers, blade servers, and data center equipment. We offer quality-checked servers from Dell, HPE, Lenovo, and other enterprise brands with warranty. We BUY used, surplus, excess, and decommissioned servers from businesses and organizations for data center upgrades. Get competitive prices for your used Dell, HPE, and Lenovo servers.",
        seoTitle: "Buy & Sell Used & Refurbished Servers in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell used & refurbished enterprise servers, rack servers, tower servers, blade servers in Mumbai. Quality checked servers from Dell, HPE, Lenovo."
      },
      "Storage": {
        title: "Buy & Sell Used & Refurbished Enterprise Storage",
        description: "We BUY and SELL used and refurbished enterprise storage equipment for businesses, data centers, and IT infrastructure. We deal in enterprise storage systems, storage arrays, hard drives, storage hardware, and data center storage equipment. We BUY used, surplus, excess, and decommissioned storage equipment from businesses and organizations. Get competitive value based on brand, model, condition, and quantity.",
        seoTitle: "Buy & Sell Used & Refurbished Storage Equipment in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell used & refurbished enterprise storage equipment, NAS, SAN, storage arrays in Mumbai. Quality checked storage solutions from leading brands."
      },
      "Workstations": {
        title: "Buy & Sell Used & Refurbished Professional Workstations",
        description: "We BUY and SELL used and refurbished professional workstations for CAD, engineering, architecture, 3D design, video editing, and professional applications. We deal in quality-checked workstations from Dell, HP, and Lenovo. We BUY used, surplus, and excess workstations from businesses and organizations. Get competitive value for your professional workstations based on configuration, condition, and quantity.",
        seoTitle: "Buy & Sell Used & Refurbished Professional Workstations in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell used & refurbished professional workstations, business desktops in Mumbai. High-performance workstations for CAD, engineering, design."
      },
      "Laptops": {
        title: "Buy & Sell Used & Refurbished Business Laptops",
        description: "We BUY and SELL used and refurbished laptops for businesses, offices, students, organizations, and individual customers. We deal in Dell, HP, Lenovo, and other major brands with different configurations. We BUY used, surplus, and excess laptops from businesses and organizations. If your company is upgrading its systems or has unused laptops, contact us for a quote.",
        seoTitle: "Buy & Sell Used & Refurbished Business Laptops in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell used & refurbished business laptops in Mumbai. Quality checked laptops from Dell, HP, Lenovo, Apple with warranty."
      },
      "Security": {
        title: "Buy & Sell Used & Refurbished IT Security Equipment",
        description: "We BUY and SELL used and refurbished IT security and related infrastructure equipment for businesses and organizations. We BUY used, surplus, excess, and decommissioned IT security equipment from businesses and organizations. Share the equipment details, brand, model, and quantity with us.",
        seoTitle: "Buy & Sell Used & Refurbished IT Security Equipment in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell used & refurbished enterprise security equipment, firewalls, security appliances in Mumbai. Security solutions from Fortinet, Cisco, Juniper."
      },
      "Switches": {
        title: "Buy & Sell Used & Refurbished Network Switches",
        description: "We BUY and SELL used and refurbished network switches for offices, businesses, IT companies, data centers, and enterprise networks. We deal in different brands, models, and configurations based on availability. We BUY used, surplus, excess, and decommissioned network switches from businesses and organizations. Contact us with the brand, model, quantity, and condition.",
        seoTitle: "Buy & Sell Used & Refurbished Network Switches in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell used & refurbished network switches, managed switches, PoE switches in Mumbai. Enterprise switching solutions from Cisco, HP, Aruba."
      },
      "Desktop": {
        title: "Buy & Sell Used & Refurbished Business Desktops",
        description: "We BUY and SELL used and refurbished desktops for businesses, offices, and organizations. We deal in business desktops, office desktops, corporate IT equipment, and used desktop systems from brands such as Dell, HP, and Lenovo with different configurations. We BUY old, surplus, and decommissioned desktops from businesses. If your company is replacing computers or has unused desktop systems, contact us for a competitive quote.",
        seoTitle: "Buy & Sell Used & Refurbished Business Desktops in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell used & refurbished business desktops in Mumbai. Quality checked desktops from Dell, HP, Lenovo."
      },
      "Accessories": {
        title: "IT Accessories & Peripherals",
        description: "Server racks, cables, peripherals, and complete accessory solutions for IT infrastructure.",
        buySellMessage: "Buy & Sell IT Accessories",
        buyDescription: "We BUY and SELL IT accessories including server racks, cables, and peripherals. Quality checked accessories for complete IT infrastructure solutions.",
        sellDescription: "Have used or surplus IT accessories? We BUY IT accessories from businesses. Get competitive prices for your used server racks, cables, and peripherals.",
        seoTitle: "Buy & Sell IT Accessories in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell IT accessories, server racks, cables, peripherals in Mumbai. Quality checked accessories for IT infrastructure."
      },
      "RAM & SSD": {
        title: "Buy & Sell RAM & SSD",
        description: "We BUY and SELL quality RAM and SSD for desktops, laptops, servers, and enterprise systems. We deal in Desktop RAM (DDR3, DDR4, DDR5), Laptop RAM (SODIMM), Server RAM (ECC RDIMM, LRDIMM), SATA SSDs, NVMe SSDs, and Enterprise SSDs. We BUY used, surplus, excess, and decommissioned RAM and SSD inventory from businesses and organizations. Contact us for competitive pricing on your memory and storage components.",
        seoTitle: "Buy & Sell RAM & SSD in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell RAM and SSD, desktop RAM, laptop RAM, server RAM, SATA SSDs, NVMe SSDs in Mumbai. Quality checked memory and storage components."
      },
      "Accessories": {
        title: "IT Accessories & Peripherals",
        description: "Server racks, cables, peripherals, and complete accessory solutions for IT infrastructure.",
        buySellMessage: "Buy & Sell IT Accessories",
        buyDescription: "We BUY and SELL IT accessories including server racks, cables, and peripherals. Quality checked accessories for complete IT infrastructure solutions.",
        sellDescription: "Have used or surplus IT accessories? We BUY IT accessories from businesses. Get competitive prices for your used server racks, cables, and peripherals.",
        seoTitle: "Buy & Sell IT Accessories in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell IT accessories, server racks, cables, peripherals in Mumbai. Quality checked accessories for IT infrastructure."
      }
    };
    return content[category] || content["All"];
  };

  const categoryContent = getCategoryContent(cat);
  const canonicalUrl = `https://www.mdotitsoluzione.com/products/${category}`;

  const handleCallClick = () => {
    trackGoogleAdsPhoneConversion(COMPANY.phoneRaw);
  };

  if (cat === "All") {
    return null; // This should be handled by redirect
  }

  return (
    <>
      <Helmet>
        <title>{categoryContent.seoTitle}</title>
        <meta name="description" content={categoryContent.seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <PageShell
        eyebrow={`${cat} · Enterprise IT Solutions`}
        title={categoryContent.title}
        description={categoryContent.description}
        imageUrl="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=srgb&fm=jpg&q=85"
        customActions={
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white text-[#071B3B] px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
              onClick={handleCallClick}
            >
              <Phone size={18} />
              Call Now
            </a>
            <Link
              to="/sell-equipment"
              className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors border border-white/30"
            >
              Sell Your {cat}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        }
        quickContact={
          <div className="space-y-3">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-3 hover:text-white/80 transition-colors"
              onClick={handleCallClick}
            >
              <Phone size={18} />
              <span>{COMPANY.phone}</span>
            </a>
            <div className="text-sm text-white/70">
              <p>Available Mon – Sat</p>
              <p>11:00 AM – 09:00 PM</p>
            </div>
          </div>
        }
      >

        <section className="bg-white section-pad" data-testid="products-catalog">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:items-center lg:justify-between mb-6 sm:mb-8">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.filter(c => c !== "All").map((c) => (
                  <button
                    key={c}
                    onClick={() => navigate(`/products/${c.toLowerCase()}`)}
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

            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {list.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </motion.div>
            {list.length === 0 && (
              <div className="text-center py-12 sm:py-16 text-[#2E3440]/60 text-sm sm:text-base">
                No products match your filters. Reset and try again.
              </div>
            )}
          </div>
        </section>

        <section className="bg-[#F5F7FA] section-pad">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#071B3B] mb-4">
                  Interested in {cat}?
                </h2>
                <p className="text-[#2E3440]/70 text-sm sm:text-base mb-6">
                  Get in touch with our team for pricing, availability, and technical specifications.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <a
                    href="tel:+917704949022"
                    className="inline-flex items-center gap-2 bg-[#071B3B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0066FF] transition-colors"
                  >
                    <Phone size={18} />
                    Call Now: +91 77049 49022
                  </a>
                </div>
              </div>
              <div>
                <ContactBlock compact={true} category={cat} kind="product-inquiry" />
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}