import { SectionHeader } from "@/components/Reveal";
import ContactBlock from "@/components/ContactBlock";
import LocationMap from "@/components/LocationMap";

export default function MapAndContact() {
  return (
    <section className="bg-[#F5F7FA] section-pad" data-testid="section-contact">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="13 · Get in touch"
          title={<>Start a conversation.</>}
          description="Mumbai HQ. Pan-India delivery. Site surveys in 5 business days."
        />
        <div className="mt-16 grid lg:grid-cols-2 gap-6 items-stretch">
          <LocationMap />
          <ContactBlock />
        </div>
      </div>
    </section>
  );
}
