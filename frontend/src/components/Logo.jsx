import { COMPANY } from "@/data/site";

export function Logo({ variant = "dark", size = 36 }) {
  const color = variant === "light" ? "#FFFFFF" : "#071B3B";
  const sub = variant === "light" ? "rgba(255,255,255,0.65)" : "rgba(7,27,59,0.6)";
  return (
    <div className="flex items-center gap-3" aria-label={COMPANY.name}>
      <img
        src={COMPANY.logo}
        alt={`${COMPANY.name} logo`}
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
  );
}
