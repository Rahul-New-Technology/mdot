import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function inferProductBrand(name = "") {
  const brands = ["Cisco", "Dell", "HPE", "HP", "Lenovo", "Apple", "Fortinet", "Synology", "Microsoft", "Juniper", "Aruba", "MikroTik"];
  return brands.find((b) => name.toLowerCase().includes(b.toLowerCase())) || null;
}
