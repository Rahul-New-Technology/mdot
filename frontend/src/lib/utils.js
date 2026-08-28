import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
// Google Ads conversion tracking
export function trackGoogleAdsConversion() {
  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
    window.gtag_report_conversion();
  }
}

export function trackGoogleAdsCallConversion() {
  try {
    if (typeof window !== "undefined" && typeof window.gtag_report_call_conversion === "function") {
      window.gtag_report_call_conversion();
    }
  } catch (error) {
    console.warn("Google Ads call conversion tracking failed:", error);
  }
}

export function inferProductBrand(name = "") {
  const brands = ["Cisco", "Dell", "HPE", "HP", "Lenovo", "Apple", "Fortinet", "Synology", "Microsoft", "Juniper", "Aruba", "MikroTik"];
  return brands.find((b) => name.toLowerCase().includes(b.toLowerCase())) || null;
}
