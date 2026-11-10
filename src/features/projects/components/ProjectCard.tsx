import { ExternalLink, Code, Rocket, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export interface ProjectDetails {
  challenges?: string;
  solutions?: string;
  architecture?: string;
}

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
  caseStudySlug?: string;
  details?: ProjectDetails;
}

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const icons = [Rocket, Code, Zap];
  const Icon = icons[index % icons.length];
  
  const themes = [
    {
      card: "bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-blue-950/25 border border-blue-400/35 shadow-[0_0_30px_rgba(59,130,246,0.12)] hover:border-blue-400/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.22)]",
      badge: "bg-blue-500/15 text-blue-300 border-blue-400/30 shadow-[0_0_8px_rgba(59,130,246,0.2)]",
      title: "text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300",
      accent: "border-blue-400/50",
      btn: "text-blue-400 hover:text-blue-300",
      ray: "bg-gradient-to-b from-blue-400/20 to-transparent"
    },
    {
      card: "bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-indigo-950/25 border border-indigo-400/30 shadow-[0_0_30px_rgba(99,102,241,0.12)] hover:border-indigo-400/60 hover:shadow-[0_0_40px_rgba(99,102,241,0.22)]",
      badge: "bg-indigo-500/15 text-indigo-300 border-indigo-400/30 shadow-[0_0_8px_rgba(99,102,241,0.2)]",
      title: "text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300",
      accent: "border-indigo-400/50",
      btn: "text-indigo-400 hover:text-indigo-300",
      ray: "bg-gradient-to-b from-indigo-400/15 to-transparent"
    },
    {
      card: "bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-cyan-950/25 border border-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.12)] hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.22)]",
      badge: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30 shadow-[0_0_8px_rgba(6,182,212,0.2)]",
      title: "text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300",
      accent: "border-cyan-400/50",
      btn: "text-cyan-400 hover:text-cyan-300",
      ray: "bg-gradient-to-b from-cyan-400/15 to-transparent"
    },
    {
      card: "bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-emerald-950/25 border border-emerald-400/30 shadow-[0_0_30px_rgba(16,185,129,0.12)] hover:border-emerald-400/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.22)]",
      badge: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30 shadow-[0_0_8px_rgba(16,185,129,0.2)]",
      title: "text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-300",
      accent: "border-emerald-400/50",
      btn: "text-emerald-400 hover:text-emerald-300",
      ray: "bg-gradient-to-b from-emerald-400/15 to-transparent"
    }
  ];

  const theme = themes[index % themes.length];

  return (
    <article
      className={`relative rounded-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 sm:p-7 ${theme.card}`}
    >
      {/* Subtle top ambient light ray */}
      <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-24 blur-xl pointer-events-none ${theme.ray}`} />

      <div>
        {/* Header: Logo, Type Badge & Action Links */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {project.logo ? (
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] p-1.5 border border-white/[0.08] flex items-center justify-center overflow-hidden flex-shrink-0">
                <img 
                  src={project.logo} 
                  alt={`${project.title} logo`}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            ) : project.customIcon ? (
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                {project.customIcon}
              </div>
            ) : (
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
            )}

            <div>
              <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full border ${theme.badge}`}>
                {project.type}
              </span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2">
            {project.caseStudySlug && (
              <a
                href={`/projects/${project.caseStudySlug}`}
                className="text-[11px] font-mono text-blue-400 hover:text-blue-300 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all flex items-center gap-1 shadow-sm"
              >
                <span>Case Study</span>
                <span className="text-xs">→</span>
              </a>
            )}
            {project.showLink && project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all"
              >
                <span>Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        <h3 className={`text-xl font-bold tracking-tight mb-2.5 ${theme.title}`}>
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {/* Footer Area: Tech Badges & Impact */}
      <div className="space-y-3.5 mt-2">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech: string, i: number) => (
            <span 
              key={i} 
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Impact Line */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <p className="text-xs font-medium text-zinc-200 font-mono">{project.impact}</p>
          </div>
        </div>

        {/* Seamless Architecture Specs (No nested box) */}
        {project.details && (
          <div className="border-t border-white/[0.06] pt-2.5">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center gap-1.5 text-xs font-medium transition-colors cursor-pointer py-1 ${theme.btn}`}
            >
              <span>{isExpanded ? 'Hide Architecture Specs' : 'View Architecture Specs'}</span>
              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            
            {isExpanded && (
              <div className={`mt-2.5 space-y-2.5 border-l-2 ${theme.accent} pl-3.5 py-1 text-xs`}>
                {project.details.challenges && (
                  <div>
                    <h4 className="text-red-400 font-semibold text-[11px] font-mono uppercase tracking-wider mb-0.5">
                      Engineering Challenges
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-[11px]">{project.details.challenges}</p>
                  </div>
                )}
                {project.details.solutions && (
                  <div>
                    <h4 className="text-emerald-400 font-semibold text-[11px] font-mono uppercase tracking-wider mb-0.5">
                      Implemented Solutions
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-[11px]">{project.details.solutions}</p>
                  </div>
                )}
                {project.details.architecture && (
                  <div>
                    <h4 className="text-blue-400 font-semibold text-[11px] font-mono uppercase tracking-wider mb-0.5">
                      System Architecture
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-[11px]">{project.details.architecture}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
