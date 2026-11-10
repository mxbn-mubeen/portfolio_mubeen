import { useState, useEffect } from "react";
import { HeroAnimation } from "@/shared/components/HeroAnimation";
import { Terminal, ShieldCheck, Zap, Globe, Clock, CheckCircle2, Copy, Check } from "lucide-react";

export const HeroAvatar = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "procedure">("profile");
  const [copied, setCopied] = useState(false);
  const [uaeTime, setUaeTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // UAE is UTC+4
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setUaeTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx mubeen-cli || curl -s https://portfolio-mxbn.vercel.app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <HeroAnimation>
      <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
        {/* Ambient backlight */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000" />

        {/* Floating Telemetry Badge 1: Top Left */}
        <div className="absolute -top-5 -left-4 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/[0.1] backdrop-blur-md shadow-xl text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-zinc-200 font-medium font-mono">100% E2B R3 Compliant</span>
        </div>

        {/* Floating Telemetry Badge 2: Bottom Right */}
        <div className="absolute -bottom-4 -right-3 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/[0.1] backdrop-blur-md shadow-xl text-xs">
          <Zap className="w-4 h-4 text-amber-400" />
          <span className="text-zinc-200 font-medium font-mono">30% Faster API Response</span>
        </div>

        {/* Main Terminal Cockpit Card */}
        <div className="relative rounded-2xl bg-zinc-950/90 border border-white/[0.1] shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-zinc-900/50">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/70 border border-red-500/30" />
              <span className="w-3 h-3 rounded-full bg-amber-500/70 border border-amber-500/30" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/70 border border-emerald-500/30" />
              <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                mubeen-dev.tsx
              </span>
            </div>

            {/* UAE Live Clock & Status */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
              <Clock className="w-3 h-3 text-blue-400" />
              <span className="text-zinc-300">{uaeTime || "UAE Time"}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center justify-between px-4 pt-2 border-b border-white/[0.05] bg-zinc-950/60 text-xs font-mono">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-3 py-1.5 border-b-2 transition-colors cursor-pointer ${
                  activeTab === "profile"
                    ? "border-blue-500 text-white font-medium"
                    : "border-transparent text-zinc-400 hover:text-zinc-300"
                }`}
              >
                profile.ts
              </button>
              <button
                onClick={() => setActiveTab("procedure")}
                className={`px-3 py-1.5 border-b-2 transition-colors cursor-pointer ${
                  activeTab === "procedure"
                    ? "border-blue-500 text-white font-medium"
                    : "border-transparent text-zinc-400 hover:text-zinc-300"
                }`}
              >
                trpc-schema.ts
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white transition-colors cursor-pointer pb-1"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          {/* Code Window Body */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-zinc-300 min-h-[300px]">
            {activeTab === "profile" ? (
              <div className="space-y-1">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">softwareEngineer</span> = {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-zinc-400">name:</span>{" "}
                  <span className="text-emerald-300">"Mohamed Mubeen A S"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-zinc-400">location:</span>{" "}
                  <span className="text-emerald-300">"Sharjah, UAE"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-zinc-400">status:</span>{" "}
                  <span className="text-emerald-400 font-semibold">"AVAILABLE_IMMEDIATELY"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-zinc-400">coreSpecialties:</span> [
                </p>
                <p className="pl-8 text-sky-300">
                  "Full Stack React & Next.js", "Type-Safe tRPC APIs",
                </p>
                <p className="pl-8 text-sky-300">
                  "PostgreSQL & Drizzle ORM", "E2B R3 Safety Systems"
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-zinc-400">trackRecord:</span> {"{"}
                </p>
                <p className="pl-8">
                  <span className="text-zinc-400">languagesHandled:</span>{" "}
                  <span className="text-amber-300">137</span>,
                </p>
                <p className="pl-8">
                  <span className="text-zinc-400">apiLatencyDrop:</span>{" "}
                  <span className="text-amber-300">"-30%"</span>,
                </p>
                <p className="pl-8">
                  <span className="text-zinc-400">validationSafety:</span>{" "}
                  <span className="text-amber-300">"100% compliant"</span>
                </p>
                <p className="pl-4">{"}"}</p>
                <p>{"};"}</p>
              </div>
            ) : (
              <div className="space-y-1">
                <p>
                  <span className="text-purple-400">export const</span>{" "}
                  <span className="text-blue-400">reportRouter</span> = router({"{"}
                </p>
                <p className="pl-4 text-zinc-400">// End-to-end type safety with Zod validation</p>
                <p className="pl-4">
                  <span className="text-amber-300">submitE2BReport</span>: protectedProcedure
                </p>
                <p className="pl-8">
                  .input(z.object({"{"} caseId: z.string().uuid() {"}"}))
                </p>
                <p className="pl-8">
                  .mutation(<span className="text-purple-400">async</span> ({"{"} input, ctx {"}"}) =&gt; {"{"}
                </p>
                <p className="pl-12 text-zinc-400">// Supabase Postgres with Drizzle ORM</p>
                <p className="pl-12">
                  <span className="text-purple-400">const</span> [record] = <span className="text-purple-400">await</span> ctx.db
                </p>
                <p className="pl-16">
                  .select().from(reports).where(eq(reports.id, input.caseId));
                </p>
                <p className="pl-12">
                  <span className="text-purple-400">return</span> {"{"} success: <span className="text-emerald-400">true</span>, record {"}"};
                </p>
                <p className="pl-8">{"})"}</p>
                <p>{"});"}</p>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/[0.06] bg-zinc-950/80 text-[11px] font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Production Tested • TypeScript 5+</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Globe className="w-3 h-3 text-zinc-500" />
              <span>Sharjah, UAE</span>
            </div>
          </div>
        </div>
      </div>
    </HeroAnimation>
  );
};
