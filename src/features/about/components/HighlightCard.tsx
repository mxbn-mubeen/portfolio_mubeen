import { useState } from "react";
import { colorClasses } from "@/shared/lib/utils";

export const HighlightCard = ({ icon: Icon, title, description, color }: { icon: React.ElementType, title: string, description: string, color: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 ${colorClasses[color]?.bg ?? 'bg-white/10'}`} />
      
      <div className="glass-card p-6 border-white/10 hover:border-primary/30 transition-all duration-300 relative">
        <div className="flex items-start gap-4">
          <div 
            className={
              `p-3 rounded-xl transition-all duration-300 ${isHovered ? (colorClasses[color]?.bg20 ?? 'bg-white/10') : 'bg-white/5'}`
            }
          >
            <Icon className={`w-6 h-6 transition-all duration-300 ${isHovered ? (colorClasses[color]?.text ?? 'text-white') : 'text-white/50'}`} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
