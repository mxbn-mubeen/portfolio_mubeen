import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Rocket } from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { MarineDebrisLogo, AIProjectsSuiteLogo } from "./components/ProjectLogos";


export const Projects = () => {
  const projects = [
    {
      title: "AE Reporting",
      logo: "/logo.jpg",
      description: "A comprehensive regulatory-compliant clinical safety reporting system for Clin Solutions. Developed as a Freelancer, this platform features a three-tier validation engine, MedDRA hierarchy mapping, and dynamic translations for 137+ languages with Supabase caching.",
      tech: ["React.js", "TypeScript", "tRPC", "PostgreSQL", "Drizzle ORM", "Saas UI", "Zod", "Azure Translator"],
      impact: "100% compliance with E2B R3 safety standards",
      type: "Freelance",
      link: "https://sideeffects.viginess.com/",
      showLink: true,
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
      type: "company",
      showLink: false,
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
      tech: ["React.js", "TypeScript", "API Integration", "Git"],
      impact: "Improved load time and user experience across projects",
      type: "company",
      showLink: false,
      details: {
        challenges: "Creating consistent, reusable components across multiple AI applications with different requirements and branding.",
        solutions: "Developed a shared component library with configurable theming, implemented lazy loading for better performance, and standardized API integration patterns.",
        architecture: "Shared React component library, TypeScript for type safety, modular CSS architecture, centralized API client with interceptors."
      }
    },
    {
      title: "Marine Debris Detection System",
      customIcon: <MarineDebrisLogo className="w-10 h-10" />,
      description: "College project: AI-powered system for detecting and tracking marine debris using computer vision and machine learning techniques to help protect ocean ecosystems.",
      tech: ["Python", "Machine Learning", "Computer Vision", "AI"],
      impact: "Environmental conservation through technology",
      type: "personal",
      link: "https://github.com/mxbn-mubeen/MARINE-DEBRIS-DETECTION-SYSTEM",
      showLink: true,
      details: {
        challenges: "Accurately detecting and classifying marine debris in varying water conditions, lighting, and underwater environments.",
        solutions: "Trained custom CNN models on diverse marine debris datasets, implemented image preprocessing techniques, and used transfer learning for better accuracy.",
        architecture: "Python-based ML pipeline with OpenCV for image processing, TensorFlow/Keras for model training, Flask API for serving predictions."
      }
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0d0f14]">
      {/* Reduced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] animate-pulse delay-1s" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection variant="scale" duration={800}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Rocket className="w-4 h-4 text-primary-glow" />
              <span className="text-sm text-white/70">Showcasing Innovation</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Featured Projects
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Building scalable solutions with modern technologies
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            // Bento Grid asymmetric layout
            const isLarge = index === 0 || index === 3;
            return (
              <AnimatedSection
                key={index}
                variant="fade-up"
                delay={index * 150}
                duration={800}
                className={isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1"}
              >
                <div className="h-full">
                  <ProjectCard project={project} index={index} isLarge={isLarge} />
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
      <style>{`
        .delay-1s {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};
