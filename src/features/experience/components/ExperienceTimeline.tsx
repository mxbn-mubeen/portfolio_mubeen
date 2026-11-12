import { useState } from "react";
import { Sparkles, Calendar, MapPin, CheckCircle2, ShieldCheck, Zap, Code2, ExternalLink } from "lucide-react";

export interface ExperienceStage {
  stage: string;
  tier: "APEX" | "ADVANCED" | "FOUNDATION";
  role: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  location: string;
  period: string;
  type: string;
  engineeringTagline: string;
  achievements: string[];
  tech?: string[];
}

interface ExperienceTimelineProps {
  experience: ExperienceStage;
  index: number;
}

export const ExperienceTimeline = ({ experience, index }: ExperienceTimelineProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const isApex = experience.tier === "APEX";
  const isAdvanced = experience.tier === "ADVANCED";
  const isFoundation = experience.tier === "FOUNDATION";

  return (
    <div 
      className="relative pl-14 md:pl-20 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Node along the Career Axis */}
      <div className="absolute left-6 md:left-8 -translate-x-1/2 top-2 z-20">
        <div 
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ${
            isApex
              ? "bg-amber-400 text-zinc-950 shadow-[0_0_20px_rgba(251,191,36,0.8)] ring-4 ring-amber-400/20 scale-110"
              : isAdvanced
              ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.6)] ring-4 ring-indigo-500/20"
              : "bg-zinc-800 text-blue-400 border border-blue-500/30"
          }`}
        >
          {isApex ? (
            <ShieldCheck className="w-4 h-4" />
          ) : isAdvanced ? (
            <Zap className="w-3.5 h-3.5" />
          ) : (
            <Code2 className="w-3.5 h-3.5" />
          )}
        </div>

        {/* Ambient ping for the current role */}
        {isApex && (
          <span className="absolute -inset-1 rounded-full border border-amber-300/40 animate-ping pointer-events-none" />
        )}
      </div>

      {/* Main Experience Card */}
      <div 
        className={`relative p-6 sm:p-8 rounded-2xl transition-all duration-500 overflow-hidden ${
          isApex
            ? "bg-gradient-to-b from-zinc-900/90 via-zinc-950/90 to-amber-950/20 border-2 border-amber-400/40 shadow-[0_0_40px_rgba(251,191,36,0.12)] hover:shadow-[0_0_60px_rgba(251,191,36,0.25)] hover:border-amber-300/70"
            : isAdvanced
            ? "bg-gradient-to-b from-zinc-900/80 via-zinc-950/90 to-indigo-950/20 border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:border-indigo-400/60"
            : "bg-zinc-950/80 border border-white/[0.08] hover:border-blue-500/30"
        }`}
      >
        {/* Subtle Ambient Ray on Apex Card */}
        {isApex && (
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-36 bg-gradient-to-b from-amber-300/10 via-yellow-500/5 to-transparent blur-2xl pointer-events-none" />
        )}

        {/* Top Header: Phase Badge & Type */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span 
              className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full font-bold flex items-center gap-1.5 ${
                isApex
                  ? "bg-amber-400/15 border border-amber-400/40 text-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.25)]"
                  : isAdvanced
                  ? "bg-indigo-500/10 border border-indigo-400/30 text-indigo-300"
                  : "bg-blue-500/10 border border-blue-500/20 text-blue-400"
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>{experience.stage}</span>
            </span>
          </div>

          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400">
            {experience.type}
          </span>
        </div>

        {/* Role & Company Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <div className="flex items-start gap-3.5">
            {experience.logo ? (
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-12 h-12 rounded-xl object-contain bg-white/[0.04] p-1.5 border border-white/[0.08] flex-shrink-0"
              />
            ) : (
              <div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border ${
                  isApex 
                    ? "bg-amber-400/10 border-amber-400/30 text-amber-300" 
                    : isAdvanced
                    ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400"
                    : "bg-white/[0.04] border-white/[0.08] text-zinc-400"
                }`}
              >
                {isApex ? <ShieldCheck className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
              </div>
            )}
            <div>
              <h3 
                className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                  isApex 
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-300" 
                    : "text-white group-hover:text-blue-300"
                }`}
              >
                {experience.role}
              </h3>
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white mt-0.5 group/company transition-colors"
                >
                  <span>{experience.company}</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500 group-hover/company:text-zinc-300" />
                </a>
              ) : (
                <p className="text-sm font-medium text-zinc-300 mt-0.5">
                  {experience.company}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* High-Impact Executive Summary */}
        <p 
          className={`text-xs sm:text-[13px] font-mono mb-4 leading-relaxed ${
            isApex ? "text-amber-200/90 font-medium" : isAdvanced ? "text-indigo-200/90" : "text-zinc-400"
          }`}
        >
          {experience.engineeringTagline}
        </p>

        {/* Date & Location Pill Row */}
        <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400 mb-5 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>{experience.location}</span>
          </div>
        </div>

        {/* Achievements List */}
        <ul className="space-y-3 mb-6">
          {experience.achievements.map((achievement: string, i: number) => (
            <li key={i} className="flex gap-3 items-start text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <CheckCircle2 
                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                  isApex ? "text-amber-400" : isAdvanced ? "text-indigo-400" : "text-blue-400"
                }`} 
              />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Pills */}
        {experience.tech && (
          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
            {experience.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                  isApex
                    ? "bg-amber-400/5 text-amber-200/90 border-amber-400/20"
                    : isAdvanced
                    ? "bg-indigo-500/5 text-indigo-200/90 border-indigo-500/20"
                    : "bg-white/[0.03] text-zinc-400 border-white/[0.06]"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
