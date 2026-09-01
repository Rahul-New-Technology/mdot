import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { COMPANY } from "../data/site";

const SITE_URL = "https://www.mdotitsoluzione.com";

const PAGE_META = {
  "/": {
    title: "Buy & Sell IT Hardware in Mumbai | M DOT IT SOLUZIONE - Refurbished Laptops, Servers, Networking",
    description: "M DOT IT SOLUZIONE buys and sells refurbished laptops, servers, desktops, networking equipment, routers, switches, workstations, and IT hardware across Mumbai, Navi Mumbai, Thane, and India. Trusted IT hardware supplier since 2011.",
    keywords: "IT Hardware Mumbai, Used Servers Mumbai, Buy Used Laptop Mumbai, Refurbished Laptop Mumbai, Cisco Switch Supplier Mumbai, Server Dealer Mumbai, Workstation Supplier Mumbai, IT Equipment Buyer Mumbai, E-Waste IT Asset Disposal Mumbai, Router Supplier Mumbai"
  },
  "/about": {
    title: "About Us | M DOT IT SOLUZIONE - Enterprise IT Hardware Supplier Since 2011",
    description: "Learn about M DOT IT SOLUZIONE - trusted enterprise IT hardware supplier serving Mumbai and India since 2011. 2,400+ clients, 38+ vendor partnerships, certified engineers.",
    keywords: "IT Hardware Company Mumbai, Enterprise IT Supplier India, IT Infrastructure Partner Mumbai, Server Supplier Mumbai History"
  },
  "/products": {
    title: "IT Hardware Products | M DOT IT SOLUZIONE - Servers, Laptops, Networking Equipment",
    description: "Browse our catalog of enterprise IT hardware: refurbished servers, laptops, desktops, networking equipment, routers, switches, workstations. Cisco, Dell, HPE, Lenovo and more.",
    keywords: "IT Hardware Catalog Mumbai, Buy Servers Online India, Refurbished Laptops for Sale, Networking Equipment Price, Workstation Purchase Mumbai"
  },
  "/services": {
    title: "IT Services | M DOT IT SOLUZIONE - Installation, Support, Asset Buyback, E-Waste Recycling",
    description: "End-to-end enterprise IT services: installation, configuration, migration, troubleshooting, maintenance, technical support, IT asset buyback, and e-waste recycling across India.",
    keywords: "IT Services Mumbai, Server Installation India, Network Setup Services, IT Support Mumbai, E-Waste Recycling Mumbai, IT Asset Buyback"
  },
  "/brands": {
    title: "Our Brands | M DOT IT SOLUZIONE - Cisco, Dell, HPE, Lenovo, Juniper, Fortinet Partners",
    description: "Officially certified partner for 16 major IT hardware brands including Cisco, Dell, HPE, Lenovo, Juniper, Aruba, MikroTik, Fortinet. 38+ total vendor partnerships.",
    keywords: "Cisco Partner Mumbai, Dell Reseller India, HPE Supplier Mumbai, Lenovo Dealer Mumbai, Juniper Distributor India, Fortinet Partner"
  },
  "/industries": {
    title: "Industries We Serve | M DOT IT SOLUZIONE - Banking, Healthcare, Education, Manufacturing IT",
    description: "Enterprise IT solutions for eight regulated sectors: banking, healthcare, education, manufacturing, retail, government, media, and logistics across India.",
    keywords: "IT Solutions Banking Mumbai, Healthcare IT Infrastructure India, Education Technology Mumbai, Manufacturing IT Solutions, Retail IT Systems"
  },
  "/why-choose-us": {
    title: "Why Choose Us | M DOT IT SOLUZIONE - Vendor-Neutral, Engineer-Led, Accountable IT Partner",
    description: "What sets M DOT IT SOLUZIONE apart: vendor-neutral approach, engineer-led delivery, accountability, transparent pricing, and 99.98% SLA uptime for Indian enterprises.",
    keywords: "Why Choose IT Supplier Mumbai, Best IT Hardware Company India, Reliable IT Partner Mumbai, Enterprise IT Solutions Provider"
  },
  "/corporate-solutions": {
    title: "Corporate Solutions | M DOT IT SOLUZIONE - Framework Agreements for Enterprise Procurement",
    description: "Framework agreements engineered for procurement scale: dedicated account engineer, multi-year MSA, pan-India delivery, escrow stock, 24/7 SOC, and white-glove deployment.",
    keywords: "Corporate IT Solutions India, Enterprise Procurement Mumbai, IT Framework Agreements, Corporate Hardware Contracts, Bulk IT Purchase"
  },
  "/sell-equipment": {
    title: "Sell Your Used IT Equipment | M DOT IT SOLUZIONE - Server, Laptop, Networking Buyback",
    description: "Trade-in credit for used servers, laptops, and networking gear. NIST 800-88 certified secure wiping, WEEE-compliant recycling, and instant buy-back credit against new hardware.",
    keywords: "Sell Used Servers Mumbai, IT Equipment Buyback India, Laptop Sell Mumbai, E-Waste Disposal Mumbai, Computer Recycling India"
  },
  "/request-quote": {
    title: "Request a Quote | M DOT IT SOLUZIONE - Get IT Hardware Pricing in 24 Hours",
    description: "Request a quote for enterprise IT hardware. Whether it's a single switch or a datacenter refresh, our engineers will scope and price it within 24 hours.",
    keywords: "IT Hardware Quote Mumbai, Server Price Request India, Networking Equipment Quote, Get IT Hardware Pricing, Enterprise IT Cost Estimate"
  },
  "/gallery": {
    title: "Project Gallery | M DOT IT SOLUZIONE - Datacenter, Networking, IT Infrastructure Projects",
    description: "View our project gallery showcasing datacenter builds, networking deployments, server installations, and IT infrastructure projects across Mumbai and India.",
    keywords: "IT Projects Gallery Mumbai, Datacenter Installation India, Network Deployment Photos, IT Infrastructure Portfolio"
  },
  "/products/desktop": {
    title: "Buy & Sell Business Desktops | M DOT IT SOLUZIONE - Refurbished Desktops",
    description: "Buy and sell business desktops in Mumbai. Quality checked refurbished desktops from Dell, HP, Lenovo for companies and organizations.",
    keywords: "Business Desktops Mumbai, Refurbished Desktops India, Desktop Computers Mumbai, Used Desktops for Sale, Office Desktops Supplier"
  },
  "/faq": {
    title: "FAQ | M DOT IT SOLUZIONE - Frequently Asked Questions About IT Hardware & Services",
    description: "Everything you'd want to know before we start work: warranty, delivery, payment terms, support, and more. Precisely answered by our engineering team.",
    keywords: "IT Hardware FAQ Mumbai, Server Warranty Questions, IT Support FAQ India, Hardware Delivery Terms"
  },
  "/testimonials": {
    title: "Client Testimonials | M DOT IT SOLUZIONE - What CIOs and CTOs Say About Us",
    description: "A selection of unedited quotes from CIOs and CTOs across India about their experience working with M DOT IT SOLUZIONE for enterprise IT hardware and services.",
    keywords: "IT Client Reviews Mumbai, Customer Testimonials India, CIO Feedback IT Supplier, Enterprise IT Hardware Reviews"
  },
  "/privacy": {
    title: "Privacy Policy | M DOT IT SOLUZIONE",
    description: "Privacy policy for M DOT IT SOLUZIONE. Learn how we collect, use, and protect your data. Your privacy matters to us.",
    keywords: "Privacy Policy IT Company, Data Protection Mumbai, IT Company Privacy India"
  },
  "/terms": {
    title: "Terms & Conditions | M DOT IT SOLUZIONE",
    description: "Terms and conditions governing the supply of goods and services by M DOT IT SOLUZIONE. Read our policies on quotations, delivery, warranty, and payment.",
    keywords: "Terms Conditions IT Hardware, Purchase Policy Mumbai, IT Supplier Terms India"
  },
  "/disclaimer": {
    title: "Disclaimer | M DOT IT SOLUZIONE",
    description: "Disclaimer for M DOT IT SOLUZIONE website. Information accuracy, third-party trademarks, external links, and professional advice disclaimers.",
    keywords: "Website Disclaimer IT Company, Legal Disclaimer Mumbai"
  },
  "/contact": {
    title: "Contact Us | M DOT IT SOLUZIONE - Mumbai HQ, Pan-India Delivery",
    description: "Contact M DOT IT SOLUZIONE for enterprise IT hardware and services. Visit our Mumbai HQ in Sakinaka, Kurla or call +91 77049 49022. Site surveys in 5 days.",
    keywords: "Contact IT Hardware Mumbai, IT Supplier Contact India, Mumbai IT Company Address, Call IT Hardware Supplier"
  }
};

export default function SEO({ title, description, keywords, image = null, noIndex = false }) {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] || PAGE_META["/"];
  const pageTitle = title || meta.title;
  const pageDescription = description || meta.description;
  const pageKeywords = keywords || meta.keywords;
  const rawImage = image || `${SITE_URL}/images/hero/hero-d.webp`;
  const pageImage = rawImage.startsWith("http") ? rawImage : `${SITE_URL}${rawImage}`;
  const canonicalUrl = pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, follow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
    </Helmet>
  );
}
