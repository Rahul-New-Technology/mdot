import PageShell from "../components/PageShell";
import { Reveal, SectionHeader } from "../components/Reveal";
import { PhoneCall, ArrowUpRight, HardDrive, Cpu, Wrench, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data/site";

export default function RamSsdUpgradePage() {
  const handleCallClick = () => {
    try {
      if (
        typeof window !== "undefined" &&
        typeof window.gtag_report_call_conversion === "function"
      ) {
        window.gtag_report_call_conversion();
      }
    } catch (error) {
      console.warn("Google Ads call conversion tracking failed:", error);
    }
  };

  const customActions = (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={`tel:${COMPANY.phoneRaw}`}
        className="btn-primary justify-center"
        onClick={handleCallClick}
      >
        <PhoneCall size={16} />
        Call Now
      </a>
      <Link to="/contact" className="btn-ghost justify-center">
        Request Upgrade
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
      eyebrow="Services · Performance Upgrades"
      title="RAM & SSD Upgrade Services"
      description="Improve the performance and storage capacity of compatible laptops and desktops with RAM and SSD upgrades. We can help customers identify suitable RAM and SSD options based on their system requirements."
      imageUrl="https://images.unsplash.com/photo-1562976540-1502c2145186?crop=entropy&cs=srgb&fm=jpg&q=85"
      customActions={customActions}
      quickContact={quickContact}
    >
      <section className="bg-white section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <SectionHeader eyebrow="01 · Upgrade Services" title={<>What We Offer</>} />
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cpu, title: "RAM Upgrade" },
              { icon: HardDrive, title: "SSD Upgrade" },
              { icon: HardDrive, title: "HDD to SSD Upgrade" },
              { icon: Laptop, title: "Laptop RAM Installation" },
              { icon: Monitor, title: "Desktop RAM Installation" },
              { icon: HardDrive, title: "SSD Installation" },
              { icon: Wrench, title: "System Compatibility Checking" },
              { icon: Zap, title: "Hardware Testing" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="card-soft p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#071B3B]">{item.title}</h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <SectionHeader eyebrow="02 · Additional Services" title={<>Complete RAM & SSD Solutions</>} />
          
          <Reveal>
            <div className="mt-12 max-w-3xl mx-auto">
              <p className="text-[#2E3440]/70 text-lg leading-relaxed">
                We also buy and sell used/refurbished RAM and SSDs, depending on availability and condition.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#071B3B] text-white section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">Need a RAM or SSD upgrade?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Contact M DOT IT SOLUZIONE for RAM and SSD upgrade services.
            </p>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="btn-primary inline-flex items-center gap-2 bg-white text-[#071B3B] hover:bg-white/90"
              onClick={handleCallClick}
            >
              <PhoneCall size={18} />
              Call {COMPANY.phone}
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
