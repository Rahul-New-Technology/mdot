import PageShell from "../components/PageShell";
import { Reveal, SectionHeader } from "../components/Reveal";
import { PhoneCall, ArrowUpRight, RefreshCw, Laptop, Monitor, Server, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data/site";
import { trackGoogleAdsPhoneConversion } from "../utils/googleAdsTracking";

export default function ItHardwareRefurbishmentPage() {
  const handleCallClick = () => {
    trackGoogleAdsPhoneConversion(COMPANY.phoneRaw);
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
        Request Assessment
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
      eyebrow="Services · Hardware Restoration"
      title="IT Hardware Refurbishment Services"
      description="We help give suitable used IT equipment a second life through inspection, testing, cleaning and refurbishment processes. Depending on the equipment, refurbishment may include hardware testing, component checks, cleaning, storage replacement, RAM upgrades and other necessary work."
      imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=srgb&fm=jpg&q=85"
      customActions={customActions}
      quickContact={quickContact}
    >
      <section className="bg-white section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <SectionHeader eyebrow="01 · Equipment We Refurbish" title={<>Refurbishment Process</>} />
          
          <Reveal>
            <div className="mt-12 max-w-3xl mx-auto">
              <p className="text-[#2E3440]/70 text-lg leading-relaxed mb-8">
                The goal is to make suitable used equipment ready for reuse while identifying equipment that is not suitable for further use.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Laptop, title: "Laptops" },
              { icon: Monitor, title: "Desktops" },
              { icon: Monitor, title: "Workstations" },
              { icon: Server, title: "Servers" },
              { icon: Network, title: "Networking Equipment" },
              { icon: RefreshCw, title: "Hardware Testing" },
              { icon: RefreshCw, title: "Component Checks" },
              { icon: RefreshCw, title: "Cleaning & Restoration" },
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

      <section className="bg-[#071B3B] text-white section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">Have used IT equipment that needs assessment?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Contact M DOT IT SOLUZIONE for IT hardware refurbishment services.
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
