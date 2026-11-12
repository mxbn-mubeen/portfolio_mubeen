import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Briefcase, Sparkles, TrendingUp } from "lucide-react";
import { ExperienceTimeline, type ExperienceStage } from "./components/ExperienceTimeline";

export const Experience = () => {
  const experiences: ExperienceStage[] = [
    {
      stage: "Phase III • Clinical & Enterprise Systems",
      tier: "APEX",
      role: "Freelance Full Stack Developer",
      company: "Clin solution L.L.C",
      location: "United States (Remote)",
      period: "November 2025 – Present",
      type: "Freelance Contract",
      engineeringTagline: "Orchestrating mission-critical pharmacovigilance safety reporting pipelines across 137+ languages with 100% E2B R3 regulatory compliance.",
      achievements: [
        "Built AeroReporting, an end-to-end Adverse Event Reporting System using React, TypeScript, Node.js, PostgreSQL, and Supabase, enabling E2B-compliant XML and PDF report generation for pharmacovigilance workflows",
        "Integrated Azure AI Translation API to power multilingual safety reporting, reducing manual localisation effort for international regulatory submissions",
        "Implemented WHODrug dictionary integration, standardising pharmaceutical terminology across the reporting pipeline and improving data accuracy for regulatory teams",
        "Delivered production-ready features across 3+ release cycles in direct collaboration with stakeholders, maintaining a fully responsive, accessible UI"
      ],
      tech: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Azure AI", "REST API", "XML/PDF"]
    },
    {
      stage: "Phase II • High-Velocity SaaS & APIs",
      tier: "ADVANCED",
      role: "Full Stack Developer",
      company: "Nexobe",
      companyUrl: "https://nexobe.com/",
      logo: "/Nexobe.png",
      location: "Illinois, United States",
      period: "September 2024 – September 2025",
      type: "Full-time",
      engineeringTagline: "Engineered scalable frontend architectures for Nexobe's AI tools, including Otteri.ai and the complete dynamic blog section for GoodOff (goodoff.co/blog).",
      achievements: [
        "Developed interactive UI components and multi-model streaming chat interfaces for Otteri.ai using React, TypeScript, and Chakra/SaaS UI",
        "Independently engineered and shipped the full dynamic blog section for GoodOff (goodoff.co/blog), implementing responsive layouts, reading time estimations, and SEO metadata",
        "Integrated TanStack Query and tRPC across frontend modules, reducing API response times by 30% and eliminating client-server schema drift",
        "Optimized relational PostgreSQL schemas via Drizzle ORM, cutting redundant roundtrips by 25% with indexed query patterns"
      ],
      tech: ["React.js", "TypeScript", "tRPC", "PostgreSQL", "Drizzle ORM", "TanStack Query", "Chakra UI", "SaaS UI"]
    },
    {
      stage: "Phase I • Core Engineering Bedrock",
      tier: "FOUNDATION",
      role: "Jr. Java Full Stack Developer Intern",
      company: "Inmakes Infotech",
      logo: "/inmakes.png",
      location: "Kerala, India",
      period: "May 2024 – July 2024",
      type: "Internship",
      engineeringTagline: "Engineering fundamentals: building robust Java Spring Boot services, responsive React modules, and enterprise relational data layers.",
      achievements: [
        "Developed full-stack modules using Java and React, enhancing system performance and user experience",
        "Contributed to building REST APIs, optimizing data flow and ensuring backend consistency",
        "Acquired practical experience with agile workflows and collaborative development methodologies"
      ],
      tech: ["Java", "React.js", "REST API", "Spring Boot", "MySQL", "Hibernate", "Agile"]
    }
  ];

  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#09090b]">
      {/* Subtle top divider line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      {/* Ambient lighting at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-amber-400/10 via-amber-500/5 to-transparent blur-[140px] pointer-events-none" />

      {/* Subtle floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-300/40 animate-pulse"
            style={{
              top: `${20 + i * 12}%`,
              left: `${15 + (i * 15) % 70}%`,
              animationDuration: `${2.5 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <AnimatedSection variant="scale" duration={900}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-400/30 mb-5 text-xs font-mono text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.15)]">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              <span>Technical Progression • From Core Runtimes to Clinical Architectures</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
              Career Trajectory & Experience
            </h2>
            
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Documenting the evolutionary milestones: from enterprise Java runtimes to mission-critical, regulatory-compliant healthcare architectures.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12 max-w-4xl mx-auto relative">
          {/* Luminous Axis Line */}
          <div className="absolute left-6 md:left-8 top-4 bottom-4 w-1 bg-gradient-to-t from-zinc-800 via-indigo-500 to-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.4)] rounded-full" />

          {experiences.map((experience, index) => (
            <AnimatedSection
              key={index}
              variant="slide-left"
              delay={index * 150}
              duration={700}
            >
              <ExperienceTimeline experience={experience} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
