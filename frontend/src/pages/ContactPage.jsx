import PageShell from "@/components/PageShell";
<<<<<<< HEAD
import ContactBlock from "@/components/ContactBlock";
import { MapAndContact } from "@/components/HomeSections";
=======
import MapAndContact from "@/components/MapAndContact";
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d

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
