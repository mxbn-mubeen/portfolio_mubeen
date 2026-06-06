import { useState } from "react";
import { Send } from "lucide-react";
import { colorClasses } from "@/shared/lib/utils";

export const ContactCard = ({ icon: Icon, title, info, href, color }: { icon: React.ElementType, title: string, info: string, href?: string, color: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const CardWrapper = href 
    ? ({ children, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} {...props}>
          {children}
        </a>
      )
    : ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;

  return (
    <CardWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 ${colorClasses[color]?.bg ?? 'bg-white/10'}`} />
      
      <div className={`relative flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ${
        href ? 'hover:border-primary/50 hover:bg-white/10 cursor-pointer' : ''
      }`}>
        <div 
          className={
            `p-4 rounded-xl transition-all duration-300 ${isHovered ? (colorClasses[color]?.bg20 ?? 'bg-white/10') : 'bg-white/5'}`
          }
        >
          <Icon className={`w-6 h-6 transition-all duration-300 ${isHovered ? (colorClasses[color]?.text ?? 'text-white') : 'text-white/50'}`} />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-white mb-1">{title}</p>
          <p className="text-sm text-white/60">{info}</p>
        </div>
        {href && (
          <Send className="w-5 h-5 text-white/30 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        )}
      </div>
    </CardWrapper>
  );
};
