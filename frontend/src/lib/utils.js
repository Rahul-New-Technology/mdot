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
