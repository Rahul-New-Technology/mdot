import PageShell from "../components/PageShell";
import { Reveal, SectionHeader } from "../components/Reveal";
import { PhoneCall, ArrowUpRight, Trash2, Building2, Server, Laptop, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data/site";
import { trackGoogleAdsPhoneConversion } from "../utils/googleAdsTracking";

export default function ItAssetDisposalPage() {
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
        Contact Us
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
      eyebrow="Services · IT Asset Management"
      title="IT Asset Disposal Services"
      description="When your company replaces or upgrades its IT infrastructure, managing old equipment can become a challenge. M DOT IT SOLUZIONE helps businesses with the collection and disposal of unwanted IT assets."
      imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=srgb&fm=jpg&q=85"
      customActions={customActions}
      quickContact={quickContact}
    >
      <section className="bg-white section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <SectionHeader eyebrow="01 · What We Handle" title={<>IT Asset Disposal</>} />
          
          <Reveal>
            <div className="mt-12 max-w-3xl mx-auto">
              <p className="text-[#2E3440]/70 text-lg leading-relaxed mb-8">
                We help organizations clear their old IT hardware in an organized and responsible manner, including computers, laptops, servers, workstations and networking equipment.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Office IT Upgrades" },
              { icon: Building2, title: "Company Relocation" },
              { icon: Server, title: "Data Center Upgrades" },
              { icon: Server, title: "Hardware Replacement" },
              { icon: Building2, title: "Office Closures" },
              { icon: Server, title: "Surplus Inventory" },
              { icon: Trash2, title: "Decommissioned IT Equipment" },
              { icon: Laptop, title: "Old & Unused Hardware" },
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
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">Need to clear old IT equipment?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Contact M DOT IT SOLUZIONE for responsible IT asset disposal services.
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
