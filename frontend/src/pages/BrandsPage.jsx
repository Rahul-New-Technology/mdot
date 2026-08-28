import PageShell from "../components/PageShell";
import { Reveal, SectionHeader } from "../components/Reveal";
import { BRANDS } from "../data/site";

export default function BrandsPage() {
  return (
    <PageShell
      eyebrow="Brands"
      title="Officially certified partner for the vendors that matter."
      description="From Cisco to Fortinet — with the paperwork, licensing and warranty coverage your procurement team needs."
      imageUrl="https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?crop=entropy&cs=srgb&fm=jpg&q=85"
    >
      <section className="bg-white section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <SectionHeader eyebrow="Our vendor stack" title={<>16 major brands. 38+ total partnerships.</>} />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4" data-testid="brands-grid">
            {BRANDS.map((b, i) => (
              <Reveal key={b} delay={(i % 8) * 0.03}>
                <div className="card-soft aspect-[4/3] flex items-center justify-center p-6 group">
                  <div className="font-display text-xl md:text-2xl font-semibold text-[#071B3B] text-center group-hover:text-[#0066FF] transition-colors">{b}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
