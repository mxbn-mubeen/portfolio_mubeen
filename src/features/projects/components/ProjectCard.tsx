import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/Components/ui/card";
import { Badge } from "@/shared/Components/ui/badge";
import { ExternalLink, Code, Rocket, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

// Project details interface
export interface ProjectDetails {
  challenges?: string;
  solutions?: string;
  architecture?: string;
}

// Project interface
export interface Project {
  title: string;
  logo?: string;
  customIcon?: React.ReactNode;
  description: string;
  tech: string[];
  impact: string;
  type: string;
  link?: string;
  showLink: boolean;
  details?: ProjectDetails;
}

export const ProjectCard = ({ project, index, isLarge }: { project: Project; index: number; isLarge?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const icons = [Rocket, Code, Zap];
  const Icon = icons[index % icons.length];
  
  const CardWrapper = project.link 
    ? ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
          <div {...props}>{children}</div>
        </a>
      )
    : ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;

  return (
    <CardWrapper>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group h-full rounded-2xl"
      >
        <Card className={`glass-card border-white/10 hover:border-primary/30 active:border-primary/30 active:bg-white/[0.12] transition-all duration-300 h-full flex relative overflow-hidden hover:!transform-none ${isLarge ? 'flex-col lg:flex-row lg:items-center' : 'flex-col'}`}>
          {/* Glow effect — safely inside overflow-hidden Card */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          {/* Thin top accent line */}
          <div 
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"
          />
          
          <div className={isLarge ? "flex-1 p-6" : ""}>
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
          </div>
          
          <div className={isLarge ? "flex-1 p-6 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col h-full justify-center" : ""}>
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
          </div>
        </Card>
      </div>
    </CardWrapper>
  );
};
