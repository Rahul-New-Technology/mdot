import PageShell from "../components/PageShell";
import { Reveal, SectionHeader } from "../components/Reveal";
import { PhoneCall, ArrowUpRight, HardDrive, Server, Monitor, Laptop, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data/site";
import { trackGoogleAdsPhoneConversion } from "../utils/googleAdsTracking";

export default function RamSsdPage() {
  const handleCallClick = () => {
    trackGoogleAdsPhoneConversion(COMPANY.phoneRaw);
  };

  const customActions = (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={`tel:${COMPANY.phoneRaw}`}
        className="btn-primary justify-center"
        onClick={handleCallClick}
        data-testid="ram-ssd-call-btn"
      >
        <PhoneCall size={16} />
        Call Now
      </a>
      <Link to="/sell-equipment" className="btn-ghost justify-center">
        Sell Your RAM & SSD
        <ArrowUpRight size={16} />
      </Link>
    </div>
  );

  const quickContact = (
    <div className="space-y-3">
      <a
        href={`tel:${COMPANY.phoneRaw}`}
        className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
        onClick={handleCallClick}
      >
        <PhoneCall size={18} className="text-[#25B5FF]" />
        <span className="font-mono text-sm">{COMPANY.phone}</span>
      </a>
      <a
        href={`mailto:${COMPANY.email}`}
        className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
      >
        <span className="text-[#25B5FF]">@</span>
        <span className="text-sm">{COMPANY.email}</span>
      </a>
    </div>
  );

  return (
    <PageShell
      eyebrow="Products · Memory & Storage"
      title="Buy & Sell RAM & SSD"
      description="M DOT IT SOLUZIONE buys and sells quality RAM and SSD for desktops, laptops, servers, and enterprise systems. Contact us for surplus RAM/SSD inventory or upgrade requirements."
      imageUrl="https://images.unsplash.com/photo-1562976540-1502c2145186?crop=entropy&cs=srgb&fm=jpg&q=85"
      customActions={customActions}
      quickContact={quickContact}
    >
      <section className="bg-white section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <SectionHeader eyebrow="01 · What We Deal In" title={<>Comprehensive RAM & SSD Solutions</>} />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="card-soft p-8">
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-6">
                  <Cpu size={24} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#071B3B] mb-4">RAM Memory</h3>
                <ul className="space-y-3 text-[#2E3440]/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">•</span>
                    <span>Desktop RAM (DDR3, DDR4, DDR5)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">•</span>
                    <span>Laptop RAM (SODIMM DDR3, DDR4, DDR5)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">•</span>
                    <span>Server RAM (ECC RDIMM, LRDIMM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">•</span>
                    <span>Various capacities and speeds</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-soft p-8">
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-6">
                  <HardDrive size={24} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#071B3B] mb-4">SSD Storage</h3>
                <ul className="space-y-3 text-[#2E3440]/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">•</span>
                    <span>SATA SSDs (2.5" form factor)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">•</span>
                    <span>NVMe SSDs (M.2, PCIe)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">•</span>
                    <span>Enterprise SSDs (SAS, NVMe)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">•</span>
                    <span>Various capacities and form factors</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <SectionHeader eyebrow="02 · We Buy & Sell" title={<>Two-Way Trading Model</>} />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Reveal>
              <div>
                <h3 className="font-display text-2xl font-semibold text-[#071B3B] mb-4">We SELL RAM & SSD</h3>
                <p className="text-[#2E3440]/70 leading-relaxed mb-6">
                  We supply quality-tested RAM and SSD for businesses, offices, IT companies, and individual customers. Whether you need to upgrade existing systems or build new ones, we have the memory and storage solutions you need at competitive prices.
                </p>
                <ul className="space-y-2 text-[#2E3440]/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">✓</span>
                    <span>Quality-tested and verified components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">✓</span>
                    <span>Compatible with major brands (Dell, HP, Lenovo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">✓</span>
                    <span>Competitive pricing for bulk orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">✓</span>
                    <span>Warranty on select products</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h3 className="font-display text-2xl font-semibold text-[#071B3B] mb-4">We BUY RAM & SSD</h3>
                <p className="text-[#2E3440]/70 leading-relaxed mb-6">
                  We purchase used, surplus, excess, and decommissioned RAM and SSD inventory from businesses and organizations. If you have old memory modules or storage drives from IT upgrades, asset clearance, or office liquidation, contact us for a competitive quote.
                </p>
                <ul className="space-y-2 text-[#2E3440]/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">✓</span>
                    <span>Used RAM (desktop, laptop, server)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">✓</span>
                    <span>Surplus RAM inventory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">✓</span>
                    <span>Excess RAM from upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">✓</span>
                    <span>Used SSDs (SATA, NVMe, enterprise)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1">✓</span>
                    <span>Surplus SSD inventory</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <Link to="/sell-equipment" className="btn-primary inline-flex items-center gap-2">
                Sell Your RAM & SSD
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <SectionHeader eyebrow="03 · Contact Us" title={<>Get in Touch for RAM & SSD</>} />
          
          <Reveal>
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-[#2E3440]/70 text-lg leading-relaxed mb-8">
                Whether you need to buy RAM and SSD for your systems or have surplus inventory to sell, M DOT IT SOLUZIONE is here to help. Contact us today for competitive pricing and reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="btn-primary justify-center"
                  onClick={handleCallClick}
                >
                  <PhoneCall size={18} />
                  Call {COMPANY.phone}
                </a>
                <Link to="/contact" className="btn-ghost justify-center">
                  Contact Form
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
