import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Zap, ShieldCheck, CheckCircle2, Terminal, Layers, Sparkles } from "lucide-react";

interface ProjectData {
  title: string; category: string; client: string; timeline: string; liveUrl?: string; githubUrl?: string;
  summary: string; metrics: { label: string; value: string }[]; techStack: string[];
  challenges: string; solutions: string; architecture: string;
  codeSnippet?: { title: string; code: string };
}

const projectsDatabase: Record<string, ProjectData> = {
  "ae-reporting": {
    title: "AE Reporting (AeroReporting)",
    category: "Phase III • Clinical Safety & Pharmacovigilance",
    client: "Clin Solution L.L.C (US)",
    timeline: "Nov 2025 – Present",
    liveUrl: "https://sideeffects.viginess.com/",
    summary: "An end-to-end, regulatory-compliant Adverse Event clinical safety reporting platform built to adhere to FDA and EMA E2B R3 (HL7 v3) XML standards.",
    metrics: [
      { label: "Standard Compliance", value: "100% E2B R3" },
      { label: "Languages Scaled", value: "137+ Tongues" },
      { label: "Dictionary Engines", value: "MedDRA & WHODrug" }
    ],
    techStack: ["React.js", "TypeScript", "tRPC", "PostgreSQL", "Drizzle ORM", "Supabase", "Azure AI Translation", "Zod"],
    challenges: "Generating valid E2B R3 XML schemas that comply with strict international regulatory bodies while supporting real-time multi-lingual entry across 137+ languages without incurring high cloud translation API costs or introducing submission latency.",
    solutions: "Architected a three-tier validation engine (Business Rules, XSD Schema, and MedDRA Vocabularies). Designed a Supabase PostgreSQL translation caching layer that prevented duplicate Azure AI requests and reduced translation overhead by 65%.",
    architecture: "React frontend with Saas UI connected via end-to-end type-safe tRPC APIs to a Node.js server. Persistent clinical reports, validation schemas, and dictionary lookups managed with Drizzle ORM on Supabase PostgreSQL.",
    codeSnippet: {
      title: "e2b-validator.ts",
      code: `// Three-tier clinical validation pipeline\nexport async function validateE2BSubmission(reportId: string) {\n  const report = await db.query.reports.findFirst({\n    where: eq(reports.id, reportId),\n    with: { adverseEvents: true, drugDoses: true }\n  });\n  // 1. Zod schema validation\n  const validated = E2BReportSchema.parse(report);\n  // 2. MedDRA hierarchy mapping verification\n  await verifyMedDRATerms(validated.adverseEvents);\n  // 3. Compile E2B R3 HL7 v3 compliant XML\n  return generateE2BXml(validated);\n}`
    }
  },
  "caviti-ai": {
    title: "Caviti AI",
    category: "Phase II • High-Velocity AI SaaS Platform",
    client: "Caviti AI",
    timeline: "2024 – 2025",
    summary: "High-performance enterprise SaaS dashboard featuring interactive telemetry, type-safe API communication, and scalable PostgreSQL database schemas.",
    metrics: [
      { label: "API Latency Reduction", value: "-30%" },
      { label: "Workflow Velocity", value: "+40%" },
      { label: "Query Optimization", value: "25% Fewer Trips" }
    ],
    techStack: ["React.js", "TypeScript", "tRPC", "PostgreSQL", "Drizzle ORM", "Chakra UI", "TanStack Query"],
    challenges: "Managing complex cross-component dashboard state while preventing data desynchronization and eliminating runtime API mismatches between client and server.",
    solutions: "Engineered an end-to-end type-safe tRPC layer, configured TanStack Query for optimal multi-level client caching, and indexed relational PostgreSQL tables to prevent full-table scans.",
    architecture: "React frontend with Chakra UI and TanStack Query, connecting to Node.js tRPC procedures with Drizzle ORM managing relational schemas."
  },
  "ai-projects-suite": {
    title: "AI Applications Suite",
    category: "Phase II • Reusable Frontend Architecture",
    client: "Multiple AI Products (Otteri, Pickel, Vipery)",
    timeline: "2024 – 2025",
    summary: "Shared component library and high-performance UI architecture powering multiple commercial AI applications including Otteri.ai, Pickel.ai, Vipery.ai, Snap.photo, and GoodOff.",
    metrics: [
      { label: "Products Scaled", value: "5+ Apps" },
      { label: "Component Reuse", value: "85% Shared" },
      { label: "Initial Load Boost", value: "+35%" }
    ],
    techStack: ["React.js", "TypeScript", "Shared Component Library", "Lazy Loading", "Tailwind CSS"],
    challenges: "Building and maintaining consistent UI components across multiple distinct AI applications with disparate branding, differing theme requirements, and varying feature sets.",
    solutions: "Architected a modular token-driven design system with headless component primitives, dynamic theme providers, and tree-shakable sub-bundles.",
    architecture: "Shared monorepo package structure with centralized design tokens, strict TypeScript prop validation, and automated bundle optimization."
  },
  "marine-debris": {
    title: "Marine Debris Detection System",
    category: "Phase I • AI & Computer Vision Research",
    client: "Academic Capstone",
    timeline: "2024",
    githubUrl: "https://github.com/mxbn-mubeen/MARINE-DEBRIS-DETECTION-SYSTEM",
    summary: "Deep learning computer vision system designed to detect, classify, and track marine debris in aquatic ecosystems using custom convolutional neural networks.",
    metrics: [
      { label: "Domain", value: "Ocean Conservation" }, { label: "Model Architecture", value: "Custom CNN" }, { label: "Pipeline", value: "OpenCV + Keras" }
    ],
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "NumPy"],
    challenges: "Accurately identifying small marine plastic and debris particles across varying water turbidity, turbulent wave surfaces, and inconsistent underwater lighting conditions.",
    solutions: "Applied adaptive histogram equalization (CLAHE) image preprocessing and trained custom CNN classifiers with transfer learning to achieve high detection accuracy.",
    architecture: "Python ML pipeline with OpenCV for frame preprocessing, TensorFlow/Keras for inference, and Flask serving classification endpoints."
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsDatabase[id] : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Project Case Study Not Found</h2>
          <p className="text-sm text-zinc-400 mb-4">No detailed case study was found for "{id}".</p>
          <Link to="/" className="text-amber-400 hover:text-amber-300 text-xs font-mono">
            ← Return to Portfolio
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
          to="/" 
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors py-2 px-3 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-amber-400/30"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
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
