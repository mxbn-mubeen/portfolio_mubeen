import { useEffect, useRef } from 'react';
// @ts-ignore
import anime from 'animejs';

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

    // Animate title characters
    anime.timeline()
      .add({
        targets: title?.querySelectorAll('span'),
        opacity: [0, 1],
        translateY: [50, 0],
        scale: [0.8, 1],
        duration: 1000,
        delay: anime.stagger(50),
        easing: 'easeOutExpo',
      })
      .add({
        targets: subtitle,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutExpo',
      }, '-=600')
      .add({
        targets: description,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutExpo',
      }, '-=400')
      .add({
        targets: buttons,
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 600,
        delay: anime.stagger(100),
        easing: 'easeOutBack',
      }, '-=200')
      .add({
        targets: socials,
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.8, 1],
        duration: 500,
        delay: anime.stagger(80),
        easing: 'easeOutExpo',
      }, '-=200');

  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};
