import { Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react"; 
import { Button } from "@/shared/components/ui/button";
import { HeroAnimation } from "@/shared/components/HeroAnimation";
import { Link as ScrollLink } from "react-scroll";
import { useRef, useEffect, useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "React Developer", "Java Developer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0c10] pt-20 pb-16"
    >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        
        {/* Gradient Orbs with Mouse Interaction */}
        <div 
          className="absolute w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] animate-pulse transition-transform duration-1000"
          style={{
            top: '10%',
            left: '5%',
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          }}
        />
        <div 
          className="absolute w-[700px] h-[700px] bg-secondary/20 rounded-full blur-[150px] animate-pulse transition-transform duration-1000"
          style={{ 
            bottom: '5%',
            right: '5%',
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`,
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-pulse transition-transform duration-1000"
          style={{ 
            top: '30%',
            right: '15%',
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
          }}
        />
        
        {/* Floating Code Snippets */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/10 font-mono text-sm animate-float opacity-20 hidden md:block"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i}s`,
            }}
          >
            {['</>', '{ }', '( )', '[ ]', '=>', 'fn()'][i]}
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <HeroAnimation>
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-primary-glow animate-pulse" />
              <span className="text-xs md:text-sm text-white/70">
                Available for Immediate Opportunities in UAE
              </span>
            </div>

            {/* Main Title with Gradient */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="block text-white mb-2">Mohamed Mubeen A S</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient text-3xl md:text-5xl lg:text-6xl">
                {roles[currentRole]}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
              Specialized in building <span className="text-primary-glow font-semibold">scalable SaaS applications</span> with 
              React.js, Next.js, and TypeScript. Delivering <span className="text-secondary font-semibold">type-safe solutions</span> that 
              drive business growth and exceptional user experiences.
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-8 md:mb-12 px-4">
              {['React.js', 'Next.js', 'TypeScript', 'TRPC', 'PostgreSQL', 'Drizzle ORM'].map((tech, i) => (
                <div
                  key={tech}
                  className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs md:text-sm font-medium hover:bg-white/10 hover:border-primary/30 transition-all duration-300 cursor-default backdrop-blur-sm"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-12 px-4">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
              >
                <Button 
                  size="lg" 
                  className="glass-button w-full sm:w-auto bg-primary/20 text-white border-primary/30 hover:bg-primary/40 hover:scale-105 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold shadow-lg shadow-primary/20 transition-all duration-300 group"
                >
                  <span>Get In Touch</span>
                  <Mail className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ScrollLink>
              
              <Button
                size="lg"
                className="glass-button w-full sm:w-auto bg-white/5 text-white border-white/10 hover:bg-white/10 hover:scale-105 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold transition-all duration-300 group"
                onClick={() => window.open('/Mubeen_resume.pdf', '_blank')}
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                <span>View Resume</span>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 md:gap-6 justify-center items-center flex-wrap">
              <a
                href="https://www.linkedin.com/in/mohamed-mubeen-a-s-3b6a3a288"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://github.com/mxbn-mubeen"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              
              <a
                href="mailto:mxbn18@gmail.com"
                className="group relative p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </HeroAnimation>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.1;
          }
          50% { 
            transform: translateY(-20px) translateX(10px) rotate(5deg);
            opacity: 0.2;
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};