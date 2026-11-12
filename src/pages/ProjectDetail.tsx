import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Terminal, Layers, Sparkles } from "lucide-react";
import { projectsDatabase } from "./project-detail-data";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsDatabase[id] : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Project Case Study Not Found</h2>
          <p className="text-sm text-zinc-400 mb-4">No detailed case study was found for "{id}".</p>
          <Link to="/#projects" className="text-amber-400 hover:text-amber-300 text-xs font-mono">
            ← Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top Ambient Celestial Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-gradient-to-b from-amber-400/10 via-amber-500/5 to-transparent blur-[140px] pointer-events-none" />

      {/* Floating Stardust Motes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-300 animate-pulse"
            style={{
              top: `${15 + (i * 12) % 80}%`,
              left: `${8 + (i * 16) % 84}%`,
              opacity: 0.25 + (i % 3) * 0.25,
              animationDuration: `${2.2 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto mb-8 relative z-10">
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors py-2 px-3 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-amber-400/30"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        {/* Header Hero Card with Luminous Frame */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-zinc-900/95 via-zinc-950/95 to-amber-950/15 border-2 border-amber-400/30 shadow-[0_0_50px_rgba(251,191,36,0.12)] relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="text-xs font-mono text-amber-300 font-semibold px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center gap-1.5 shadow-[0_0_10px_rgba(251,191,36,0.2)]">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{project.category}</span>
            </span>
            <span className="text-xs font-mono text-zinc-400">{project.timeline}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed mb-6">
            {project.summary}
          </p>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/[0.08]">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-amber-400/20">
                <p className="text-lg font-bold text-amber-300 font-mono">{m.value}</p>
                <p className="text-xs text-zinc-400 mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-6">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 hover:from-amber-300 hover:to-yellow-400 py-2.5 px-4 rounded-xl transition-all shadow-[0_0_15px_rgba(251,191,36,0.25)] cursor-pointer"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono bg-white/[0.04] text-white border border-white/[0.1] hover:border-amber-400/30 py-2.5 px-4 rounded-xl transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Deep Dive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-950/70 border border-white/[0.08]">
            <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider font-mono mb-2 flex items-center gap-2">
              <span>Engineering Challenges</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{project.challenges}</p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950/70 border border-white/[0.08]">
            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider font-mono mb-2 flex items-center gap-2">
              <span>Implemented Solutions</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{project.solutions}</p>
          </div>
        </div>

        {/* Architecture & Code Snippet */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/70 border border-white/[0.08]">
          <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>System Architecture Overview</span>
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">{project.architecture}</p>

          {project.codeSnippet && (
            <div className="rounded-xl bg-zinc-900/90 border border-amber-400/20 overflow-hidden shadow-lg">
              <div className="px-4 py-2 border-b border-white/[0.06] text-[11px] font-mono text-zinc-400 flex items-center gap-2 bg-zinc-950/80">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>{project.codeSnippet.title}</span>
              </div>
              <pre className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
