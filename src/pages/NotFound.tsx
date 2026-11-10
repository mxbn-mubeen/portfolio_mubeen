import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Terminal, Home, Sparkles, Compass } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Non-existent route accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#09090b] px-4 overflow-hidden text-zinc-100">
      {/* Top Celestial Light Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-400/15 via-amber-500/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Stardust Motes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-300 animate-pulse"
            style={{
              top: `${10 + (i * 15) % 80}%`,
              left: `${8 + (i * 17) % 84}%`,
              opacity: 0.3 + (i % 3) * 0.25,
              animationDuration: `${2 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* Subtle Dot Grid Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-md w-full">
        {/* Luminous Ascension Portal Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-amber-950/20 border-2 border-amber-400/40 shadow-[0_0_50px_rgba(251,191,36,0.18)] overflow-hidden backdrop-blur-xl">
          {/* Subtle top light ray on card */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-24 bg-gradient-to-b from-amber-300/20 to-transparent blur-xl pointer-events-none" />

          {/* Chrome header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-zinc-900/60">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-400/40 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
              <span className="w-3 h-3 rounded-full bg-indigo-400/80 border border-indigo-400/40" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 border border-emerald-400/40" />
              <span className="ml-2 font-mono text-xs text-zinc-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                void-coordinates.log
              </span>
            </div>
            <span className="text-[10px] font-mono text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
              STAGE: UNCHARTED
            </span>
          </div>

          {/* Body */}
          <div className="p-8 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-mono text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Boundary of the Known Matrix</span>
            </div>

            {/* Glowing 404 with halo ring */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-amber-400/20 animate-spin anim-duration-30000 pointer-events-none" />
                <div className="w-40 h-40 rounded-full border border-indigo-500/10 animate-spin anim-duration-40000 anim-direction-reverse pointer-events-none" />
              </div>
              <h1 className="text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400 font-mono relative z-10 shadow-sm">
                404
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
              The path <span className="text-amber-300 font-semibold">{location.pathname}</span> has dissolved into the ether.
            </p>

            <div className="pt-2">
              <Link to="/">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 hover:from-amber-300 hover:to-yellow-400 font-bold text-sm rounded-xl cursor-pointer transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:scale-[1.02]"
                >
                  <Home className="w-4 h-4" />
                  <span>Return to Home Sanctuary</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
