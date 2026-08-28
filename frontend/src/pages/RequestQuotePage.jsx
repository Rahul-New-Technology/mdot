import PageShell from "../components/PageShell";
import ContactBlock from "../components/ContactBlock";
import { useSearchParams } from "react-router-dom";

export default function RequestQuotePage() {
  const [params] = useSearchParams();
  const product = params.get("product") || "";
  return (
    <PageShell
      eyebrow="Request a Quote"
      title="Tell us what you need. Get a real price in 24 hours."
      description={product ? `You're requesting a quote for: ${product}` : "Whether it's a single switch or a datacenter refresh, our engineers will scope and price it — no vague ranges, no vendor games."}
      imageUrl="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=srgb&fm=jpg&q=85"
    >
      <section className="bg-white section-pad">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <ContactBlock kind="quote" defaultProduct={product} />
        </div>
      </section>
    </PageShell>
  );
}
