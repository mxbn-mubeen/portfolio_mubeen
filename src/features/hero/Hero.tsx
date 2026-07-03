import { useRef, useEffect } from "react";
import { HeroBackground } from "./Components/HeroBackground";
import { HeroContent } from "./Components/HeroContent";
import { HeroAvatar } from "./Components/HeroAvatar";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        // set CSS vars so CSS can handle transforms (avoids inline JSX styles)
        const mx = (e.clientX - rect.left) / rect.width;
        const my = (e.clientY - rect.top) / rect.height;
        heroRef.current.style.setProperty('--mx', String(mx));
        heroRef.current.style.setProperty('--my', String(my));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0c10] pt-20 pb-16"
    >
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroAvatar />
        </div>
      </div>
    </section>
  );
};
