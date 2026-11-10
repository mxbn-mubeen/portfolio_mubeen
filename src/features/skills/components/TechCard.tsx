import React from "react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  icon: IconType | LucideIcon | React.ComponentType<{ className?: string; color?: string }>;
  color: string;
  level: "Expert" | "Advanced" | "Intermediate";
  context: string;
  isCore?: boolean;
}

interface TechCardProps {
  tech: TechItem;
}

export const TechCard = ({ tech }: TechCardProps) => {
  const Icon = tech.icon;

  return (
    <div className="group relative p-4 rounded-xl bg-zinc-950/70 border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between">
      {/* Top subtle highlight line on hover */}
      <div 
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500" 
      />

      <div>
        <div className="flex items-start justify-between mb-3">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.06] group-hover:scale-110 group-hover:border-white/15 transition-all duration-300"
            style={{ color: tech.color }}
          >
            <Icon className="w-5 h-5" />
          </div>

          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
            tech.level === "Expert" 
              ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
              : tech.level === "Advanced"
              ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
              : "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
          }`}>
            {tech.level}
          </span>
        </div>

        <h4 className="text-sm font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">
          {tech.name}
        </h4>
      </div>

      <div className="mt-3 pt-2.5 border-t border-white/[0.05] flex items-center justify-between">
        <span className="text-[11px] font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors">
          {tech.context}
        </span>
        {tech.isCore && (
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
        )}
      </div>
    </div>
  );
};

