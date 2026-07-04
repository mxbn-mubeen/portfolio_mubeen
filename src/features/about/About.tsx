import { Card, CardContent } from "@/shared/components/ui/card";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { MapPin, Code, Rocket, Target, Zap, Award, Download, ExternalLink } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";

import { StatCard } from "./components/StatCard";
import { HighlightCard } from "./components/HighlightCard";
import { Certifications } from "./components/Certifications";

export const About = () => {
  const stats = [
    { icon: Code, value: "2+", label: "Years Experience" },
    { icon: Rocket, value: "Multiple", label: "SaaS Projects" },
    { icon: Zap, value: "30%", label: "API Stability Boost" },
    { icon: Target, value: "20%", label: "Dev Time Saved" },
  ];

  const highlights = [
    {
      icon: Rocket,
      title: "Modern Full Stack Expertise",
      description: "Specialized in React.js, Next.js, TypeScript, TRPC, and Java Spring Boot for building scalable, type-safe applications with PostgreSQL.",
      color: "#61DAFB"
    },
    {
      icon: Code,
      title: "API Development Excellence",
      description: "Built type-safe TRPC and REST APIs that reduced errors by 30% and improved application stability across multiple SaaS products.",
      color: "#7C3AED"
    },
    {
      icon: Zap,
      title: "Database Optimization",
      description: "Expert in optimizing PostgreSQL schemas using Drizzle ORM, reducing redundant queries and significantly improving scalability.",
      color: "#F59E0B"
    },
    {
      icon: Award,
      title: "Component Architecture",
      description: "Developed reusable UI components adopted across multiple products, saving 20% development time and ensuring consistency.",
      color: "#10B981"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0d0f14]">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse anim-delay-1s" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[80px] animate-pulse anim-delay-2s" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <MapPin className="w-4 h-4 text-primary-glow" />
              <span className="text-sm text-white/70">Based in Sharjah, UAE • Available Immediately</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              About Me
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Full Stack Developer crafting scalable SaaS solutions
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Stats Grid */}
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </AnimatedSection>

          {/* Main Introduction */}
          <AnimatedSection>
            <Card className="glass-card border-white/10 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-white/80 leading-relaxed mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-primary-glow first-letter:mr-3 first-letter:float-left">
                    Full Stack Developer with hands-on experience designing and delivering scalable SaaS applications
                    using React.js, Next.js, Java, TRPC, and PostgreSQL. Strong background in building responsive frontends,
                    developing secure backend APIs, and optimizing database performance.
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed mb-6">
                    Proven ability to improve application efficiency, reduce latency, and deliver end-to-end solutions
                    in Agile environments. I specialize in creating type-safe applications with modern architecture patterns,
                    ensuring code quality, maintainability, and exceptional user experiences.
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects,
                    and staying up-to-date with the latest trends in web development and software engineering.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Highlights Grid */}
          <AnimatedSection>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">What I Bring to the Table</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <HighlightCard key={index} {...highlight} />
              ))}
            </div>
          </AnimatedSection>

          {/* Education & Certifications – Stacked Layout */}
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {/* Education row 1 */}
            <AnimatedSection className="min-w-0">
              <div className="glass-card border-white/10 p-6 md:p-8 overflow-hidden group hover:border-primary/30 active:border-primary/30 active:bg-white/[0.12] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="p-3 rounded-xl bg-primary/20 border border-primary/30 flex-shrink-0 group-hover:bg-primary/30 group-hover:scale-105 group-active:bg-primary/30 group-active:scale-105 transition-all duration-300">
                    <Award className="w-6 h-6 text-primary-glow" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-glow group-active:text-primary-glow transition-colors duration-300">Education</h3>
                    <p className="text-white/80 font-medium break-words">B.E. in Computer Science and Engineering</p>
                    <p className="text-white/60 text-sm break-words mt-1">Aalim Muhammed Salegh College of Engineering</p>
                    <p className="text-white/50 text-sm mt-1">Affiliated with Anna University</p>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-primary-glow">2020 – 2024</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            {/* Certifications row 2 */}
            <AnimatedSection className="min-w-0">
              <Certifications />
            </AnimatedSection>
          </div>

          {/* Personal Info & Resume */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Languages & Availability */}
              <div className="glass-card border-white/10 p-8">
                <h3 className="text-xl font-bold text-white mb-6">Personal Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/50 text-sm mb-1">Languages</p>
                    <p className="text-white/80">English, Tamil</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Nationality</p>
                    <p className="text-white/80">Indian</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Visa Status</p>
                    <p className="text-white/80">Visit Visa (Valid until Feb 2026)</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Availability</p>
                    <p className="text-primary-glow font-medium">Immediate</p>
                  </div>
                </div>
              </div>

              {/* Download Resume */}
              <div className="glass-card border-white/10 p-8 flex flex-col justify-center items-center text-center">
                <Download className="w-12 h-12 text-primary-glow mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Download Resume</h3>
                <p className="text-white/60 text-sm mb-6">
                  Get a detailed overview of my experience, skills, and education
                </p>
                <a
                  href="/Mubeen_resume.pdf"
                  download
                  className="px-6 py-3 rounded-xl bg-primary/20 border border-primary/50 text-white font-medium hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection>
            <div className="glass-card border-white/10 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-white/60 mb-6 max-w-2xl mx-auto">
                Currently seeking Full Stack Developer opportunities in the UAE.
                Ready to contribute to innovative projects and drive business growth.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-primary/20 border border-primary/50 text-white font-medium hover:bg-primary/30 hover:shadow-lg hover:shadow-shadow-primary/20 transition-all duration-300"
                >
                  Get In Touch
                </a>
                <a
                  href="#experience"
                  className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  View Experience
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
