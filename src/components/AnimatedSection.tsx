import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = "",
  threshold = 0.1 
}: AnimatedSectionProps) => {
  const ref = useScrollAnimation({ threshold, once: true });
  
  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};
