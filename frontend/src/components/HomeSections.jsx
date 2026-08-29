import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Network, Server, Monitor, Recycle, Settings, Laptop, Factory, Building2, HeartPulse, GraduationCap, ShoppingBag, Landmark, Video, Truck } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { SERVICES, STATS, TESTIMONIALS, FAQ_ITEMS } from "../data/site";

const BRANDS = [
  "Cisco", "Dell", "HPE", "Lenovo", "Juniper", "Aruba", "MikroTik", "Fortinet",
  "Huawei", "NetApp", "IBM", "Oracle", "VMware", "Microsoft", "Intel", "AMD"
];

const INDUSTRIES = [
  { title: "Banking & Finance", desc: "Secure, compliant infrastructure for financial institutions with 99.98% uptime SLA." },
  { title: "Healthcare", desc: "HIPAA-compliant IT solutions for hospitals, clinics, and healthcare providers." },
  { title: "Manufacturing", desc: "Industrial-grade systems for production lines, automation, and IoT integration." },
  { title: "Retail", desc: "POS systems, inventory management, and customer experience infrastructure." },
  { title: "Education", desc: "Campus-wide networking, computer labs, and e-learning platforms." },
  { title: "Government", desc: "Secure, scalable infrastructure for public sector organizations." },
  { title: "Media & Entertainment", desc: "High-performance systems for content creation, editing, and broadcasting." },
  { title: "Logistics", desc: "Tracking systems, warehouse automation, and supply chain IT solutions." }
];

const WHY_US = [
  { n: "01", title: "Vendor-Neutral", desc: "We don't push brands. We push the right solution for your specific requirements." },
  { n: "02", title: "Engineer-Led", desc: "Your account is managed by a senior engineer, not a sales quota-chaser." },
  { n: "03", title: "Accountability", desc: "When things go wrong, we fix them. No finger-pointing, no excuses." },
  { n: "04", title: "Transparent Pricing", desc: "No hidden margins, no surprise charges. What we quote is what you pay." },
  { n: "05", title: "99.98% SLA", desc: "We put our uptime guarantee in writing. And we back it with credits if we miss it." }
];

const PROCESS = [
  { n: "01", title: "Discovery", desc: "We understand your requirements, infrastructure, and constraints." },
  { n: "02", title: "Solution Design", desc: "Our engineers design a solution that fits your needs and budget." },
  { n: "03", title: "Implementation", desc: "We deploy, configure, and test the solution with minimal disruption." },
  { n: "04", title: "Support", desc: "Ongoing support, maintenance, and optimization to ensure success." }
];
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const ICONS = { network: Network, server: Server, monitor: Monitor, recycle: Recycle, settings: Settings, laptop: Laptop };
const INDUSTRY_ICONS = [Landmark, HeartPulse, Factory, ShoppingBag, GraduationCap, Building2, Video, Truck];

// SECTION: Company Introduction
export function CompanyIntro() {
  return (
    <section className="relative bg-white section-pad" data-testid="section-intro">
      <div className="absolute inset-0 grid-lines-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <SectionHeader
            eyebrow="00 · The Studio"
            title={<>India's trusted supplier of Grade-A refurbished laptops and IT hardware.</>}
            description="M DOT IT SOLUZIONE supplies refurbished laptops, computers and IT equipment across India. Since 2011 we've supplied thousands of certified refurbished Dell, HP, Lenovo laptops — tested by engineers, backed by warranty, delivered to your doorstep. From Mumbai startups to enterprise fleets, we help you save without compromising on quality."
          />
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/about" className="btn-outline-navy" data-testid="intro-cta-about">
                About us <ArrowUpRight size={16} />
              </Link>
              <Link to="/products/laptops" className="btn-primary" data-testid="intro-cta-services">
                Browse laptops <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-4 brand-gradient rounded-[28px] opacity-20 blur-2xl" />
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/5]">
              <img
                src="/images/hero/intro-laptop.webp"
                alt="Refurbished laptops ready for deployment"
                loading="lazy"
                decoding="async"
                width={900}
                height={1125}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 glass-navy rounded-2xl p-5 text-white">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#25B5FF]">Certified refurbished</div>
                <div className="mt-2 font-display text-lg font-semibold leading-tight">
                  40+ laptop models. 1-month warranty. Pan-India delivery.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// SECTION: Business Statistics
export function BusinessStats() {
  return (
    <section className="relative bg-[#F5F7FA] section-pad" data-testid="section-stats">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="border-t border-[#071B3B]/10 pt-6" data-testid={`stat-${i}`}>
                <div className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#071B3B]">
                  {s.value}
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#2E3440]/60">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION: Services
export function ServicesSection() {
  return (
    <section className="relative bg-white section-pad" data-testid="section-services">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr,1.4fr] gap-12 items-end mb-16">
          <SectionHeader
            eyebrow="01 · What we do"
            title={<>Six practices. One accountable delivery team.</>}
          />
          <Reveal delay={0.1}>
            <p className="text-[#2E3440]/70 lg:text-right">
              End-to-end enterprise IT — from network design and firewall migrations to workstation rollout and buy-back of your used hardware.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.05 }}
                className="card-soft p-8"
                data-testid={`service-card-${i}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-6">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="font-display text-xl font-semibold text-[#071B3B]">{s.title}</h3>
                <p className="mt-3 text-sm text-[#2E3440]/70 leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm text-[#0066FF] font-medium">
                  Learn more <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// SECTION: Enterprise Solutions manifesto (dark)
export function EnterpriseManifesto() {
  const chapters = [
    { n: "01", title: "We do not sell boxes.", body: "We deliver operating outcomes. Every quote begins with your business SLA — bandwidth, latency, uptime — not a vendor pricelist." },
    { n: "02", title: "Vendor-neutral by design.", body: "We hold official partnerships with 38+ vendors so we can recommend what actually fits, not what pads a quota." },
    { n: "03", title: "Pan-India supply chain.", body: "In-stock inventory at our Mumbai HQ ships same-day across India. Direct dispatch, no drop-shipping games." },
    { n: "04", title: "Engineer-led delivery.", body: "The engineer who scoped your project is the one on-site during cutover. Your name is not a ticket ID." },
  ];
  return (
    <section className="relative navy-bg text-white section-pad overflow-hidden" data-testid="section-manifesto">
      <div className="absolute inset-0 navy-grid-bg opacity-[0.4]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0066FF]/20 blur-[140px]" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="04 · The manifesto"
          title={<>How we operate — <span className="brand-gradient-text">in four principles.</span></>}
          dark
        />
        <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-16">
          {chapters.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.05}>
              <div className="border-t border-white/15 pt-8 max-w-lg">
                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#25B5FF]">{c.n}</div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-white leading-[1.1]">{c.title}</h3>
                <p className="mt-4 text-white/70 text-base leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION: Industries
export function IndustriesSection() {
  return (
    <section className="bg-white section-pad" data-testid="section-industries">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="05 · Industries We Serve"
          title={<>From trading floors to factory floors.</>}
          description="Eight regulated and demanding sectors where we've delivered engagements that pass audit and stay online."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind, i) => {
            const Icon = INDUSTRY_ICONS[i] || Building2;
            return (
              <Reveal key={ind.title} delay={(i % 4) * 0.04}>
                <div className="card-soft p-6 h-full" data-testid={`industry-${i}`}>
                  <div className="w-11 h-11 rounded-xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#071B3B]">{ind.title}</h3>
                  <p className="mt-2 text-sm text-[#2E3440]/70 leading-relaxed">{ind.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// SECTION: Why Us
export function WhyUsSection() {
  return (
    <section className="bg-[#F5F7FA] section-pad" data-testid="section-why">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-start">
        <SectionHeader
          eyebrow="06 · Why Choose Us"
          title={<>Chosen by CIOs who are tired of being sold to.</>}
          description="We do fewer things than a global integrator, and we do them with more accountability than a reseller."
        />
        <div className="space-y-8">
          {WHY_US.map((w, i) => (
            <Reveal key={w.n} delay={i * 0.05}>
              <div className="flex gap-6 items-start pb-8 border-b border-[#071B3B]/10 last:border-0" data-testid={`why-${i}`}>
                <div className="font-mono text-[11px] tracking-[0.24em] text-[#0066FF] pt-1 shrink-0">{w.n}</div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-[#071B3B]">{w.title}</h3>
                  <p className="mt-2 text-[#2E3440]/70 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION: Brands Marquee
export function BrandsMarquee() {
  const doubled = [...BRANDS, ...BRANDS];
  return (
    <section className="bg-white section-pad" data-testid="section-brands">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 mb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <SectionHeader
            eyebrow="07 · Brands We Deal With"
            title={<>Certified partners. Officially. Verifiably.</>}
          />
          <Reveal>
            <p className="text-[#2E3440]/70 lg:text-right">
              We source from 38+ vendors — with the paperwork, warranty coverage and licensing you need for compliant procurement.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="marquee py-8 border-y border-[#071B3B]/10">
        <div className="marquee-track">
          {doubled.map((b, i) => (
            <div key={i} className="font-display text-3xl md:text-5xl font-semibold text-[#071B3B]/25 whitespace-nowrap tracking-tight hover:text-[#0066FF] transition-colors">
              {b}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 mt-12 text-center">
        <Link to="/brands" className="btn-outline-navy" data-testid="brands-view-all">
          View all brands <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

// SECTION: Corporate Procurement + Sell Old Equipment split
export function ProcurementSplit() {
  return (
    <section className="bg-[#F5F7FA] section-pad" data-testid="section-procurement">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] navy-bg p-8 md:p-12 text-white min-h-[420px] flex flex-col justify-between" data-testid="cta-corporate">
            <div className="absolute inset-0 navy-grid-bg opacity-[0.4]" />
            <div className="absolute -bottom-24 -right-24 w-[280px] h-[280px] rounded-full bg-[#0066FF]/30 blur-[80px]" />
            <div className="relative">
              <div className="chip chip-navy w-fit">Corporate Procurement</div>
              <h3 className="mt-6 font-display text-3xl md:text-4xl font-semibold leading-tight max-w-md">
                Bulk hardware framework agreements — priced for scale.
              </h3>
              <p className="mt-4 text-white/70 max-w-lg">
                Multi-year MSA, dedicated account engineer, escrow stock and consolidated pan-India delivery. Built for procurement teams.
              </p>
            </div>
            <div className="relative mt-8 flex gap-3">
              <Link to="/corporate-solutions" className="btn-primary" data-testid="corporate-cta">
                Learn more <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[24px] bg-white p-8 md:p-12 min-h-[420px] flex flex-col justify-between" data-testid="cta-sell">
            <div className="absolute -top-24 -right-24 w-[280px] h-[280px] rounded-full bg-[#25B5FF]/25 blur-[80px]" />
            <div className="relative">
              <div className="chip w-fit">Sell Your Used IT</div>
              <h3 className="mt-6 font-display text-3xl md:text-4xl font-semibold text-[#071B3B] leading-tight max-w-md">
                Trade-in credit for your used servers, laptops and networking gear.
              </h3>
              <p className="mt-4 text-[#2E3440]/70 max-w-lg">
                NIST 800-88 certified secure wiping, WEEE-compliant recycling and instant credit against new hardware. Fast, transparent quotes.
              </p>
            </div>
            <div className="relative mt-8 flex gap-3">
              <Link to="/sell-equipment" className="btn-primary" data-testid="sell-cta">
                Get an offer <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// SECTION: Business process
export function ProcessSection() {
  return (
    <section className="bg-white section-pad" data-testid="section-process">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="08 · How we work"
          title={<>Four steps. Fully accountable. Fixed price.</>}
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <div className="relative p-8 border border-[#071B3B]/10 rounded-[20px] h-full hover:border-[#0066FF] transition-colors">
                <div className="font-mono text-[11px] tracking-[0.24em] text-[#0066FF]">{p.n}</div>
                <h3 className="mt-6 font-display text-xl font-semibold text-[#071B3B]">{p.title}</h3>
                <p className="mt-3 text-sm text-[#2E3440]/70 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION: Testimonials
export function TestimonialsSection() {
  return (
    <section className="bg-white section-pad" data-testid="section-testimonials">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="10 · Testimonials"
          title={<>What CIOs say — after the cutover.</>}
        />
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.05}>
              <blockquote className="card-soft p-8 md:p-10 h-full flex flex-col" data-testid={`testimonial-${i}`}>
                <div className="text-4xl font-display text-[#0066FF] leading-none">“</div>
                <p className="mt-4 text-lg md:text-xl text-[#071B3B] font-display leading-snug">{t.quote}</p>
                <footer className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full brand-gradient text-white font-display font-semibold flex items-center justify-center">
                    {t.name.split(" ").map(s => s[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#071B3B]">{t.name}</div>
                    <div className="text-xs text-[#2E3440]/60">{t.role} · {t.company}</div>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION: FAQ
export function FAQSection() {
  return (
    <section className="bg-[#F5F7FA] section-pad" data-testid="section-faq">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr,1.4fr] gap-16">
        <SectionHeader
          eyebrow="11 · FAQ"
          title={<>Frequently asked, precisely answered.</>}
          description="Everything you'd want to know before we start work — and a few things you probably haven't asked yet."
        />
        <Reveal>
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {FAQ_ITEMS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#071B3B]/10">
                <AccordionTrigger className="font-display text-lg font-semibold text-[#071B3B] py-6 hover:no-underline text-left" data-testid={`faq-q-${i}`}>
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#2E3440]/70 leading-relaxed pb-6 text-[15px]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
