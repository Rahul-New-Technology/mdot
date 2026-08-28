<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useEffect, useId, useRef, useState } from "react";
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { NAV, COMPANY } from "@/data/site";
import { Logo } from "@/components/Logo";

<<<<<<< HEAD
=======
function navItemActive(pathname, item) {
  if (item.to === "/") return pathname === "/";
  if (item.children) return pathname === item.to || pathname.startsWith(`${item.to}/`);
  return pathname === item.to;
}

>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
<<<<<<< HEAD
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
=======
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const { pathname } = useLocation();
  const dropdownId = useId();
  const closeTimer = useRef(null);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

<<<<<<< HEAD
=======
  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };

  const scheduleCloseProducts = () => {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120);
  };

  const productsItem = NAV.find((item) => item.children);

>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
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
<<<<<<< HEAD
          <Link to="/" data-testid="nav-logo" aria-label="Home">
            <Logo variant={scrolled ? "dark" : "light"} size={40} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
=======
          <Link to="/" data-testid="nav-logo" aria-label="M DOT IT SOLUZIONE home" className="shrink-0">
            <Logo variant={scrolled ? "dark" : "light"} size={44} />
          </Link>

          <nav className="hidden lg:flex items-center gap-0 xl:gap-1 flex-nowrap shrink min-w-0" aria-label="Primary">
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
            {NAV.slice(0, 8).map((item) =>
              item.children ? (
                <div
                  key={item.label}
<<<<<<< HEAD
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
=======
                  onMouseEnter={openProducts}
                  onMouseLeave={scheduleCloseProducts}
                  className="relative"
                >
                  <Link
                    to={item.to}
                    className={`px-2.5 xl:px-3 py-2 text-[13px] tracking-wide whitespace-nowrap shrink-0 transition-colors flex items-center gap-1 rounded-full ${
                      navItemActive(pathname, item)
                        ? scrolled
                          ? "text-[#0066FF] bg-[#0066FF]/8"
                          : "text-[#25B5FF]"
                        : scrolled
                          ? "text-[#071B3B]/80 hover:text-[#0066FF]"
                          : "text-white/85 hover:text-white"
                    }`}
                    aria-expanded={productsOpen}
                    aria-haspopup="menu"
                    aria-controls={dropdownId}
                    data-testid={`nav-${item.label.toLowerCase()}`}
                    onFocus={openProducts}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setProductsOpen(false);
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        openProducts();
                      }
                    }}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                  </Link>
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        id={dropdownId}
                        role="menu"
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full pt-3"
<<<<<<< HEAD
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
=======
                        onMouseEnter={openProducts}
                        onMouseLeave={scheduleCloseProducts}
                      >
                        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(7,27,59,0.15)] p-3 min-w-[240px] border border-black/5">
                          {item.children.map((c) => {
                            const active = pathname === c.to;
                            return (
                              <Link
                                key={c.label}
                                to={c.to}
                                role="menuitem"
                                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-[13px] transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0066FF] ${
                                  active
                                    ? "bg-[#0066FF]/10 text-[#0066FF] font-medium"
                                    : "text-[#071B3B] hover:bg-[#F5F7FA] active:bg-[#E8EEF7]"
                                }`}
                                data-testid={`nav-child-${c.label.toLowerCase()}`}
                              >
                                {c.label}
                                <ArrowUpRight
                                  size={14}
                                  className={`text-[#0066FF] transition-opacity ${
                                    active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                  }`}
                                />
                              </Link>
                            );
                          })}
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
<<<<<<< HEAD
                  className={`px-4 py-2 text-[13px] tracking-wide transition-colors ${
                    pathname === item.to
                      ? scrolled ? "text-[#0066FF]" : "text-[#25B5FF]"
                      : scrolled ? "text-[#071B3B]/80 hover:text-[#0066FF]" : "text-white/85 hover:text-white"
=======
                  className={`px-2.5 xl:px-3 py-2 text-[13px] tracking-wide whitespace-nowrap shrink-0 transition-colors ${
                    navItemActive(pathname, item)
                      ? scrolled
                        ? "text-[#0066FF]"
                        : "text-[#25B5FF]"
                      : scrolled
                        ? "text-[#071B3B]/80 hover:text-[#0066FF]"
                        : "text-white/85 hover:text-white"
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
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
<<<<<<< HEAD
            aria-label="Menu"
=======
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
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
<<<<<<< HEAD
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
=======
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-b border-black/5">
                    <button
                      type="button"
                      className="w-full py-3 text-lg font-display text-[#071B3B] flex items-center justify-between"
                      aria-expanded={mobileProductsOpen}
                      onClick={() => setMobileProductsOpen((v) => !v)}
                    >
                      {item.label}
                      <ChevronDown size={18} className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileProductsOpen && (
                      <div className="pb-3 pl-2 flex flex-col gap-1">
                        <Link to={item.to} className="py-2 text-[#0066FF] text-base">
                          All products
                        </Link>
                        {item.children.map((c) => (
                          <Link
                            key={c.label}
                            to={c.to}
                            className={`py-2 text-base ${pathname === c.to ? "text-[#0066FF] font-medium" : "text-[#071B3B]/80"}`}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="py-3 border-b border-black/5 text-lg font-display text-[#071B3B]"
                  >
                    {item.label}
                  </Link>
                )
              )}
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
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
