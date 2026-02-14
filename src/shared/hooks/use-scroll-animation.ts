import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

type AnimationVariant = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "scale" 
  | "slide-left" 
  | "slide-right";

export const useScrollAnimation = (options?: {
  threshold?: number;
  once?: boolean;
  variant?: AnimationVariant;
  duration?: number;
  delay?: number;
  distance?: number;
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const { 
    threshold = 0.1, 
    once = true, 
    variant = "fade-up",
    duration = 1000,
    delay = 0,
    distance = 40
  } = options || {};

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Define animation properties based on variant
    const getAnimationProps = () => {
      const baseProps = {
        opacity: [0, 1],
        duration,
        delay,
        easing: 'easeOutExpo',
      };

      switch (variant) {
        case 'fade-up':
          return { ...baseProps, y: [distance, 0] };
        case 'fade-down':
          return { ...baseProps, y: [-distance, 0] };
        case 'fade-left':
          return { ...baseProps, x: [distance, 0] };
        case 'fade-right':
          return { ...baseProps, x: [-distance, 0] };
        case 'scale':
          return { ...baseProps, scale: [0.8, 1] };
        case 'slide-left':
          return { ...baseProps, x: [distance * 2, 0], opacity: [0, 1] };
        case 'slide-right':
          return { ...baseProps, x: [-distance * 2, 0], opacity: [0, 1] };
        default:
          return { ...baseProps, y: [distance, 0] };
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            animate(element, getAnimationProps());
            hasAnimated.current = true;
            
            if (once) {
              observer.unobserve(element);
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once, variant, duration, delay, distance]);

  return elementRef;
};

export const useStaggerAnimation = (options?: {
  threshold?: number;
  delay?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const { threshold = 0.1, delay = 100 } = options || {};

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            const children = container.children;
            Array.from(children).forEach((child, i) => {
              animate(child as Element, {
                opacity: [0, 1],
                y: [30, 0],
                scale: [0.9, 1],
                duration: 800,
                delay: i * delay,
                easing: 'easeOutExpo',
              });
            });
            hasAnimated.current = true;
            observer.unobserve(container);
          }
        });
      },
      { threshold }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay]);

  return containerRef;
};
