import { useScrollAnimation } from "@/shared/hooks/use-scroll-animation";
import { ReactNode } from "react";

export type AnimationVariant = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "scale" 
  | "slide-left" 
  | "slide-right";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  variant?: AnimationVariant;
  duration?: number;
  delay?: number;
  distance?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = "",
  threshold = 0.1,
  variant = "fade-up",
  duration = 1000,
  delay = 0,
  distance = 40
}: AnimatedSectionProps) => {
  const ref = useScrollAnimation({ 
    threshold, 
    once: true, 
    variant,
    duration,
    delay,
    distance
  });
  
  return (
    <div ref={ref} className={`${className} opacity-0`}>
      {children}
    </div>
  );
};
