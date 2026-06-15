import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";

import { ExperienceTimeline } from "./components/ExperienceTimeline";


export const Experience = () => {
  const experiences = [
    {
      role: "Freelance Full Stack Developer",
      company: "Clin solution L.L.C",
      location: "United States (Remote)",
      period: "November 2025 – Present",
      type: "Freelance",
      achievements: [
        "Built AeroReporting, an end-to-end Adverse Event Reporting System using React, TypeScript, Node.js, PostgreSQL, and Supabase, enabling E2B-compliant XML and PDF report generation for pharmacovigilance workflows",
        "Integrated Azure AI Translation API to power multilingual safety reporting, reducing manual localisation effort for international regulatory submissions",
        "Implemented WHODrug dictionary integration, standardising pharmaceutical terminology across the reporting pipeline and improving data accuracy for regulatory teams",
        "Delivered production-ready features across 3+ release cycles in direct collaboration with stakeholders, maintaining a fully responsive, accessible UI"
      ],
      tech: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Azure AI", "REST API", "XML/PDF"]
    },
    {
      role: "Full Stack Developer",
      company: "Nexobe",
      logo: "/Nexobe.png",
      location: "Illinois, United States",
      period: "September 2024 – September 2025",
      type: "Full-time",
      achievements: [
        "Developed and deployed interactive dashboards using Chakra UI and SaaS UI, boosting workflow efficiency by 40%",
        "Integrated TanStack Query and TRPC, reducing API response times by 30% and enhancing backend communication",
        "Optimized PostgreSQL schema with Drizzle ORM, cutting redundant queries by 25% and improving data integrity",
        "Partnered with cross-functional teams to deliver scalable SaaS features, ensuring seamless frontend-backend integration"
      ],
      tech: ["React.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "TanStack Query", "tRPC", "Chakra UI", "SaaS UI"]
    },
    {
      role: "Jr. Java Full Stack Developer Intern",
      company: "Inmakes Infotech",
      logo: "/inmakes.png",
      location: "Kerala, India",
      period: "May 2024 – July 2024",
      type: "Internship",
      achievements: [
        "Developed full-stack modules using Java and React, enhancing system performance and user experience",
        "Contributed to building REST APIs, optimizing data flow and ensuring backend consistency",
        "Acquired practical experience with agile workflows and collaborative development methodologies"
      ],
      tech: ["Java", "React.js", "REST API", "Spring Boot", "MySQL", "Hibernate", "Agile"]
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
