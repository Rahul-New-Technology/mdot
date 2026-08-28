import { COMPANY } from "@/data/site";

<<<<<<< HEAD
export function Logo({ variant = "dark", size = 36 }) {
  const color = variant === "light" ? "#FFFFFF" : "#071B3B";
  const sub = variant === "light" ? "rgba(255,255,255,0.65)" : "rgba(7,27,59,0.6)";
  return (
    <div className="flex items-center gap-3" aria-label={`${COMPANY.name} logo`}>
      <img
        src={COMPANY.logo}
        alt={`${COMPANY.name} logo - Enterprise IT Hardware Supplier`}
        loading="eager"
        width={size}
        height={size}
        style={{ width: size, height: size, objectFit: "contain" }}
        className="rounded-full"
      />
      <div className="leading-none">
        <div className="font-display font-semibold tracking-tight" style={{ color, fontSize: 15 }}>
          M<span className="brand-gradient-text">·</span>DOT IT
        </div>
        <div className="font-mono uppercase" style={{ color: sub, fontSize: 9, letterSpacing: "0.16em", marginTop: 3 }}>
          SOLUZIONE
        </div>
      </div>
    </div>
=======
const LOCAL_LOGO = "/images/brand/logo.webp";
const LOCAL_LOGO_PNG = "/images/brand/logo.png";

export function Logo({ size = 48, variant = "light", className = "" }) {
  const light = variant !== "dark";
  const titleSize = Math.max(13, Math.round(size * 0.36));
  const subSize = Math.max(8, Math.round(size * 0.2));
  const dot = Math.max(4, Math.round(size * 0.1));

  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`.trim()} aria-label={COMPANY.name}>
      <span
        className="relative z-10 shrink-0 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.18)]"
        style={{ width: size, height: size }}
      >
        <img
          src={COMPANY.logo || LOCAL_LOGO}
          alt=""
          width={size}
          height={size}
          loading="eager"
          decoding="async"
          fetchPriority="low"
          className="block object-contain"
          style={{ width: "78%", height: "78%" }}
          onError={(e) => {
            if (e.currentTarget.src.includes(LOCAL_LOGO_PNG)) return;
            e.currentTarget.src = LOCAL_LOGO_PNG;
          }}
        />
      </span>
      <span className="flex flex-col justify-center leading-none min-w-0">
        <span
          className={`font-display font-semibold uppercase tracking-[0.06em] whitespace-nowrap ${
            light ? "text-white" : "text-[#071B3B]"
          }`}
          style={{ fontSize: titleSize }}
        >
          M
          <span
            className="inline-block align-middle bg-[#25B5FF] mx-[0.22em] mb-[0.12em]"
            style={{ width: dot, height: dot }}
            aria-hidden="true"
          />
          DOT IT
        </span>
        <span
          className={`font-display font-medium uppercase tracking-[0.22em] whitespace-nowrap ${
            light ? "text-white/70" : "text-[#071B3B]/55"
          }`}
          style={{ fontSize: subSize, marginTop: Math.max(3, Math.round(size * 0.08)) }}
        >
          SOLUZIONE
        </span>
      </span>
    </span>
>>>>>>> fba28f1927745d4e7ea5a9f5be5d999464fa178d
  );
}
