import PageShell from "@/components/PageShell";
import ContactBlock from "@/components/ContactBlock";
import { MapAndContact } from "@/components/HomeSections";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Mumbai HQ. Pan-India delivery. Site surveys in 5 days."
      description="Prefer a call, a message or a coffee at our Sakinaka office? All three work — we're old-fashioned like that."
      imageUrl="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=srgb&fm=jpg&q=85"
    >
      <MapAndContact />
    </PageShell>
  );
}
