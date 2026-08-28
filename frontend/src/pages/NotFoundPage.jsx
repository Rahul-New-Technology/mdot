import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | M DOT IT SOLUZIONE"
        description="The page you're looking for doesn't exist. Browse our IT hardware catalog or return home."
        keywords="404 error, page not found, IT hardware Mumbai"
        noIndex
      />
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-5 pt-24">
        <div className="text-center max-w-lg">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#0066FF]">Error 404</p>
          <h1 className="mt-3 font-display text-8xl sm:text-9xl font-semibold text-[#071B3B] tracking-tight">404</h1>
          <h2 className="mt-4 font-display text-2xl font-semibold text-[#071B3B]">This page was not found</h2>
          <p className="mt-4 text-[#2E3440]/70 text-lg">
            The URL may be mistyped or the page has moved. Valid product pages such as /products/servers still work — this screen is only for unknown paths.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <Link
              to="/products"
              className="btn-outline-navy inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              View Products
            </Link>
          </div>
          <div className="mt-12 pt-8 border-t border-[#071B3B]/10">
            <p className="text-sm text-[#2E3440]/60">
              Need help? <Link to="/contact" className="text-[#0066FF] font-medium hover:underline">Contact our team</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
