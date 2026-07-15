import { Card } from "@/shared/components/ui/card";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Code2, Layers, Wrench, Sparkles } from "lucide-react";
import { FaReact, FaHtml5, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, SiJavascript, SiReactquery, SiChakraui, SiSpring, SiBootstrap, SiHibernate, SiJquery, SiTrpc, SiDrizzle } from "react-icons/si";
import { BiData } from "react-icons/bi";
import { useState } from "react";

import { SaasUIIcon, SkillOrb } from "./components/SkillOrb";
import type { Skill } from "./components/skill-utils";
import { sanitize } from "./components/skill-utils";


export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      category: "Languages",
      icon: Code2,
      description: "Core programming languages",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "Expert" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "Expert" },
        { name: "Java", icon: FaJava, color: "#007396", level: "Advanced" },
        { name: "HTML/CSS", icon: FaHtml5, color: "#E34F26", level: "Expert" },
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: Layers,
      description: "Frontend & backend frameworks",
      skills: [
        { name: "React.js", icon: FaReact, color: "#61DAFB", level: "Expert" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", level: "Advanced" },
        { name: "Spring", icon: SiSpring, color: "#6DB33F", level: "Advanced" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: "Expert" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", level: "Advanced" },
        { name: "Chakra UI", icon: SiChakraui, color: "#319795", level: "Advanced" },
        { name: "SaaS UI", icon: SaasUIIcon, color: "#7C3AED", level: "Advanced" },
      ]
    },
    {
      category: "Tools & Technologies",
      icon: Wrench,
      description: "Development tools & databases",
      skills: [
        { name: "tRPC", icon: SiTrpc, color: "#2596BE", level: "Advanced" },
        { name: "Drizzle ORM", icon: SiDrizzle, color: "#C5F74F", level: "Advanced" },
        { name: "Hibernate", icon: SiHibernate, color: "#59666C", level: "Intermediate" },
        { name: "TanStack Query", icon: SiReactquery, color: "#FF4154", level: "Advanced" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: "Advanced" },
        { name: "MySQL", icon: BiData, color: "#4479A1", level: "Advanced" },
        { name: "jQuery", icon: SiJquery, color: "#0769AD", level: "Intermediate" },
      ]
    }
  ];

  const activeSkills = skillCategories[activeCategory];
  const CategoryIcon = activeSkills.icon;

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(5px); }
        }
        
        ${[...Array(6)].map((_, i) => `
          @keyframes particle-${i} {
            0% {
              transform: translate(-50%, -50%) translate(0, 0);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) translate(
                ${Math.cos((i * 60 * Math.PI) / 180) * 50}px,
                ${Math.sin((i * 60 * Math.PI) / 180) * 50}px
              );
              opacity: 0;
            }
          }
        `).join('\n')}

        /* Dynamically generated per-orb position and animation rules */
        ${(() => {
          const rules: string[] = [];
          const skills = activeSkills.skills;
          skills.forEach((_, index) => {
            const angle = (index * 360) / skills.length;
            const xMobile = Math.cos((angle * Math.PI) / 180) * 130;
            const yMobile = Math.sin((angle * Math.PI) / 180) * 130;
            const xDesktop = Math.cos((angle * Math.PI) / 180) * 200;
            const yDesktop = Math.sin((angle * Math.PI) / 180) * 200;
            const animDur = 3 + index * 0.5;
            const animDelay = index * 0.2;
            rules.push(`
              .orb-pos-${index} { transform: translate(calc(-50% + ${xMobile}px), calc(-50% + ${yMobile}px)); }
              @media (min-width: 768px) {
                .orb-pos-${index} { transform: translate(calc(-50% + ${xDesktop}px), calc(-50% + ${yDesktop}px)); }
              }
            `);
            rules.push(`.orb-anim-${index} { animation: float ${animDur}s ease-in-out infinite; animation-delay: ${animDelay}s; }`);
          });
          return rules.join('\n');
        })()}

        /* Per-skill color classes */
        ${(() => {
          const uniqueColors = Array.from(new Set(activeSkills.skills.map(s => s.color)));
          return uniqueColors.map(c => {
            const id = c.replace('#', '').toLowerCase();
            return `
              .skill-${id} { --skill: ${c}; }
              .skill-${id} .glow { background: radial-gradient(circle, var(--skill)40 0%, transparent 70%); filter: blur(20px); }
              .skill-${id} .orb-main { border-color: rgba(255,255,255,0.1); background-color: rgba(255,255,255,0.05); }
              .skill-${id}.orb-hover .orb-main { border-color: var(--skill); background-color: ${c}15; box-shadow: 0 0 40px ${c}50; }
              .skill-${id} .orb-icon { color: ${c}; }
              .skill-${id}.orb-hover .orb-icon { color: var(--skill); }
              .skill-${id} .tooltip-inner { background-color: ${c}20; border-color: ${c}40; }
              .skill-${id} .particle { background-color: ${c}; }
            `;
          }).join('\n');
        })()}
      `}</style>

      <section id="skills" className="py-24 relative overflow-hidden bg-[#0a0c10]">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse anim-delay-1s" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[80px] animate-pulse anim-delay-2s" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <Sparkles className="w-4 h-4 text-primary-glow" />
                <span className="text-sm text-white/70">Tech Stack Constellation</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent">
                Skills Universe
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Explore my technical galaxy — hover over each skill orb
              </p>
            </div>
          </AnimatedSection>

          {/* Category Tabs */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`group px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${activeCategory === index
                    ? 'bg-white/10 border border-primary/50 shadow-lg shadow-primary/20'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                    }`}
                >
                  <Icon className={`w-5 h-5 transition-colors ${activeCategory === index ? 'text-primary-glow' : 'text-white/50 group-hover:text-white/70'
                    }`} />
                  <span className={`font-medium transition-colors ${activeCategory === index ? 'text-white' : 'text-white/50 group-hover:text-white/70'
                    }`}>
                    {category.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Skill Orbs Container */}
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="relative min-h-[400px] md:min-h-[600px] flex items-center justify-center py-16">
                {/* Central core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl flex items-center justify-center z-20">
                  <CategoryIcon className="w-10 h-10 md:w-12 md:h-12 text-primary-glow" />
                </div>

                {/* Orbiting skills */}
                <div className="relative w-full h-[350px] md:h-[600px]">
                  {activeSkills.skills.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className={`absolute top-1/2 left-1/2 orb-pos-${index}`}
                      >
                        <SkillOrb skill={skill} index={index} />
                      </div>
                    );
                  })}
                </div>

                {/* Orbital rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full border border-white/5 animate-spin pointer-events-none anim-duration-30000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-full border border-white/5 animate-spin pointer-events-none anim-duration-40000 anim-direction-reverse" />
              </div>
            </AnimatedSection>

            {/* Category Description */}
            <div className="text-center mt-8">
              <p className="text-white/60 text-sm max-w-xl mx-auto">
                {activeSkills.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
