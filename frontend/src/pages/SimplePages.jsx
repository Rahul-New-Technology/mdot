import PageShell from "@/components/PageShell";
import { FAQSection, TestimonialsSection } from "@/components/HomeSections";

export function FAQPage() {
  return (
    <PageShell
      eyebrow="FAQ"
      title="Frequently asked. Precisely answered."
      description="Everything you'd want to know before we start work."
      imageUrl="https://images.unsplash.com/photo-1698668975271-2ba9a323be6b?crop=entropy&cs=srgb&fm=jpg&q=85"
    >
      <FAQSection />
    </PageShell>
  );
}

export function TestimonialsPage() {
  return (
    <PageShell
      eyebrow="Testimonials"
      title="Client outcomes, from the client's mouth."
      description="A selection of unedited quotes from CIOs and CTOs across India."
      imageUrl="https://images.unsplash.com/photo-1560264280-88b68371db39?crop=entropy&cs=srgb&fm=jpg&q=85"
    >
      <TestimonialsSection />
    </PageShell>
  );
}
