import PageShell from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
<<<<<<< HEAD
=======
import { sizedUnsplash } from "@/lib/unsplash";
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d

const GALLERY = [
  "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=srgb&fm=jpg&q=85",
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=srgb&fm=jpg&q=85",
  "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=srgb&fm=jpg&q=85",
  "https://images.unsplash.com/photo-1560264280-88b68371db39?crop=entropy&cs=srgb&fm=jpg&q=85",
  "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=srgb&fm=jpg&q=85",
  "https://images.unsplash.com/photo-1698668975271-2ba9a323be6b?crop=entropy&cs=srgb&fm=jpg&q=85",
  "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?crop=entropy&cs=srgb&fm=jpg&q=85",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=srgb&fm=jpg&q=85",
  "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?crop=entropy&cs=srgb&fm=jpg&q=85",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=srgb&fm=jpg&q=85",
];

const CAPTIONS = [
  "Datacenter — Mumbai BKC",
  "Aggregation switch — night shift",
  "Rack build — pre-cutover",
  "Field engineers — Pune DC",
  "HQ Sakinaka — team",
  "MikroTik CCR — QA bench",
  "Structured cabling — factory floor",
  "Server refresh — banking client",
  "Workstation staging — media co.",
  "Warehouse — Mumbai HQ",
];

export default function GalleryPage() {
  return (
    <PageShell
      eyebrow="Gallery"
      title="From the field. From the workshop. From the warehouse."
      description="A slice of the work that goes into keeping Indian enterprise IT running."
      imageUrl="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=srgb&fm=jpg&q=85"
    >
      <section className="bg-white section-pad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]" data-testid="gallery-grid">
            {GALLERY.map((src, i) => (
              <Reveal key={i} delay={(i % 6) * 0.03}>
                <figure className="mb-5 break-inside-avoid group relative overflow-hidden rounded-[20px] bg-[#F5F7FA]">
<<<<<<< HEAD
                  <img src={src} alt={CAPTIONS[i]} loading="lazy" className={`w-full ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[5/4]"} object-cover group-hover:scale-105 transition-transform duration-700`} />
=======
                  <img src={sizedUnsplash(src, { w: 800, q: 70 })} alt={CAPTIONS[i]} loading="lazy" decoding="async" width={800} height={800} className={`w-full ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[5/4]"} object-cover group-hover:scale-105 transition-transform duration-700`} />
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
                  <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white text-xs font-mono uppercase tracking-[0.16em] bg-gradient-to-t from-[#071B3B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    {CAPTIONS[i]}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
