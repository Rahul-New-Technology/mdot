import { PhoneCall } from "lucide-react";
import { COMPANY } from "@/data/site";
import { trackGoogleAdsCallConversion } from "@/lib/utils";

export default function CallNow({ variant = "hero", className = "" }) {
  const base =
    variant === "header"
      ? "inline-flex items-center gap-2 rounded-full px-3 py-2 text-[12px] sm:text-[13px] font-medium border border-white/25 bg-white/10 text-white hover:bg-white/18 transition-colors"
      : variant === "header-scrolled"
        ? "inline-flex items-center gap-2 rounded-full px-3 py-2 text-[12px] sm:text-[13px] font-medium border border-[#071B3B]/15 bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF]/15 transition-colors"
        : variant === "solid"
          ? "btn-primary"
          : "inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-3 text-sm font-medium bg-white text-[#071B3B] hover:bg-[#F5F7FA] transition-colors shadow-[0_10px_30px_rgba(7,27,59,0.18)]";

  return (
    <a
      href={`tel:${COMPANY.phoneRaw}`}
      onClick={trackGoogleAdsCallConversion}
      className={`${base} ${className}`.trim()}
      aria-label={`Call Now ${COMPANY.phone}`}
      data-testid="call-now"
    >
      <PhoneCall size={16} className="shrink-0" />
      <span className="hidden sm:inline">Call Now</span>
      <span className="sm:hidden">Call</span>
      <span className="font-mono tracking-tight">{COMPANY.phone}</span>
    </a>
  );
}
