export const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Subtle Dot Grid with Radial Mask */}
    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />

    {/* Top Center Radiant Celestial Spotlight */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[480px] bg-gradient-to-b from-blue-500/15 via-indigo-500/10 to-transparent blur-[140px] pointer-events-none" />
    
    {/* Side Ambient Glows */}
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

    {/* Floating Stardust Motes */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-300 animate-pulse"
          style={{
            top: `${12 + (i * 14) % 80}%`,
            left: `${8 + (i * 17) % 84}%`,
            opacity: 0.25 + (i % 3) * 0.25,
            animationDuration: `${2.2 + (i % 3)}s`
          }}
        />
      ))}
    </div>
  </div>
);
