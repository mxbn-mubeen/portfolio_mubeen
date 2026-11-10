import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { HeroAnimation } from "@/shared/components/HeroAnimation";

const roles = [
  "Full Stack Engineer",
  "React & Next.js Specialist",
  "Type-Safe Systems Architect",
  "Frontend & API Developer",
];

export const HeroContent = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 200);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroAnimation>
      <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6 backdrop-blur-md hover:border-white/20 transition-all duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-zinc-300 tracking-wide">
            Available for Opportunities in UAE
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-[1.1]">
          <span className="block text-white">Mohamed Mubeen A S</span>
          <span
            className={`block mt-2 h-12 sm:h-14 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent transition-opacity duration-200 text-3xl sm:text-4xl lg:text-5xl ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {roles[currentRole]}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
          Crafting scalable, mission-critical web applications with{" "}
          <span className="text-zinc-200 font-medium">
            React, Next.js, and TypeScript
          </span>
          . Experienced in clinical safety compliance (E2B R3), end-to-end
          type-safe APIs, and optimized PostgreSQL databases.
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
          {[
            "React.js",
            "Next.js",
            "TypeScript",
            "tRPC",
            "PostgreSQL",
            "Drizzle ORM",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-zinc-300 text-xs font-mono tracking-tight hover:border-blue-500/30 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
          <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-zinc-950 hover:bg-zinc-200 px-6 py-2.5 text-sm font-semibold rounded-xl shadow-sm transition-all duration-200 group flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </ScrollLink>

          <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/[0.03] text-zinc-200 border-white/[0.12] hover:bg-white/[0.08] hover:text-white px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>Get In Touch</span>
            </Button>
          </ScrollLink>

          <a href="/resume">
            <Button
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto text-zinc-400 hover:text-white hover:bg-white/[0.05] px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Interactive CV</span>
            </Button>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 justify-center lg:justify-start items-center">
          <a
            href="https://www.linkedin.com/in/mohamed-mubeen-a-s-3b6a3a288"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/mxbn-mubeen"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:mohamedmubeen.dev@gmail.com"
            className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </HeroAnimation>
  );
};
