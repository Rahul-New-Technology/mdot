import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import MapAndContact from "@/components/MapAndContact";
import {
  CompanyIntro, BusinessStats, ServicesSection,
  EnterpriseManifesto, IndustriesSection, WhyUsSection,
  BrandsMarquee, ProcurementSplit, ProcessSection,
  TestimonialsSection, FAQSection
} from "@/components/HomeSections";

export default function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <CompanyIntro />
      <BusinessStats />
      <ServicesSection />
      <EnterpriseManifesto />
      <IndustriesSection />
      <WhyUsSection />
      <BrandsMarquee />
      <ProcurementSplit />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <MapAndContact />
    </>
  );
}
