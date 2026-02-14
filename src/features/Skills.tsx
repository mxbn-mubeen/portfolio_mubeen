
import { Card } from "@/shared/components/ui/card";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Code2, Layers, Wrench } from "lucide-react";
import { FaReact, FaHtml5, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, SiJavascript, SiReactquery, SiChakraui, SiSpring, SiBootstrap, SiHibernate, SiJquery, SiTrpc, SiDrizzle } from "react-icons/si";
import { BiData } from "react-icons/bi";

const SaasUIIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="100" rx="20" fill="currentColor" opacity="0.1"/>
    <path
      d="M30 35C30 32.2386 32.2386 30 35 30H45C47.7614 30 50 32.2386 50 35V45C50 47.7614 47.7614 50 45 50H35C32.2386 50 30 47.7614 30 45V35Z"
      fill="currentColor"
    />
    <path
      d="M55 35C55 32.2386 57.2386 30 60 30H65C67.7614 30 70 32.2386 70 35V45C70 47.7614 67.7614 50 65 50H60C57.2386 50 55 47.7614 55 45V35Z"
      fill="currentColor"
    />
    <path
      d="M30 60C30 57.2386 32.2386 55 35 55H45C47.7614 55 50 57.2386 50 60V65C50 67.7614 47.7614 70 45 70H35C32.2386 70 30 67.7614 30 65V60Z"
      fill="currentColor"
    />
    <circle cx="62.5" cy="62.5" r="7.5" fill="currentColor"/>
  </svg>
);

export const Skills = () => {
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
        { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: "Advanced" },
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

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0a0c10]">
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
            Technical Arsenal
          </h2>
        </AnimatedSection>
        <div className="max-w-6xl mx-auto space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <category.icon className="w-8 h-8 text-primary-glow" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {category.category}
                  </h3>
                  <p className="text-white/50 text-sm md:text-base">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <Card 
                    key={skillIndex} 
                    className="glass-card p-6 flex flex-col items-center justify-center gap-4 group hover:border-primary/50"
                  >
                    <div className="relative p-3 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                      <skill.icon 
                        className="w-10 h-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <p className="font-semibold text-white tracking-wide text-center">{skill.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
