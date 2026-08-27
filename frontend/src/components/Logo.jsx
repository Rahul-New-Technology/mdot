import { COMPANY } from "@/data/site";

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
  );
}
