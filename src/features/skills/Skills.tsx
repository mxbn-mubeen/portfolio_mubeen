import { useState } from "react";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Layers, Terminal, Database, Wrench, Sparkles, Code2, CheckCircle2 } from "lucide-react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, 
  SiReactquery, SiSpring, SiTrpc, SiDrizzle, SiSupabase, SiZod 
} from "react-icons/si";
import { TechCard, type TechItem } from "./components/TechCard";
import { SaasUIIcon } from "./components/SkillOrb";

const curatedSkills: TechItem[] = [
  // Frontend & UI
  { name: "React.js", category: "frontend", icon: FaReact, color: "#61DAFB", level: "Expert", context: "Primary Frontend", isCore: true },
  { name: "Next.js", category: "frontend", icon: SiNextdotjs, color: "#FFFFFF", level: "Advanced", context: "Full Stack SSR/SSG", isCore: true },
  { name: "TypeScript", category: "frontend", icon: SiTypescript, color: "#3178C6", level: "Expert", context: "Strict Type Safety", isCore: true },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, color: "#06B6D4", level: "Expert", context: "Design Systems", isCore: true },
  { name: "TanStack Query", category: "frontend", icon: SiReactquery, color: "#FF4154", level: "Advanced", context: "Server State & Cache" },
  { name: "SaaS UI", category: "frontend", icon: SaasUIIcon, color: "#7C3AED", level: "Advanced", context: "Dashboard Components" },

  // Backend & APIs
  { name: "tRPC", category: "backend", icon: SiTrpc, color: "#2596BE", level: "Expert", context: "End-to-End Contract", isCore: true },
  { name: "Node.js", category: "backend", icon: FaNodeJs, color: "#5FA04E", level: "Advanced", context: "Backend Services", isCore: true },
  { name: "Zod", category: "backend", icon: SiZod, color: "#3E67B1", level: "Expert", context: "Schema Validation", isCore: true },
  { name: "Spring Boot", category: "backend", icon: SiSpring, color: "#6DB33F", level: "Advanced", context: "Java Services" },

  // Database & ORM
  { name: "PostgreSQL", category: "database", icon: SiPostgresql, color: "#4169E1", level: "Expert", context: "Relational Database", isCore: true },
  { name: "Drizzle ORM", category: "database", icon: SiDrizzle, color: "#C5F74F", level: "Expert", context: "Type-Safe Queries", isCore: true },
  { name: "Supabase", category: "database", icon: SiSupabase, color: "#3ECF8E", level: "Advanced", context: "Postgres & Auth", isCore: true },

  // Architecture & Tools
  { name: "Azure AI", category: "tools", icon: Wrench, color: "#0078D4", level: "Advanced", context: "Translation Pipelines" },
  { name: "E2B R3 / XML", category: "tools", icon: Code2, color: "#A855F7", level: "Expert", context: "Clinical Safety Standard" },
  { name: "Git & GitHub", category: "tools", icon: FaGitAlt, color: "#F05032", level: "Expert", context: "CI/CD & Version Control" }
];

export const Skills = () => {
  const [filter, setFilter] = useState<"frontend" | "backend" | "database" | "tools">("frontend");

  const filteredSkills = curatedSkills.filter(s => s.category === filter);

  const categories = [
    { id: "frontend", label: "Frontend & UI", count: curatedSkills.filter(s => s.category === "frontend").length, icon: Layers },
    { id: "backend", label: "Backend & APIs", count: curatedSkills.filter(s => s.category === "backend").length, icon: Terminal },
    { id: "database", label: "Databases & ORM", count: curatedSkills.filter(s => s.category === "database").length, icon: Database },
    { id: "tools", label: "Architecture & Tools", count: curatedSkills.filter(s => s.category === "tools").length, icon: Wrench }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#09090b]">
      {/* Subtle top divider line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      {/* Top Ambient Celestial Light Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent blur-[140px] pointer-events-none" />

      {/* Floating Stardust Motes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-300 animate-pulse"
            style={{
              top: `${14 + (i * 12) % 75}%`,
              left: `${8 + (i * 14) % 82}%`,
              opacity: 0.2 + (i % 3) * 0.25,
              animationDuration: `${2.6 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border border-cyan-400/30 mb-5 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Type-Safe Production Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto">
              Curated, production-tested technologies focused on type safety, high API performance, and scalable SaaS architecture.
            </p>
          </div>
        </AnimatedSection>

        {/* Core Stack Feature Bento */}
        <AnimatedSection>
          <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  Primary Modern Blueprint
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                  End-to-End Type-Safe Architecture
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Runtime Mismatch</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 mb-5 max-w-2xl leading-relaxed">
              Connecting Next.js frontends to Node.js services via tRPC & Zod, querying PostgreSQL through Drizzle ORM.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {[
                { name: "React / Next.js", desc: "Interactive UI" },
                { name: "TypeScript 5", desc: "Strict Types" },
                { name: "tRPC v10", desc: "API Contract" },
                { name: "Zod Schema", desc: "Validation" },
                { name: "PostgreSQL", desc: "Persistence" },
                { name: "Drizzle ORM", desc: "Type-Safe DB" }
              ].map((item) => (
                <div key={item.name} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
                  <p className="text-xs font-semibold text-white tracking-tight">{item.name}</p>
                  <p className="text-[10px] font-mono text-zinc-400 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Category Tabs (No overwhelming 'All' tab) */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
                  active
                    ? "bg-white text-zinc-950 border-white shadow-sm font-semibold"
                    : "bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? "text-zinc-950" : "text-zinc-400"}`} />
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  active ? "bg-zinc-200 text-zinc-950" : "bg-white/[0.06] text-zinc-400"
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Focused Tech Grid: Clean, compact 3-6 cards per tab */}
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {filteredSkills.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
