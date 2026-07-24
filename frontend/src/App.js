import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import useLenis from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProductsPage from "@/pages/ProductsPage";
import ServicesPage from "@/pages/ServicesPage";
import BrandsPage from "@/pages/BrandsPage";
import IndustriesPage from "@/pages/IndustriesPage";
import WhyPage from "@/pages/WhyPage";
import CorporatePage from "@/pages/CorporatePage";
import SellEquipmentPage from "@/pages/SellEquipmentPage";
import RequestQuotePage from "@/pages/RequestQuotePage";
import ContactPage from "@/pages/ContactPage";
import GalleryPage from "@/pages/GalleryPage";
import { BlogListPage, BlogPostPage } from "@/pages/BlogPages";
import { FAQPage, TestimonialsPage } from "@/pages/SimplePages";
import { PrivacyPage, TermsPage, DisclaimerPage } from "@/pages/LegalPages";
import NotFoundPage from "@/pages/NotFoundPage";

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/why-choose-us" element={<WhyPage />} />
          <Route path="/corporate-solutions" element={<CorporatePage />} />
          <Route path="/sell-equipment" element={<SellEquipmentPage />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
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
