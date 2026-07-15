import { useEffect, useRef } from 'react';
import { createTimeline, type Target } from 'animejs';

interface HeroAnimationProps {
  children: React.ReactNode;
}

export const HeroAnimation = ({ children }: HeroAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const title = container.querySelector<HTMLElement>('.hero-title');
    const subtitle = container.querySelector<HTMLElement>('.hero-subtitle');
    const description = container.querySelector<HTMLElement>('.hero-description');
    const buttons = container.querySelectorAll<HTMLElement>('.hero-button');
    const socials = container.querySelectorAll<HTMLElement>('.hero-social');

    // Split text into spans for character animation
    if (title) {
      const text = title.textContent || '';
      title.innerHTML = text
        .split('')
        .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');
    }

    const tl = createTimeline();
    const titleSpans = title?.querySelectorAll<HTMLSpanElement>('span') ?? [];

    tl.add(Array.from(titleSpans), {
      opacity: [0, 1],
      y: [50, 0],
      scale: [0.8, 1],
      duration: 1000,
      delay: (_el: Target, i: number) => i * 50,
    });

    if (subtitle) {
      tl.add(subtitle, {
        opacity: [0, 1],
        y: [30, 0],
        duration: 800,
      });
    }

    if (description) {
      tl.add(description, {
        opacity: [0, 1],
        y: [20, 0],
        duration: 800,
      });
    }

    tl.add(Array.from(buttons), {
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 600,
      delay: (_el: Target, i: number) => i * 100,
      easing: 'easeOutBack',
    });

    tl.add(Array.from(socials), {
      opacity: [0, 1],
      y: [20, 0],
      scale: [0.8, 1],
      duration: 500,
      delay: (_el: Target, i: number) => i * 80,
    });

  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};
