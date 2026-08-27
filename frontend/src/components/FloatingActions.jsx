import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, FileText, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/data/site";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const items = [
    { icon: Phone, label: "Call", href: `tel:${COMPANY.phoneRaw}`, testid: "fab-call", ext: true },
    { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${COMPANY.whatsappRaw}`, testid: "fab-whatsapp", ext: true },
    { icon: FileText, label: "Quote", href: "/request-quote", testid: "fab-quote", ext: false },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3" data-testid="floating-actions">
      <AnimatePresence>
        {open && items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ delay: i * 0.04, duration: 0.22 }}
          >
            {it.ext ? (
              <a
                href={it.href}
                target={it.label === "WhatsApp" ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 pl-4 pr-5 py-3 bg-white rounded-full shadow-[0_10px_30px_rgba(7,27,59,0.18)] text-[#071B3B] font-medium text-sm hover:text-[#0066FF] transition-colors"
                data-testid={it.testid}
              >
                <span className="w-8 h-8 rounded-full brand-gradient text-white flex items-center justify-center">
                  <it.icon size={16} />
                </span>
                {it.label}
              </a>
            ) : (
              <Link
                to={it.href}
                className="flex items-center gap-3 pl-4 pr-5 py-3 bg-white rounded-full shadow-[0_10px_30px_rgba(7,27,59,0.18)] text-[#071B3B] font-medium text-sm hover:text-[#0066FF] transition-colors"
                data-testid={it.testid}
              >
                <span className="w-8 h-8 rounded-full brand-gradient text-white flex items-center justify-center">
                  <it.icon size={16} />
                </span>
                {it.label}
              </Link>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Contact actions"
        className="w-14 h-14 rounded-full brand-gradient text-white flex items-center justify-center shadow-[0_14px_40px_rgba(0,102,255,0.45)] hover:scale-105 transition-transform"
        data-testid="fab-toggle"
      >
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {open ? <X size={22} /> : <Plus size={22} />}
        </motion.div>
      </button>
    </div>
  );
}
