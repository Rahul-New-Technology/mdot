import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Instagram } from "lucide-react";
import { COMPANY } from "@/data/site";
import { Logo } from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="navy-bg text-white relative overflow-hidden" data-testid="site-footer">
      <div className="absolute inset-0 navy-grid-bg opacity-[0.35]" />
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#0066FF]/20 blur-[120px]" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 pt-24 pb-10">
        <div className="grid lg:grid-cols-[1.4fr,1fr,1fr,1fr] gap-12 pb-16">
          <div>
            <Logo variant="light" size={48} />
            <p className="mt-6 text-white/70 text-sm leading-relaxed max-w-sm">
              Enterprise IT hardware, networking and lifecycle services for businesses across India. Vendor-neutral. Engineer-led. In stock.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#25B5FF]/80 mb-5">Company</div>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/brands" className="hover:text-white transition-colors">Brands</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#25B5FF]/80 mb-5">Solutions</div>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/corporate-solutions" className="hover:text-white transition-colors">Corporate Solutions</Link></li>
              <li><Link to="/sell-equipment" className="hover:text-white transition-colors">Sell Used IT</Link></li>
              <li><Link to="/request-quote" className="hover:text-white transition-colors">Request a Quote</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#25B5FF]/80 mb-5">Contact</div>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-[#25B5FF]" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#25B5FF]" />
                <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-white transition-colors">{COMPANY.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#25B5FF]" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">{COMPANY.email}</a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-[#25B5FF] hover:text-[#25B5FF] transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-[#25B5FF] hover:text-[#25B5FF] transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 text-xs text-white/50 font-mono">
            <div>
              © {new Date().getFullYear()} {COMPANY.name} · GST {COMPANY.gst} · All rights reserved
            </div>
            <div className="text-white/40">
              Designed & Developed by Rahul Kumar | GrowthAdda Media Team | <a href="tel:+916307795815" className="hover:text-white transition-colors">📞 +91 63077 95815</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 text-xs text-white/60">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link to="/contact" className="hover:text-white transition-colors inline-flex items-center gap-1">
              Contact <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
