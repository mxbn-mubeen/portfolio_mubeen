import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react";
import { Button } from "@/shared/Components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { HeroAnimation } from "@/shared/Components/HeroAnimation";

const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "React Developer", "Java Developer"];

export const HeroContent = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
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
            href="mailto:mohamedmubeen.dev@gmail.com"
            className="group relative p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </HeroAnimation>
  );
};
