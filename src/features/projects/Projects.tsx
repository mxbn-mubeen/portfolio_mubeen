import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Sparkles } from "lucide-react";
import { ProjectCard, type Project } from "./components/ProjectCard";
import { MarineDebrisLogo, AIProjectsSuiteLogo } from "./components/ProjectLogos";

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "AE Reporting (AeroReporting)",
      logo: "/logo.jpg",
      description: "A comprehensive regulatory-compliant clinical safety reporting system for Clin Solutions. Features a three-tier validation engine, MedDRA hierarchy mapping, and dynamic translations for 137+ languages with Supabase caching.",
      tech: ["React.js", "TypeScript", "tRPC", "PostgreSQL", "Drizzle ORM", "Saas UI", "Zod", "Azure Translator"],
      impact: "100% compliance with E2B R3 safety standards",
      type: "Freelance Production",
      link: "https://sideeffects.viginess.com/",
      showLink: true,
      caseStudySlug: "ae-reporting",
      details: {
        challenges: "Maintaining 100% compliance with complex E2B R3 (HL7 v3) XML specifications while supporting multi-lingual entry (137+ languages) and preventing translation latency and high API costs.",
        solutions: "Engineered a three-tier validation framework (Business Rules, XSD Schema, and MedDRA Vocabularies). Designed a translation caching layer in Supabase to eliminate redundant Azure API calls.",
        architecture: "React frontend leveraging Saas UI and react-i18next, connected via end-to-end type-safe tRPC APIs to a Node.js server. Persistent data and translation caches managed in Supabase Postgres via Drizzle ORM."
      }
    },
    {
      title: "Caviti AI",
      logo: "/cavitiai.png",
      description: "Built type-safe TRPC APIs and responsive UIs with React.js & Chakra UI. Implemented PostgreSQL schema via Drizzle ORM for better scalability.",
      tech: ["React.js", "TRPC", "Chakra UI", "PostgreSQL", "Drizzle ORM"],
      impact: "Improved API stability by 30%",
      type: "Full-Time SaaS",
      showLink: false,
      caseStudySlug: "caviti-ai",
      details: {
        challenges: "Managing complex state across multiple dashboard components while maintaining type safety and preventing data inconsistencies.",
        solutions: "Implemented TRPC for end-to-end type safety, used React Query for efficient data caching, and optimized PostgreSQL queries with proper indexing.",
        architecture: "React frontend with Chakra UI, TRPC API layer, Drizzle ORM for type-safe database queries, PostgreSQL database with optimized schemas."
      }
    },
    {
      title: "AI Projects Suite",
      customIcon: <AIProjectsSuiteLogo className="w-10 h-10" />,
      description: "Contributed to multiple AI-powered applications including Otteri.ai, Pickel.ai, Vipery.ai, Snap.photo, and GoodOff. Built reusable UI components and enhanced frontend functionality.",
      tech: ["React.js", "TypeScript", "API Integration", "Git", "Shared Components"],
      impact: "Improved load time and user experience across 5+ products",
      type: "Component Architecture",
      showLink: false,
      caseStudySlug: "ai-projects-suite",
      details: {
        challenges: "Creating consistent, reusable components across multiple AI applications with different requirements and branding.",
        solutions: "Developed a shared component library with configurable theming, implemented lazy loading for better performance, and standardized API integration patterns.",
        architecture: "Shared React component library, TypeScript for type safety, modular CSS architecture, centralized API client with interceptors."
      }
    },
    {
      title: "Marine Debris Detection System",
      customIcon: <MarineDebrisLogo className="w-10 h-10" />,
      description: "AI-powered computer vision system for detecting and tracking marine debris using convolutional neural networks to help protect ocean ecosystems.",
      tech: ["Python", "Machine Learning", "Computer Vision", "TensorFlow", "Flask"],
      impact: "Environmental conservation through deep learning",
      type: "Computer Vision Research",
      link: "https://github.com/mxbn-mubeen/MARINE-DEBRIS-DETECTION-SYSTEM",
      showLink: true,
      caseStudySlug: "marine-debris",
      details: {
        challenges: "Accurately detecting and classifying marine debris in varying water conditions, lighting, and underwater environments.",
        solutions: "Trained custom CNN models on diverse marine debris datasets, implemented image preprocessing techniques, and used transfer learning for better accuracy.",
        architecture: "Python-based ML pipeline with OpenCV for image processing, TensorFlow/Keras for model training, Flask API for serving predictions."
      }
    }
  ];

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-[#09090b]">
      {/* Subtle top divider line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

      {/* Top Ambient Celestial Light Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-gradient-to-b from-blue-500/12 via-indigo-500/5 to-transparent blur-[140px] pointer-events-none" />

      {/* Floating Stardust Motes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-300 animate-pulse"
            style={{
              top: `${18 + (i * 12) % 75}%`,
              left: `${10 + (i * 14) % 80}%`,
              opacity: 0.2 + (i % 3) * 0.25,
              animationDuration: `${2.5 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <AnimatedSection variant="scale" duration={800}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 border border-blue-400/30 mb-5 text-xs font-mono text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Production Systems & Architectural Case Studies</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
              Featured Engineering Projects
            </h2>
            
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Real-world systems delivering clinical regulatory compliance, sub-second API performance, and enterprise component architecture.
            </p>
          </div>
        </AnimatedSection>

        {/* Clean, Perfectly Balanced 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full items-start">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              variant="fade-up"
              delay={index * 150}
              duration={800}
            >
              <ProjectCard project={project} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
