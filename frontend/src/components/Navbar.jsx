import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { NAV, COMPANY } from "@/data/site";
import { Logo } from "@/components/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,border,padding] duration-300 ${
          scrolled ? "py-3 glass-white border-b border-black/5" : "py-5 bg-transparent"
        }`}
        data-testid="site-navbar"
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between gap-6">
          <Link to="/" data-testid="nav-logo" aria-label="Home">
            <Logo variant={scrolled ? "dark" : "light"} size={40} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.slice(0, 8).map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  className="relative"
                >
                  <button
                    className={`px-4 py-2 text-[13px] tracking-wide transition-colors flex items-center gap-1 ${scrolled ? "text-[#071B3B]/80 hover:text-[#0066FF]" : "text-white/85 hover:text-white"}`}
                    data-testid={`nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full pt-3"
                      >
                        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(7,27,59,0.15)] p-3 min-w-[240px] border border-black/5">
                          {item.children.map((c) => (
                            <Link
                              key={c.label}
                              to={c.to}
                              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[13px] text-[#071B3B] hover:bg-[#F5F7FA] transition-colors group"
                              data-testid={`nav-child-${c.label.toLowerCase()}`}
                            >
                              {c.label}
                              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-[#0066FF] transition-opacity" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`px-4 py-2 text-[13px] tracking-wide transition-colors ${
                    pathname === item.to
                      ? scrolled ? "text-[#0066FF]" : "text-[#25B5FF]"
                      : scrolled ? "text-[#071B3B]/80 hover:text-[#0066FF]" : "text-white/85 hover:text-white"
                  }`}
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className={`text-[13px] font-mono transition-colors ${scrolled ? "text-[#071B3B]/70 hover:text-[#0066FF]" : "text-white/70 hover:text-white"}`}
              data-testid="nav-phone"
            >
              {COMPANY.phone}
            </a>
            <Link to="/request-quote" className="btn-primary text-[13px]" data-testid="nav-cta-quote">
              Request quote
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 rounded-full ${scrolled ? "bg-[#F5F7FA] text-[#071B3B]" : "bg-white/10 text-white border border-white/20"}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            data-testid="nav-mobile-toggle"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-white pt-24 pb-10 px-6 overflow-y-auto"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="py-3 border-b border-black/5 text-lg font-display text-[#071B3B]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a href={`tel:${COMPANY.phoneRaw}`} className="btn-outline-navy justify-center">
                Call {COMPANY.phone}
              </a>
              <Link to="/request-quote" className="btn-primary justify-center">Request a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
