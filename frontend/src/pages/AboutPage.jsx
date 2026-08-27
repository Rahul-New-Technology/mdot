import PageShell from "@/components/PageShell";
import { Reveal, SectionHeader } from "@/components/Reveal";
import { STATS, WHY_US, PROCESS, COMPANY } from "@/data/site";
import { Award, Users, Globe2, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About · Since 2011"
      title="A studio of engineers pretending to be a hardware supplier."
      description="We started in 2011 outside Mumbai with a small team of engineers and a rack. Today we deliver enterprise IT across India — with the same discipline."
      imageUrl="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=srgb&fm=jpg&q=85"
    >
      <section className="bg-white section-pad" data-testid="about-story">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr,1.2fr] gap-16">
          <SectionHeader
            eyebrow="00 · The story"
            title={<>Fourteen years of shipping infrastructure that stays online.</>}
          />
          <Reveal>
            <div className="space-y-6 text-[15px] text-[#2E3440]/80 leading-relaxed">
              <p>M DOT IT SOLUZIONE was founded in {COMPANY.founded} by a small team of network engineers who had, between them, deployed more Cisco cores than they cared to remember. What was missing from the market wasn't hardware — it was accountability.</p>
              <p>Global integrators were slow. Resellers were faceless. The industry needed a partner that sat between them: fluent in enterprise engineering, but with the responsiveness of a boutique.</p>
              <p>Today, we serve 2,400+ businesses across India — from Mumbai-based fintechs to manufacturing plants in Pune and Chennai — with an in-house team of certified engineers, a Mumbai HQ warehouse, and 38+ vendor partnerships.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F5F7FA] section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <SectionHeader eyebrow="01 · By the numbers" title={<>The scale we've quietly grown into.</>} />
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="border-t border-[#071B3B]/10 pt-6">
                  <div className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-[#071B3B]">{s.value}</div>
                  <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#2E3440]/60">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <SectionHeader eyebrow="02 · Values" title={<>What we believe.</>} />
          <div className="space-y-8">
            {WHY_US.map((w, i) => (
              <Reveal key={w.n} delay={i * 0.05}>
                <div className="flex gap-6 items-start pb-8 border-b border-[#071B3B]/10 last:border-0">
                  <div className="font-mono text-[11px] tracking-[0.24em] text-[#0066FF] pt-1">{w.n}</div>
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
    </PageShell>
  );
}
