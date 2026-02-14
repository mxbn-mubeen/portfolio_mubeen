import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { ExternalLink, Code, Rocket, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

// Marine Debris Logo Component
const MarineDebrisLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Ocean waves */}
    <path
      d="M10 60 Q 25 50, 40 60 T 70 60 T 100 60"
      stroke="#3B82F6"
      strokeWidth="3"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M10 70 Q 25 60, 40 70 T 70 70 T 100 70"
      stroke="#60A5FA"
      strokeWidth="3"
      fill="none"
      opacity="0.4"
    />
    
    {/* Camera/Detection lens */}
    <circle cx="50" cy="35" r="20" fill="#10B981" opacity="0.2" />
    <circle cx="50" cy="35" r="15" stroke="#10B981" strokeWidth="2" fill="none" />
    <circle cx="50" cy="35" r="8" fill="#10B981" />
    
    {/* Scanning lines */}
    <line x1="50" y1="20" x2="50" y2="10" stroke="#10B981" strokeWidth="2" opacity="0.6" />
    <line x1="65" y1="27" x2="72" y2="20" stroke="#10B981" strokeWidth="2" opacity="0.6" />
    <line x1="35" y1="27" x2="28" y2="20" stroke="#10B981" strokeWidth="2" opacity="0.6" />
  </svg>
);

// AI Projects Suite Logo Component
const AIProjectsSuiteLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Neural network nodes */}
    <circle cx="30" cy="25" r="8" fill="#8B5CF6" opacity="0.8" />
    <circle cx="70" cy="25" r="8" fill="#8B5CF6" opacity="0.8" />
    <circle cx="30" cy="75" r="8" fill="#8B5CF6" opacity="0.8" />
    <circle cx="70" cy="75" r="8" fill="#8B5CF6" opacity="0.8" />
    <circle cx="50" cy="50" r="12" fill="#A78BFA" opacity="0.9" />
    
    {/* Connection lines */}
    <line x1="30" y1="25" x2="50" y2="50" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
    <line x1="70" y1="25" x2="50" y2="50" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
    <line x1="30" y1="75" x2="50" y2="50" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
    <line x1="70" y1="75" x2="50" y2="50" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
    
    {/* Outer glow */}
    <circle cx="50" cy="50" r="35" stroke="#A78BFA" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="5 5">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        dur="20s"
        repeatCount="indefinite"
      />
    </circle>
    
    {/* AI Spark */}
    <path d="M50 10 L52 18 L60 16 L54 22 L58 30 L50 26 L42 30 L46 22 L40 16 L48 18 Z" fill="#C4B5FD" opacity="0.6" />
  </svg>
);

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const icons = [Rocket, Code, Zap];
  const Icon = icons[index % icons.length];
  
  const CardWrapper = project.type === "personal" && project.link 
    ? ({ children, ...props }: any) => (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
          <div {...props}>{children}</div>
        </a>
      )
    : ({ children, ...props }: any) => <div {...props}>{children}</div>;

  return (
    <CardWrapper>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group h-full"
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
        
        <Card className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
          {/* Thin top accent line */}
          <div 
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"
          />
          
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                {/* Logo or Icon */}
                {project.logo ? (
                  <div className="w-12 h-12 rounded-xl bg-white/5 p-2 border border-white/10 flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.logo} 
                      alt={`${project.title} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : project.customIcon ? (
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 flex items-center justify-center ${
                    isHovered ? 'bg-primary/10 border-primary/30 scale-105' : ''
                  }`}>
                    {project.customIcon}
                  </div>
                ) : (
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ${
                    isHovered ? 'bg-primary/10 border-primary/30 scale-105' : ''
                  }`}>
                    <Icon className={`w-6 h-6 transition-colors duration-300 ${
                      isHovered ? 'text-primary-glow' : 'text-white/60'
                    }`} />
                  </div>
                )}
              </div>
              {project.showLink && (
                <ExternalLink className="w-5 h-5 text-white/40 opacity-0 group-hover:opacity-100 group-hover:text-primary-glow transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              )}
            </div>
            
            <CardTitle className="text-xl md:text-2xl text-white group-hover:text-primary-glow transition-colors duration-300 mb-3">
              {project.title}
            </CardTitle>
            <CardDescription className="text-sm md:text-base text-white/70 leading-relaxed">
              {project.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="mt-auto space-y-4 pt-0">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string, i: number) => (
                <Badge 
                  key={i} 
                  variant="secondary" 
                  className="bg-white/5 text-white/80 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 text-xs px-2.5 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary-glow mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium text-white/80">{project.impact}</p>
              </div>
            </div>

            {/* Expandable Details Section */}
            {project.details && (
              <div className="border-t border-white/10 pt-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                  className="flex items-center gap-2 text-primary-glow text-sm font-medium hover:text-primary transition-colors w-full"
                >
                  <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                {isExpanded && (
                  <div className="mt-4 space-y-4 text-sm">
                    {project.details.challenges && (
                      <div>
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <span className="w-1 h-4 bg-primary-glow rounded-full"></span>
                          Challenges
                        </h4>
                        <p className="text-white/70 leading-relaxed">{project.details.challenges}</p>
                      </div>
                    )}
                    {project.details.solutions && (
                      <div>
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <span className="w-1 h-4 bg-secondary rounded-full"></span>
                          Solutions
                        </h4>
                        <p className="text-white/70 leading-relaxed">{project.details.solutions}</p>
                      </div>
                    )}
                    {project.details.architecture && (
                      <div>
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <span className="w-1 h-4 bg-accent rounded-full"></span>
                          Architecture
                        </h4>
                        <p className="text-white/70 leading-relaxed">{project.details.architecture}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </CardWrapper>
  );
};

export const Projects = () => {
  const projects = [
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
        <div className="absolute bottom-1/4 left-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
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