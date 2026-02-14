import { Github, Linkedin, Mail, FileText } from "lucide-react"; 
import { Button } from "@/shared/components/ui/button";
import { HeroAnimation } from "@/shared/components/HeroAnimation";
import { Link as ScrollLink } from "react-scroll";
import { useRef, useEffect } from "react";
import { animate } from "animejs";

export const Hero = () => {
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Continuous floating animation for hero content
    if (floatingRef.current) {
      animate(floatingRef.current, {
        y: [-10, 10],
        duration: 3000,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate',
      });
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0c10]">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <HeroAnimation>
          <div ref={floatingRef}>
            <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6">
              Mohamed Mubeen A S
            </h1>
            <p className="hero-subtitle text-2xl md:text-3xl text-white/90 mb-8 font-light">
              Full Stack Developer
            </p>
          </div>
          
          <p className="hero-description text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Specialized in React.js, Next.js, and TypeScript. Building scalable web solutions 
            with modern technologies and clean architecture.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
            >
              <Button 
                size="lg" 
                className="glass-button bg-primary/20 text-white border-primary/30 hover:bg-primary/40 px-8 py-6 text-lg"
              >
                Get In Touch
              </Button>
            </ScrollLink>
            <Button
              size="lg"
              className="glass-button bg-white/5 text-white border-white/10 hover:bg-white/10 px-8 py-6 text-lg gap-2"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <FileText className="w-5 h-5" />
              View Resume
            </Button>
          </div>

          <div className="flex gap-6 justify-center mt-12">
            <a href="https://www.linkedin.com/in/mohamed-mubeen-a-s-3b6a3a288" target="_blank" rel="noopener noreferrer" 
               className="hero-social text-white/70 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/mxbn-mubeen" target="_blank" rel="noopener noreferrer"
               className="hero-social text-white/70 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:mxbn18@gmail.com"
               className="hero-social text-white/70 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </HeroAnimation>
      </div>
    </section>
  );
};
