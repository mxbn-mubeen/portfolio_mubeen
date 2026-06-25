import { Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react"; 
import { Button } from "@/shared/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { useRef, useEffect, useState } from "react";
import { HeroAnimation } from "@/shared/components/HeroAnimation";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const startTyping = () => {
      timeout = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(timeout);
        }
      }, 50);
    };

    const initialDelay = setTimeout(startTyping, delay);

    return () => {
      clearInterval(timeout);
      clearTimeout(initialDelay);
    };
  }, [text, delay]);

  return <span>{displayedText}</span>;
};

const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "React Developer", "Java Developer"];

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
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        
        {/* Gradient Orbs with Mouse Interaction */}
        <div className="absolute w-[600px] h-[600px] top-[10%] left-[5%] orb-translate-30 bg-primary/30 rounded-full blur-[120px] animate-pulse transition-transform duration-1000" />
        <div className="absolute w-[700px] h-[700px] bottom-[5%] right-[5%] orb-translate--20 bg-secondary/20 rounded-full blur-[150px] animate-pulse transition-transform duration-1000 anim-delay-1s" />
        <div className="absolute w-[400px] h-[400px] top-[30%] right-[15%] orb-translate-40 bg-accent/20 rounded-full blur-[100px] animate-pulse transition-transform duration-1000 anim-delay-2s" />
        
        {/* Floating Code Snippets */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-primary/10 font-mono text-sm animate-float opacity-20 hidden md:block snippet-pos-${i} ${i > 0 ? `anim-delay-${i * 500}` : ''} anim-duration-${8000 + i * 1000}`}
          >
            {['</>', '{ }', '( )', '[ ]', '=>', 'fn()'][i]}
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <HeroAnimation>
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
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
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start mb-8 md:mb-12 px-4 lg:px-0">
              {['React.js', 'Next.js', 'TypeScript', 'TRPC', 'PostgreSQL', 'Drizzle ORM'].map((tech, i) => (
                <div
                  key={tech}
                  className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs md:text-sm font-medium hover:bg-white/10 hover:border-primary/30 transition-all duration-300 cursor-default backdrop-blur-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-10 md:mb-12 px-4 lg:px-0">
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
            <div className="flex gap-4 md:gap-6 justify-center lg:justify-start items-center flex-wrap px-4 lg:px-0">
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

          {/* Right Side: 3D Avatar & Speech Bubble */}
          <HeroAnimation>
            <div className="h-[350px] md:h-[500px] lg:h-[600px] w-full relative z-20 pointer-events-auto mt-16 md:mt-0">
              {/* Speech Bubble */}
              <div className="absolute -top-12 right-2 md:top-10 md:right-20 lg:right-32 z-30 max-w-[260px] md:max-w-xs bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-2xl rounded-tr-none shadow-xl transform animate-float">
                <div className="absolute -right-3 top-0 w-4 h-4 bg-white/10 backdrop-blur-md border-r border-t border-white/20 transform rotate-45" />
                <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
                  <TypewriterText 
                    text="Hi there! 👋 I'm Mubeen. I build scalable SaaS apps and create exceptional user experiences. Let's build something amazing together!" 
                    delay={1000} 
                  />
                  <span className="animate-pulse inline-block ml-1">|</span>
                </p>
              </div>

              {/* 3D Avatar Image with Tilt Effect */}
              <div 
                className="w-full h-full flex items-center justify-center transition-transform duration-200 ease-out avatar-tilt-container"
              >
                <div 
                  className="relative w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 avatar-glass-ring"
                >
                  <img 
                    src="/avatar.png" 
                    alt="3D Avatar" 
                    className="w-full h-full object-cover rounded-full shadow-2xl avatar-img-translate"
                  />
                  {/* Glowing backdrop */}
                  <div className="absolute inset-0 bg-primary/20 blur-[50px] -z-10 rounded-full" />
                </div>
              </div>
            </div>
          </HeroAnimation>
        </div>
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

        .avatar-tilt-container {
          transform: perspective(1000px) rotateY(calc((var(--mx, 0.5) - 0.5) * 20deg)) rotateX(calc((var(--my, 0.5) - 0.5) * -20deg)) translateZ(20px);
          transform-style: preserve-3d;
        }

        .avatar-glass-ring {
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 0 1px rgba(255,255,255,0.2);
        }

        .avatar-img-translate {
          transform: translateZ(30px);
        }
      `}</style>
    </section>
  );
};
