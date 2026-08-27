/** Size Unsplash URLs so the CDN does not serve multi‑megabyte originals. */
export function sizedUnsplash(url, { w = 1200, h, q = 72 } = {}) {
  if (!url || typeof url !== "string" || !url.includes("images.unsplash.com")) {
    return url;
  }
  try {
    const u = new URL(url);
    u.searchParams.set("auto", "format");
    u.searchParams.set("fit", "crop");
    u.searchParams.set("w", String(w));
    u.searchParams.set("q", String(q));
    u.searchParams.delete("crop");
    u.searchParams.delete("cs");
    u.searchParams.delete("fm");
    if (h) u.searchParams.set("h", String(h));
    return u.toString();
  } catch {
    return url;
  }
}
