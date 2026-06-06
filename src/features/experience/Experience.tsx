import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";

import { ExperienceTimeline } from "./components/ExperienceTimeline";


export const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Nexobe",
      logo: "/Nexobe.png", 
      location: "Illinois, United States",
      period: "September 2024 – Present",
      type: "Full-time",
      achievements: [
        "Designed and developed end-to-end web applications using React.js, Next.js, and Java-based backend services",
        "Built type-safe TRPC and REST APIs, reducing API errors and improving stability by 30%",
        "Optimized PostgreSQL schemas using Drizzle ORM, reducing redundant queries and improving scalability",
        "Improved application performance through frontend rendering optimizations and backend refactoring",
        "Developed reusable UI components adopted across multiple SaaS products, saving 20% development time",
        "Collaborated with cross-functional teams in Agile sprints to deliver features ahead of deadlines"
      ],
      tech: ["React.js", "Next.js", "TypeScript", "TRPC", "PostgreSQL", "Drizzle ORM", "Java", "Chakra UI"]
    },
    {
      role: "Java Full Stack Developer Intern",
      company: "Inmakes Infotech",
      logo: "/inmakes.png", 
      location: "Chennai, India",
      period: "May 2024 – July 2024",
      type: "Internship",
      achievements: [
        "Developed full stack web applications using Java, Spring Framework, and Hibernate ORM",
        "Built responsive front-end interfaces with HTML, CSS, JavaScript, Bootstrap, and jQuery",
        "Designed and implemented MySQL database schemas for efficient data management",
        "Collaborated with team members to deliver project milestones on schedule"
      ],
      tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap", "jQuery"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0a0c10]">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/3 right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1s" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection variant="scale" duration={900}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Briefcase className="w-4 h-4 text-primary-glow" />
              <span className="text-sm text-white/70">Professional Journey</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Work Experience
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Building impactful solutions across diverse tech stacks
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-16 max-w-5xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />
          
          {experiences.map((experience, index) => (
            <AnimatedSection 
              key={index}
              variant="slide-left"
              delay={index * 200}
              duration={900}
            >
              <ExperienceTimeline experience={experience} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </div>
      <style>{`
        .delay-1s {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};
