import PageShell from "../components/PageShell";
import { Reveal, SectionHeader } from "../components/Reveal";
import { SERVICES } from "../data/site";
import { Network, Server, Monitor, Recycle, Settings, Laptop, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ICONS = { network: Network, server: Server, monitor: Monitor, recycle: Recycle, settings: Settings, laptop: Laptop };

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="End-to-end enterprise IT — six practices, one team."
      description="Design, supply, deploy, monitor and retire. We cover the full lifecycle so your team can focus on outcomes."
      imageUrl="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=srgb&fm=jpg&q=85"
    >
      <section className="bg-white section-pad" data-testid="services-list">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <Reveal key={s.title} delay={(i % 2) * 0.05}>
                  <article className="card-soft p-10 h-full" data-testid={`service-${i}`}>
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center shrink-0">
                        {Icon && <Icon size={26} />}
                      </div>
                      <div>
                        <div className="font-mono text-[11px] tracking-[0.24em] text-[#0066FF]">0{i + 1}</div>
                        <h3 className="mt-2 font-display text-2xl font-semibold text-[#071B3B]">{s.title}</h3>
                        <p className="mt-3 text-[#2E3440]/70 leading-relaxed">{s.desc}</p>
                        <Link to="/request-quote" className="mt-6 inline-flex items-center gap-1.5 text-sm text-[#0066FF] font-medium">
                          Request scoping call <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
