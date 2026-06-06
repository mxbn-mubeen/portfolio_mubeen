import { useEffect, useRef } from 'react';
import { animate, createTimeline } from 'animejs';

interface HeroAnimationProps {
  children: React.ReactNode;
}

export const HeroAnimation = ({ children }: HeroAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const title = container.querySelector('.hero-title');
    const subtitle = container.querySelector('.hero-subtitle');
    const description = container.querySelector('.hero-description');
    const buttons = container.querySelectorAll('.hero-button');
    const socials = container.querySelectorAll('.hero-social');

    // Split text into spans for character animation
    if (title) {
      const text = title.textContent || '';
      title.innerHTML = text
        .split('')
        .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');
    }

    const tl = createTimeline();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tl.add(title?.querySelectorAll('span') as any, {
      opacity: [0, 1],
      y: [50, 0],
      scale: [0.8, 1],
      duration: 1000,
      delay: (_el: Element, i: number) => i * 50,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tl.add(subtitle as any, {
      opacity: [0, 1],
      y: [30, 0],
      duration: 800,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tl.add(description as any, {
      opacity: [0, 1],
      y: [20, 0],
      duration: 800,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tl.add(Array.from(buttons) as any, {
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 600,
      delay: (_el: Element, i: number) => i * 100,
      easing: 'easeOutBack',
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tl.add(Array.from(socials) as any, {
      opacity: [0, 1],
      y: [20, 0],
      scale: [0.8, 1],
      duration: 500,
      delay: (_el: Element, i: number) => i * 80,
    });

  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};
