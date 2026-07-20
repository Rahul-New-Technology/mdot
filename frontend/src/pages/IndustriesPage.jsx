import PageShell from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { INDUSTRIES } from "@/data/site";
import { Landmark, HeartPulse, Factory, ShoppingBag, GraduationCap, Building2, Video, Truck, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ICONS = [Landmark, HeartPulse, Factory, ShoppingBag, GraduationCap, Building2, Video, Truck];

export default function IndustriesPage() {
  return (
    <PageShell
      eyebrow="Industries We Serve"
      title="Eight regulated sectors. One delivery discipline."
      description="From PCI-DSS trading floors to AgID-compliant public sector projects — audit-ready infrastructure that stays online."
      imageUrl="https://images.unsplash.com/photo-1560264280-88b68371db39?crop=entropy&cs=srgb&fm=jpg&q=85"
    >
      <section className="bg-white section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-6">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={ind.title} delay={(i % 4) * 0.04}>
                <article className="card-soft p-10 h-full flex items-start gap-6" data-testid={`industry-${i}`}>
                  <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#071B3B]">{ind.title}</h3>
                    <p className="mt-3 text-[#2E3440]/70 leading-relaxed">{ind.desc}</p>
                    <Link to="/request-quote" className="mt-5 inline-flex items-center gap-1.5 text-sm text-[#0066FF] font-medium">
                      Discuss your use case <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
