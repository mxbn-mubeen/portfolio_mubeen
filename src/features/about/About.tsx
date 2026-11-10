import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Code, Rocket, Zap, Award, Download, FileText, CheckCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Certifications } from "./components/Certifications";

export const About = () => {
  const stats = [
    { value: "2+", label: "Years Experience", desc: "Production SaaS & Web Applications" },
    { value: "30%", label: "API Latency Drop", desc: "tRPC & Query caching optimizations" },
    { value: "137+", label: "Languages Scaled", desc: "Multi-lingual translation pipelines" },
    { value: "100%", label: "E2B Compliance", desc: "HL7 v3 Pharmacovigilance safety" },
  ];

  const pillars = [
    { icon: Rocket, title: "Full-Stack SaaS Architecture", desc: "Specialized in React, Next.js, and TypeScript frontends backed by Node.js and Java Spring Boot services.", tag: "Architecture" },
    { icon: Zap, title: "End-to-End Type Safety", desc: "Zero-mismatch API contracts linking PostgreSQL schemas via Drizzle ORM to client components using tRPC & Zod.", tag: "Type Safety" },
    { icon: Code, title: "Database Optimization", desc: "Crafted relational PostgreSQL schemas, indexing strategies, and caching layers in Supabase that eliminate redundant queries.", tag: "Performance" },
    { icon: ShieldCheck, title: "Regulatory Standards", desc: "Engineered three-tier validation engines (business rules, XSD schemas, MedDRA dictionaries) for clinical compliance.", tag: "Compliance" }
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#09090b]">
      {/* Subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

      {/* Top Ambient Celestial Light Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-gradient-to-b from-indigo-500/12 via-blue-500/5 to-transparent blur-[140px] pointer-events-none" />

      {/* Floating Stardust Motes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-indigo-300 animate-pulse"
            style={{
              top: `${15 + (i * 12) % 75}%`,
              left: `${8 + (i * 15) % 82}%`,
              opacity: 0.2 + (i % 3) * 0.25,
              animationDuration: `${2.3 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 border border-blue-400/30 mb-5 text-xs font-mono text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Sharjah, UAE • Available for Immediate Roles</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
              Engineering Background
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Driven by type safety, robust architectures, and high-impact digital experiences.
            </p>
          </div>
        </AnimatedSection>

        {/* 4 Quick Stat Metric Cards */}
        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="p-5 rounded-2xl bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-indigo-950/20 border border-white/[0.08] hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight text-blue-400">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-zinc-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Core Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Narrative Column (5 cols) */}
          <AnimatedSection className="lg:col-span-5 h-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-zinc-900/40 border border-white/[0.08] hover:border-blue-400/30 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  About Mohamed
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-4">
                  Building Scalable, Resilient Software
                </h3>
                <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                  <p>
                    I am a Full Stack Developer with hands-on experience designing and deploying scalable SaaS applications and clinical reporting pipelines.
                  </p>
                  <p className="text-zinc-400">
                    My engineering approach emphasizes end-to-end type safety, deterministic database queries, and clean component architecture. In past projects, I helped cut API response times by 30% and architected multilingual compliance systems scaling across 137+ languages.
                  </p>
                  <p className="text-zinc-400">
                    Currently located in Sharjah, UAE, and actively available for full-time frontend, backend, or full-stack software engineering positions locally or remotely.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Immediate Availability</span>
                </div>
                <a
                  href="/resume"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Full CV</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Pillars Grid (7 cols) */}
          <AnimatedSection className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-gradient-to-b from-zinc-900/80 via-zinc-950/90 to-zinc-900/30 border border-white/[0.08] hover:border-blue-400/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-zinc-400">
                          {pillar.tag}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-white tracking-tight mb-1.5 group-hover:text-blue-400 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <AnimatedSection className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-zinc-900/80 via-zinc-950/90 to-zinc-900/30 border border-white/[0.08] hover:border-blue-400/30 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Education</h3>
                    <p className="text-xs text-zinc-400 font-mono">Computer Science & Engineering</p>
                  </div>
                </div>

                <div className="space-y-1 mb-4">
                  <p className="text-sm font-semibold text-zinc-200">
                    B.E. in Computer Science and Engineering
                  </p>
                  <p className="text-xs text-zinc-400">
                    Aalim Muhammed Salegh College of Engineering
                  </p>
                  <p className="text-xs text-zinc-400">
                    Affiliated with Anna University
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1 text-xs">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Nationality:</span>
                    <span className="text-zinc-200 font-medium">Indian</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Visa Status:</span>
                    <span className="text-emerald-400 font-medium">Visit Visa (Valid until Jan 2027)</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Availability:</span>
                    <span className="text-blue-400 font-medium">Immediate</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300">
                  2020 – 2024
                </span>
                <a
                  href="/Mohamed_Mubeen_Resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-7">
            <Certifications />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
