import { useEffect, useRef, useState } from "react";
import { COMPANY } from "../data/site";

const MAP_EMBED =
  COMPANY.mapEmbed ||
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15080.929134193948!2d72.88699274999999!3d19.0974631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c906d3229847%3A0xb5c855d044b2b146!2sM%20DOT%20IT%20SOLUZIONE!5e0!3m2!1sen!2sin!4v1788270936101!5m2!1sen!2sin";

const MAP_OPEN =
  COMPANY.mapLink ||
  "https://www.google.com/maps/place/M+DOT+IT+SOLUZIONE/@19.0974631,72.8869927,16z/data=!4m6!3m5!1s0x3be7c906d3229847:0xb5c855d044b2b146!8m2!3d19.0974631!4d72.8869927!16s%2Fg%2F11y5";

export default function LocationMap() {
  const hostRef = useRef(null);
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setLoadMap(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMap(true);
          io.disconnect();
        }
      },
      { rootMargin: "240px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={hostRef}
      className="relative w-full min-h-[400px] h-[400px] sm:h-[450px] lg:h-full lg:min-h-[520px] rounded-[24px] overflow-hidden bg-[#e8eaed]"
      data-testid="location-map"
    >
      {loadMap ? (
        <iframe
          title="M DOT IT SOLUZIONE location — Sakinaka, Kurla, Mumbai"
          src={MAP_EMBED}
          width="600"
          height="450"
          className="absolute inset-0 w-full h-full border-0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : null}
      <a
        href={MAP_OPEN}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 z-10 btn-primary text-sm py-2.5 px-4"
      >
        Open in Google Maps
      </a>
    </div>
  );
}
