import Hero from "@/components/Hero";
import {
  CompanyIntro, BusinessStats, ServicesSection, FeaturedProducts,
  NetworkingBento, EnterpriseManifesto, IndustriesSection, WhyUsSection,
  BrandsMarquee, ProcurementSplit, ProcessSection, LatestProducts,
  TestimonialsSection, FAQSection, BlogPreview, MapAndContact
} from "@/components/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <BusinessStats />
      <ServicesSection />
      <FeaturedProducts />
      <NetworkingBento />
      <EnterpriseManifesto />
      <IndustriesSection />
      <WhyUsSection />
      <BrandsMarquee />
      <ProcurementSplit />
      <ProcessSection />
      <LatestProducts />
      <TestimonialsSection />
      <FAQSection />
      <BlogPreview />
      <MapAndContact />
    </>
  );
}
