import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import SEO from "@/components/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | M DOT IT SOLUZIONE"
        description="The page you're looking for doesn't exist. Browse our IT hardware catalog or contact us for assistance."
        keywords="404 error, page not found, IT hardware Mumbai"
      />
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-5">
        <div className="text-center max-w-lg">
          <h1 className="font-display text-9xl font-semibold text-[#071B3B] tracking-tight">404</h1>
          <h2 className="mt-4 font-display text-2xl font-semibold text-[#071B3B]">Page not found</h2>
          <p className="mt-4 text-[#2E3440]/70 text-lg">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Home size={18} />
              Go to Homepage
            </Link>
            <Link 
              to="/products" 
              className="btn-outline-navy inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              Browse Products
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
