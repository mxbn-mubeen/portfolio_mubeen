import React from "react";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  subtitle?: boolean;
  className?: string;
}

export const BrandIcon = ({ size = 36, className = "" }: { size?: number; className?: string }) => {
  return (
    <div
      className={`relative rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-[1px] shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300 flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer Hairline Gradient Border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-blue-400/40 via-indigo-500/20 to-blue-500/10 -z-10 group-hover:from-blue-300/60 group-hover:via-indigo-400/40 transition-all duration-300" />

      {/* Inner Emblem SVG */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full rounded-[11px] overflow-hidden"
      >
        <defs>
          {/* Celestial Brand Gradient */}
          <linearGradient id="mubeenGlow" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>

          {/* Secondary Energy Trace */}
          <linearGradient id="accentGlow" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>

          {/* Radial Center Core Glow */}
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Dark Obsidian Base Canvas */}
        <rect width="40" height="40" rx="11" fill="#09090b" />

        {/* Ambient Center Glow */}
        <circle cx="20" cy="20" r="14" fill="url(#coreGlow)" />

        {/* Code Bracket Whispers: < and > */}
        <path
          d="M 7.5 17 L 4.5 20 L 7.5 23"
          stroke="#38BDF8"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.75"
        />
        <path
          d="M 32.5 17 L 35.5 20 L 32.5 23"
          stroke="#818CF8"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.75"
        />

        {/* Secondary Lower Facet of M */}
        <path
          d="M 14 27 V 19 L 20 23.5 L 26 19 V 27"
          stroke="url(#accentGlow)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.45"
        />

        {/* Primary Monogram M: Precision Architectural Lines */}
        <path
          d="M 11 27 V 14 C 11 12.8 12.2 12.1 13.2 12.7 L 20 17.5 L 26.8 12.7 C 27.8 12.1 29 12.8 29 14 V 27"
          stroke="url(#mubeenGlow)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central Celestial Nexus Node */}
        <circle
          cx="20"
          cy="17.5"
          r="1.8"
          fill="#38BDF8"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  showWordmark = false,
  subtitle = false,
  className = ""
}) => {
  const iconSize = size === "sm" ? 28 : size === "lg" ? 42 : 36;

  return (
    <div className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Precision Vector Emblem */}
      <BrandIcon size={iconSize} />

      {/* Optional Wordmark */}
      {showWordmark && (
        <div className="flex flex-col text-left select-none">
          <div className="flex items-center gap-1.5 font-bold tracking-tight text-white leading-none">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-blue-200 group-hover:to-blue-400 transition-colors">
              Mubeen
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.9)] animate-pulse" />
          </div>

          {subtitle && (
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-medium mt-1">
              Software Engineer
            </span>
          )}
        </div>
      )}
    </div>
  );
};
