import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";

export interface ExperienceItem {
  role: string;
  company: string;
  logo?: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
  tech?: string[];
}

export const ExperienceTimeline = ({ experience, index }: { experience: ExperienceItem; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Timeline connector */}
      {index !== 0 && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent -mt-12" />
      )}

      {/* Timeline dot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 z-10">
        <div className={`w-12 h-12 rounded-full border-4 border-[#0a0c10] bg-gradient-to-br flex items-center justify-center transition-all duration-500 ${isHovered ? 'from-primary to-secondary scale-125 shadow-lg shadow-primary/50' : 'from-primary/50 to-secondary/50'
          }`}>
          <Briefcase className={`w-5 h-5 text-white transition-transform duration-500 ${isHovered ? 'rotate-12' : ''
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
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''
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
                  className={`flex gap-3 items-start group/item opacity-70 group-hover:opacity-100 transition-opacity duration-300 timeline-item-${i}`}
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
        .timeline-item-0 { animation: fadeInLeft 0.5s ease-out 0s both; }
        .timeline-item-1 { animation: fadeInLeft 0.5s ease-out 0.1s both; }
        .timeline-item-2 { animation: fadeInLeft 0.5s ease-out 0.2s both; }
        .timeline-item-3 { animation: fadeInLeft 0.5s ease-out 0.3s both; }
        .timeline-item-4 { animation: fadeInLeft 0.5s ease-out 0.4s both; }
        .timeline-item-5 { animation: fadeInLeft 0.5s ease-out 0.5s both; }
        .timeline-item-6 { animation: fadeInLeft 0.5s ease-out 0.6s both; }
      `}</style>
    </div>
  );
};
