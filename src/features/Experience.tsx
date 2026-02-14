import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";

const ExperienceTimeline = ({ experience, index }: { experience: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Timeline connector */}
      {index !== 0 && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent -mt-12" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 z-10">
        <div className={`w-12 h-12 rounded-full border-4 border-[#0a0c10] bg-gradient-to-br flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'from-primary to-secondary scale-125 shadow-lg shadow-primary/50' : 'from-primary/50 to-secondary/50'
        }`}>
          <Briefcase className={`w-5 h-5 text-white transition-transform duration-500 ${
            isHovered ? 'rotate-12' : ''
          }`} />
        </div>
      </div>

      {/* Experience card */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative pt-8"
      >
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 blur-xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : ''
        }`} />

        <Card className="glass-card border-white/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group">
          {/* Animated corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
          
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {/* Logo placeholder - add your logo here */}
                  {experience.logo ? (
                    <img 
                      src={experience.logo} 
                      alt={`${experience.company} logo`}
                      className="w-12 h-12 rounded-lg object-contain bg-white/5 p-2 border border-white/10"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary-glow" />
                    </div>
                  )}
                  <div>
                    <CardTitle className="text-2xl md:text-3xl text-white group-hover:text-primary-glow transition-colors duration-300">
                      {experience.role}
                    </CardTitle>
                  </div>
                </div>
                
                <CardDescription className="text-lg text-primary-glow font-medium mb-3">
                  {experience.company}
                </CardDescription>
                
                <div className="flex flex-wrap gap-3 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
              
              <Badge 
                variant="secondary" 
                className="bg-primary/10 text-primary-glow border border-primary/30 hover:bg-primary/20 transition-colors self-start"
              >
                {experience.type}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent>
            <ul className="space-y-4">
              {experience.achievements.map((achievement: string, i: number) => (
                <li 
                  key={i} 
                  className="flex gap-3 items-start group/item"
                  style={{ 
                    animation: `fadeInLeft 0.5s ease-out ${i * 0.1}s both`,
                    opacity: isHovered ? 1 : 0.7
                  }}
                >
                  <ChevronRight className="w-5 h-5 text-primary-glow mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                  <span className="text-white/70 group-hover/item:text-white/90 transition-colors leading-relaxed">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            {experience.tech && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {experience.tech.map((tech: string, i: number) => (
                    <Badge 
                      key={i}
                      variant="outline"
                      className="bg-white/5 text-white/70 border-white/20 hover:border-primary/50 hover:text-white transition-all text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Nexobe",
      logo: "/public/nexobe.png", 
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
      logo: "/public/inmakes.png", 
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
        <div className="absolute bottom-1/3 right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
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
    </section>
  );
};