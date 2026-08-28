import PageShell from "@/components/PageShell";
import { WhyUsSection, ProcessSection, TestimonialsSection } from "@/components/HomeSections";

export default function WhyPage() {
  return (
    <PageShell
      eyebrow="Why Choose Us"
      title="Chosen by CIOs who are tired of being sold to."
      description="What sets us apart isn't the price list. It's how we scope, deliver and stand behind the work."
      imageUrl="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=srgb&fm=jpg&q=85"
    >
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
    </PageShell>
  );
}
