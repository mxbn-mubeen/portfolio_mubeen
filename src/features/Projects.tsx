
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { ExternalLink } from "lucide-react";
import { useStaggerAnimation } from "@/shared/hooks/use-scroll-animation";

export const Projects = () => {
  const projectsRef = useStaggerAnimation({ delay: 150 });

  const projects = [
    {
      title: "Caviti AI",
      description: "Built type-safe TRPC APIs and responsive UIs with React.js & Chakra UI. Implemented PostgreSQL schema via Drizzle ORM for better scalability.",
      tech: ["React.js", "TRPC", "Chakra UI", "PostgreSQL", "Drizzle ORM"],
      impact: "Improved API stability by 30%",
      type: "company",
      showLink: false
    },
    {
      title: "AI Projects Suite",
      description: "Contributed to multiple AI-powered applications including Otteri.ai, Pickel.ai, Vipery.ai, Snap.photo, and GoodOff. Built reusable UI components and enhanced frontend functionality.",
      tech: ["React.js", "TypeScript", "API Integration", "Git"],
      impact: "Improved load time and user experience across projects",
      type: "company",
      showLink: false
    },
    {
      title: "Marine Debris Detection System",
      description: "College project: AI-powered system for detecting and tracking marine debris using computer vision and machine learning techniques to help protect ocean ecosystems.",
      tech: ["Python", "Machine Learning", "Computer Vision", "AI"],
      impact: "Environmental conservation through technology",
      type: "personal",
      link: "https://github.com/mxbn-mubeen/MARINE-DEBRIS-DETECTION-SYSTEM",
      showLink: true
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0d0f14]">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
            Featured Projects
          </h2>
        </AnimatedSection>
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const CardWrapper = project.type === "personal" && project.link 
              ? ({ children, ...props }: any) => (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card {...props}>{children}</Card>
                  </a>
                )
              : Card;
            
            return (
              <CardWrapper 
                key={index}
                style={{ opacity: 1 }}
                className="glass-card border-none h-full hover:bg-white/[0.08] transition-all duration-300 group flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-2xl text-white group-hover:text-primary-glow transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.showLink && (
                      <ExternalLink className="w-5 h-5 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    )}
                  </div>
                  <CardDescription className="text-base text-white/60">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="space-y-4">
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-white/5 text-white/80 border-white/10">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm font-semibold text-primary-glow">Impact: {project.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
