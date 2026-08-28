import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import ProductCard from "@/components/ProductCard";
import ContactBlock from "@/components/ContactBlock";
import { PRODUCTS, CATEGORIES, COMPANY } from "@/data/site";
import { Search, Phone, ArrowUpRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function ProductCategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [q, setQ] = useState("");

  // Normalize category name (convert slug to title case)
  const normalizeCategory = (cat) => {
    if (!cat) return "All";
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
        title: "Enterprise IT hardware, curated by engineers.",
        description: "Cisco, Dell, HPE, Lenovo, Juniper, Aruba, MikroTik, Fortinet — filter, compare and request a quote in seconds.",
        buySellMessage: "Buy & Sell Enterprise IT Hardware",
        buyDescription: "We BUY and SELL enterprise IT hardware including servers, laptops, networking equipment, and more. Quality checked equipment from leading brands with warranty.",
        sellDescription: "Have used or surplus IT equipment? We BUY servers, laptops, networking gear, and other IT assets from businesses and organizations at competitive prices.",
        seoTitle: "Enterprise IT Hardware in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell enterprise IT hardware, servers, laptops, networking equipment in Mumbai. Quality checked equipment from Cisco, Dell, HPE, Lenovo."
      },
      "Networking": {
        title: "Enterprise Networking Equipment",
        description: "Routers, switches, firewalls, wireless access points, and complete networking solutions for businesses.",
        buySellMessage: "Buy & Sell Networking Equipment",
        buyDescription: "We BUY and SELL networking equipment including routers, switches, firewalls, wireless access points, and complete networking solutions. Quality checked from Cisco, Juniper, Aruba, MikroTik.",
        sellDescription: "Have used or surplus networking equipment? We BUY networking gear from businesses and organizations. Get competitive prices for your used routers, switches, and firewalls.",
        seoTitle: "Buy & Sell Networking Equipment in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell networking equipment, routers, switches, firewalls in Mumbai. Enterprise networking solutions from Cisco, Juniper, Aruba, MikroTik."
      },
      "Servers": {
        title: "Enterprise Servers & Data Center Equipment",
        description: "Rack servers, blade servers, storage arrays, and complete data center solutions for businesses.",
        buySellMessage: "Buy & Sell Servers",
        buyDescription: "We BUY and SELL enterprise servers including rack servers, blade servers, and data center equipment. Quality checked/refurbished servers from Dell, HPE, Lenovo with warranty.",
        sellDescription: "Have used or surplus servers? We BUY servers from businesses and organizations for data center upgrades. Get competitive prices for your used Dell, HPE, Lenovo servers.",
        seoTitle: "Buy & Sell Servers in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell enterprise servers, rack servers, data center equipment in Mumbai. Quality checked servers from Dell, HPE, Lenovo."
      },
      "Storage": {
        title: "Enterprise Storage Solutions",
        description: "NAS, SAN, storage arrays, backup solutions, and complete storage infrastructure for businesses.",
        buySellMessage: "Buy & Sell Storage Equipment",
        buyDescription: "We BUY and SELL enterprise storage equipment including NAS, SAN, storage arrays, and backup solutions. Quality checked storage systems from leading brands.",
        sellDescription: "Have used or surplus storage equipment? We BUY storage arrays and solutions from businesses. Get competitive prices for your used NAS, SAN, and storage systems.",
        seoTitle: "Buy & Sell Storage Equipment in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell enterprise storage equipment, NAS, SAN, storage arrays in Mumbai. Quality checked storage solutions from leading brands."
      },
      "Workstations": {
        title: "Professional Workstations & Desktops",
        description: "High-performance workstations, business desktops, and complete computing solutions for professionals.",
        buySellMessage: "Buy & Sell Workstations",
        buyDescription: "We BUY and SELL professional workstations and business desktops. Quality checked workstations for CAD, engineering, design, and professional use from Dell, HP, Lenovo.",
        sellDescription: "Have used or surplus workstations? We BUY workstations from businesses and organizations. Get competitive prices for your used professional workstations and desktops.",
        seoTitle: "Buy & Sell Workstations in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell professional workstations, business desktops in Mumbai. High-performance workstations for CAD, engineering, design."
      },
      "Laptops": {
        title: "Refurbished Business Laptops",
        description: "Quality-tested refurbished laptops from Dell, HP, Lenovo, Apple for business and personal use.",
        buySellMessage: "Buy & Sell Refurbished Laptops",
        buyDescription: "We BUY and SELL refurbished business laptops from Dell, HP, Lenovo, Apple. Quality checked laptops with warranty for business, corporate, and personal use.",
        sellDescription: "Have used or surplus laptops? We BUY laptops from businesses and organizations for bulk trade-in. Get competitive prices for your used Dell, HP, Lenovo, Apple laptops.",
        seoTitle: "Buy & Sell Refurbished Laptops in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell refurbished laptops, business laptops in Mumbai. Quality checked laptops from Dell, HP, Lenovo, Apple with warranty."
      },
      "Security": {
        title: "Enterprise Security Equipment",
        description: "Firewalls, security appliances, intrusion detection systems, and complete security solutions for businesses.",
        buySellMessage: "Buy & Sell Security Equipment",
        buyDescription: "We BUY and SELL enterprise security equipment including firewalls, security appliances, and intrusion detection systems. Quality checked from Fortinet, Cisco, Juniper.",
        sellDescription: "Have used or surplus security equipment? We BUY security appliances from businesses. Get competitive prices for your used firewalls and security equipment.",
        seoTitle: "Buy & Sell Security Equipment in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell enterprise security equipment, firewalls, security appliances in Mumbai. Security solutions from Fortinet, Cisco, Juniper."
      },
      "Switches": {
        title: "Network Switches & Ethernet Solutions",
        description: "Managed switches, PoE switches, core switches, and complete network switching solutions for businesses.",
        buySellMessage: "Buy & Sell Network Switches",
        buyDescription: "We BUY and SELL network switches including managed switches, PoE switches, core switches, and enterprise switching solutions. Quality checked from Cisco, HP, Aruba.",
        sellDescription: "Have used or surplus network switches? We BUY network switches from businesses and organizations. Get competitive prices for your used managed and PoE switches.",
        seoTitle: "Buy & Sell Network Switches in Mumbai | M DOT IT SOLUZIONE",
        seoDescription: "Buy & Sell network switches, managed switches, PoE switches in Mumbai. Enterprise switching solutions from Cisco, HP, Aruba."
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
      >
        <section className="bg-gradient-to-r from-[#071B3B] to-[#0066FF] text-white section-pad">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">{categoryContent.buySellMessage}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Looking to {cat.toLowerCase()}?</h3>
                    <p className="text-white/80 text-sm">{categoryContent.buyDescription}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Have used or surplus {cat.toLowerCase()}?</h3>
                    <p className="text-white/80 text-sm">{categoryContent.sellDescription}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-white text-[#071B3B] px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                  <a
                    href="/sell-equipment"
                    className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors border border-white/30"
                  >
                    Sell Your {cat}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="font-semibold text-lg mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-3 hover:text-white/80 transition-colors">
                      <Phone size={18} />
                      <span>{COMPANY.phone}</span>
                    </a>
                    <div className="text-sm text-white/70">
                      <p>Available Mon – Sat</p>
                      <p>11:00 AM – 09:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white section-pad" data-testid="products-catalog">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:items-center lg:justify-between mb-8 sm:mb-12">
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

        {/* Call Now Section */}
        <section className="bg-[#071B3B] text-white section-pad">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Need Help with {cat}?
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Call our team for expert assistance, pricing, and availability information.
            </p>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0056cc] transition-colors text-lg"
            >
              <Phone size={20} />
              Call Now: {COMPANY.phone}
            </a>
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
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-[#071B3B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0066FF] transition-colors"
                  >
                    <Phone size={18} />
                    Call Now
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