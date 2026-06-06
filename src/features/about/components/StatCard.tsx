import { useState } from "react";

export const StatCard = ({ icon: Icon, value, label }: { icon: React.ElementType, value: string, label: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className={`glass-card p-6 border-white/10 transition-all duration-500 ${
        isHovered ? 'border-primary/50 shadow-lg shadow-primary/20' : ''
      }`}>
        <div className="flex flex-col items-center text-center gap-3">
          <div className={`p-3 rounded-xl bg-white/5 transition-all duration-500 ${
            isHovered ? 'bg-primary/20 scale-110' : ''
          }`}>
            <Icon className={`w-6 h-6 transition-colors duration-500 ${
              isHovered ? 'text-primary-glow' : 'text-white/50'
            }`} />
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm text-white/60">{label}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
