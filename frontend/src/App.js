import { lazy, Suspense, useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import useLenis from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import HomePage from "@/pages/HomePage";

const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ProductsPage = lazy(() => import("@/pages/ProductsPage"));
const ProductCategoryPage = lazy(() => import("@/pages/ProductCategoryPage"));
const ProductDetailPage = lazy(() => import("@/pages/ProductDetailPage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const BrandsPage = lazy(() => import("@/pages/BrandsPage"));
const IndustriesPage = lazy(() => import("@/pages/IndustriesPage"));
const WhyPage = lazy(() => import("@/pages/WhyPage"));
const CorporatePage = lazy(() => import("@/pages/CorporatePage"));
const SellEquipmentPage = lazy(() => import("@/pages/SellEquipmentPage"));
const RequestQuotePage = lazy(() => import("@/pages/RequestQuotePage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const GalleryPage = lazy(() => import("@/pages/GalleryPage"));
const FAQPage = lazy(() =>
  import("@/pages/SimplePages").then((m) => ({ default: m.FAQPage }))
);
const TestimonialsPage = lazy(() =>
  import("@/pages/SimplePages").then((m) => ({ default: m.TestimonialsPage }))
);
const PrivacyPage = lazy(() =>
  import("@/pages/LegalPages").then((m) => ({ default: m.PrivacyPage }))
);
const TermsPage = lazy(() =>
  import("@/pages/LegalPages").then((m) => ({ default: m.TermsPage }))
);
const DisclaimerPage = lazy(() =>
  import("@/pages/LegalPages").then((m) => ({ default: m.DisclaimerPage }))
);
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function RouteFallback() {
  return <div className="min-h-[70vh] bg-white" aria-hidden="true" />;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function Shell() {
  useLenis();
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:categorySlug/:productId" element={<ProductDetailPage />} />
            <Route path="/products/:categorySlug" element={<ProductCategoryPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/why-choose-us" element={<WhyPage />} />
            <Route path="/corporate-solutions" element={<CorporatePage />} />
            <Route path="/sell-equipment" element={<SellEquipmentPage />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingActions />
      <Toaster
        position="bottom-center"
        theme="light"
        toastOptions={{
          style: {
            borderRadius: "999px",
            padding: "12px 20px",
            border: "1px solid rgba(7,27,59,0.08)",
            boxShadow: "0 12px 40px rgba(7,27,59,0.14)",
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
          },
        }}
      />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </div>
  );
}
