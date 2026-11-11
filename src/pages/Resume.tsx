import { ArrowLeft, Download, Printer, Mail, Phone, MapPin, Globe, Sparkles, ShieldCheck, Zap, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/components/ui/button";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top Ambient Light Ray (Hidden when printing) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-amber-400/10 via-amber-500/5 to-transparent blur-[140px] pointer-events-none print:hidden" />

      {/* Floating Stardust Motes (Hidden when printing) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden print:hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-300 animate-pulse"
            style={{
              top: `${12 + (i * 12) % 80}%`,
              left: `${6 + (i * 14) % 86}%`,
              opacity: 0.25 + (i % 3) * 0.25,
              animationDuration: `${2.2 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* Top Floating Action Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors py-2 px-3 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-amber-400/30"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-2.5">
          <Button
            size="sm"
            variant="outline"
            onClick={handlePrint}
            className="text-xs font-mono bg-white/[0.04] border-white/[0.1] text-zinc-300 hover:text-white hover:bg-white/[0.08] cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 mr-1.5" />
            <span>Print CV</span>
          </Button>

          <a 
            href="/Mohamed_Mubeen_Resume.pdf" 
            download
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 hover:from-amber-300 hover:to-yellow-400 py-2 px-3.5 rounded-lg transition-all shadow-[0_0_15px_rgba(251,191,36,0.25)] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>

      {/* Main Resume Sheet with Luminous Frame */}
      <div className="relative z-10 max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-zinc-900/95 via-zinc-950/95 to-amber-950/10 border-2 border-amber-400/30 shadow-[0_0_50px_rgba(251,191,36,0.12)] print:border-none print:shadow-none print:bg-white print:text-black">
        {/* Header */}
        <header className="border-b border-white/[0.08] pb-6 mb-8 print:border-black/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] font-mono text-amber-300 mb-2 print:hidden">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Verified Full Stack Software Engineer</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white print:text-black">
                Mohamed Mubeen A S
              </h1>
              <p className="text-sm font-mono text-amber-300 font-semibold mt-1 print:text-blue-700">
                Full Stack Developer • React, Next.js, TypeScript, tRPC & PostgreSQL
              </p>
            </div>

            <div className="space-y-1 text-xs font-mono text-zinc-400 print:text-zinc-600 sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 print:text-zinc-500" />
                <span>Sharjah, United Arab Emirates (Available Immediately)</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400 print:text-zinc-500" />
                <a href="mailto:mohamedmubeen.dev@gmail.com" className="hover:text-amber-300">mohamedmubeen.dev@gmail.com</a>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400 print:text-zinc-500" />
                <span>+971 50 469 5147</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Globe className="w-3.5 h-3.5 text-amber-400 print:text-zinc-500" />
                <a href="https://portfolio-mxbn.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-amber-300">portfolio-mxbn.vercel.app</a>
              </p>
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-2 print:text-blue-700">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed print:text-zinc-800">
            Full Stack Developer with 2+ years of production experience designing, building, and optimizing scalable SaaS web applications and clinical safety systems. Proven track record delivering end-to-end type safety with React, Next.js, TypeScript, tRPC, and PostgreSQL (Drizzle ORM). Successfully reduced API latency by 30% and architected regulatory-compliant reporting engines supporting 137+ languages under E2B R3 standards.
          </p>
        </section>

        {/* Technical Competencies */}
        <section className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3 print:text-blue-700">
            Technical Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-400/20 transition-colors print:bg-transparent print:border-black/10">
              <span className="font-semibold text-white print:text-black">Frontend & State Architecture:</span>
              <p className="text-zinc-400 print:text-zinc-700 mt-1">React.js, Next.js (App Router), TypeScript, Tailwind CSS, TanStack Query, Chakra UI, SaaS UI</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-400/20 transition-colors print:bg-transparent print:border-black/10">
              <span className="font-semibold text-white print:text-black">Backend Services & Type-Safe APIs:</span>
              <p className="text-zinc-400 print:text-zinc-700 mt-1">Node.js, tRPC, Zod Validation, REST APIs, Java, Spring Boot, Microservices</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-400/20 transition-colors print:bg-transparent print:border-black/10">
              <span className="font-semibold text-white print:text-black">Database & Persistence Layer:</span>
              <p className="text-zinc-400 print:text-zinc-700 mt-1">PostgreSQL, Drizzle ORM, Supabase, MySQL, Hibernate</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-400/20 transition-colors print:bg-transparent print:border-black/10">
              <span className="font-semibold text-white print:text-black">Cloud & Regulatory Standards:</span>
              <p className="text-zinc-400 print:text-zinc-700 mt-1">Azure AI Translation, E2B R3 / HL7 XML Specifications, Git, Vite, Vercel CI/CD</p>
            </div>
          </div>
        </section>

        {/* Work Experience with Milestone Badges */}
        <section className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-4 print:text-blue-700">
            Work Experience
          </h2>
          <div className="space-y-6">
            {/* Phase III */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-amber-400/20 print:p-0 print:border-none">
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-bold text-white print:text-black">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Freelance Full Stack Developer • Clin Solution L.L.C</span>
                </div>
                <span className="text-xs font-mono text-zinc-400 print:text-zinc-600 font-normal">Nov 2025 – Present • US Remote</span>
              </div>
              <p className="text-xs text-amber-300/90 print:text-blue-800 font-mono mt-1">Phase III: Clinical & Enterprise Systems • Project: AeroReporting</p>
              <ul className="mt-2 space-y-1.5 text-xs text-zinc-300 print:text-zinc-700 list-disc list-inside leading-relaxed">
                <li>Built AeroReporting, an end-to-end Adverse Event Reporting System using React, TypeScript, Node.js, PostgreSQL, and Supabase, enabling E2B-compliant XML and PDF report generation for pharmacovigilance workflows.</li>
                <li>Integrated Azure AI Translation API to power multilingual safety reporting across 137+ languages, reducing manual localisation effort for international regulatory submissions.</li>
                <li>Implemented WHODrug dictionary integration, standardising pharmaceutical terminology across the reporting pipeline and improving data accuracy for regulatory teams.</li>
                <li>Delivered production-ready features across 3+ release cycles in direct collaboration with stakeholders, maintaining a fully responsive, accessible UI.</li>
              </ul>
            </div>

            {/* Phase II */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-indigo-400/20 print:p-0 print:border-none">
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-bold text-white print:text-black">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-indigo-400" />
                  <span>Full Stack Developer • Nexobe</span>
                </div>
                <span className="text-xs font-mono text-zinc-400 print:text-zinc-600 font-normal">Sep 2024 – Sep 2025 • Illinois, US</span>
              </div>
              <p className="text-xs text-indigo-300/90 print:text-blue-800 font-mono mt-1">Phase II: High-Velocity SaaS & APIs</p>
              <ul className="mt-2 space-y-1.5 text-xs text-zinc-300 print:text-zinc-700 list-disc list-inside leading-relaxed">
                <li>Developed and deployed interactive dashboards using Chakra UI and SaaS UI, boosting workflow efficiency by 40%.</li>
                <li>Integrated TanStack Query and tRPC, reducing API response times by 30% and eliminating client-server runtime mismatches.</li>
                <li>Optimized PostgreSQL schema via Drizzle ORM, cutting redundant queries by 25% and improving data integrity.</li>
                <li>Partnered with cross-functional teams to deliver scalable SaaS features, ensuring seamless frontend-backend integration.</li>
              </ul>
            </div>

            {/* Phase I */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-blue-400/20 print:p-0 print:border-none">
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-bold text-white print:text-black">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span>Jr. Java Full Stack Developer Intern • Inmakes Infotech</span>
                </div>
                <span className="text-xs font-mono text-zinc-400 print:text-zinc-600 font-normal">May 2024 – Jul 2024 • Kerala, India</span>
              </div>
              <p className="text-xs text-blue-300/90 print:text-blue-800 font-mono mt-1">Phase I: Core Engineering Bedrock</p>
              <ul className="mt-2 space-y-1.5 text-xs text-zinc-300 print:text-zinc-700 list-disc list-inside leading-relaxed">
                <li>Developed full-stack modules using Java Spring Boot, React, and MySQL, enhancing system performance and user experience.</li>
                <li>Engineered clean REST APIs and optimized data flow, ensuring backend consistency across modules.</li>
                <li>Acquired practical experience with agile workflows and collaborative development methodologies.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Accreditations */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-2 print:text-blue-700">
                Education
              </h2>
              <div className="text-xs text-zinc-300 print:text-zinc-800">
                <p className="font-bold text-white print:text-black">B.E. in Computer Science & Engineering</p>
                <p className="text-zinc-400 print:text-zinc-600">Aalim Muhammed Salegh College of Engineering</p>
                <p className="text-[11px] font-mono text-zinc-500">Affiliated with Anna University • 2020 – 2024</p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-2 print:text-blue-700">
                Accreditations
              </h2>
              <div className="text-xs text-zinc-300 print:text-zinc-800 space-y-1">
                <p>• <span className="font-semibold text-white print:text-black">Azure AI Apps &amp; Agents (AI-103):</span> Microsoft Certified — Oct 2026</p>
                <p>• <span className="font-semibold text-white print:text-black">AI Skills Fest 2026:</span> Microsoft · Credly</p>
                <p>• <span className="font-semibold text-white print:text-black">Data Science:</span> GUVI Verified</p>
                <p>• <span className="font-semibold text-white print:text-black">Cloud Computing Core:</span> IBM / TNSDC</p>
                <p>• <span className="font-semibold text-white print:text-black">JavaScript Specialist:</span> GUVI</p>
                <p>• <span className="font-semibold text-white print:text-black">Olympic Data Insights:</span> Udemy · Internshala</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
