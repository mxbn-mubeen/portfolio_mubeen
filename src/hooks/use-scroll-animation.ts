import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

export const useScrollAnimation = (options?: {
  threshold?: number;
  once?: boolean;
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const { threshold = 0.1, once = true } = options || {};

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            anime({
              targets: element,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: 'easeOutExpo',
            });
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
  }, [threshold, once]);

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
            anime({
              targets: Array.from(children),
              opacity: [0, 1],
              translateY: [30, 0],
              scale: [0.9, 1],
              duration: 800,
              delay: anime.stagger(delay),
              easing: 'easeOutExpo',
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
