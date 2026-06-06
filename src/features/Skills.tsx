/* eslint-disable */
import { Card } from "@/shared/components/ui/card";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Code2, Layers, Wrench, Sparkles } from "lucide-react";
import { FaReact, FaHtml5, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, SiJavascript, SiReactquery, SiChakraui, SiSpring, SiBootstrap, SiHibernate, SiJquery, SiTrpc, SiDrizzle } from "react-icons/si";
import { BiData } from "react-icons/bi";
import { useState } from "react";

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

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  level: string;
}

const SkillOrb = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizes = ['w-24 h-24', 'w-28 h-28', 'w-32 h-32', 'w-20 h-20'];
  const size = sizes[index % sizes.length];
  
  return (
    <div
      className={`${size} relative cursor-pointer group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `float ${3 + (index * 0.5)}s ease-in-out infinite`,
        animationDelay: `${index * 0.2}s`,
        zIndex: isHovered ? 50 : 10
      }}
    >
      {/* Outer glow ring */}
      <div 
        className={`absolute inset-0 rounded-full transition-all duration-500 pointer-events-none ${
          isHovered ? 'scale-125 opacity-60' : 'scale-100 opacity-0'
        }`}
        style={{ 
          background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`,
          filter: 'blur(20px)'
        }}
      />
      
      {/* Main orb */}
      <div 
        className="absolute inset-0 rounded-full border-2 transition-all duration-500 backdrop-blur-sm flex items-center justify-center"
        style={{
          borderColor: isHovered ? skill.color : 'rgba(255,255,255,0.1)',
          backgroundColor: isHovered ? `${skill.color}15` : 'rgba(255,255,255,0.05)',
          boxShadow: isHovered ? `0 0 40px ${skill.color}50` : 'none'
        }}
      >
        <skill.icon 
          className={`transition-all duration-500 ${
            isHovered ? 'w-12 h-12' : 'w-8 h-8'
          }`}
          style={{ color: skill.color }}
        />
      </div>
      
      {/* Skill name tooltip */}
      <div 
        className={`absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 pointer-events-none z-50 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <div className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white backdrop-blur-md border"
          style={{ 
            backgroundColor: `${skill.color}20`,
            borderColor: `${skill.color}40`
          }}
        >
          {skill.name}
          <div className="text-[10px] opacity-70 mt-0.5">{skill.level}</div>
        </div>
      </div>
      
      {/* Particle effects */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full pointer-events-none"
              style={{
                backgroundColor: skill.color,
                top: '50%',
                left: '50%',
                animation: `particle-${i} 1s ease-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

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
                  className={`group px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    activeCategory === index
                      ? 'bg-white/10 border border-primary/50 shadow-lg shadow-primary/20'
                      : 'bg-white/5 border border-white/10 hover:border-white/20'
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-colors ${
                    activeCategory === index ? 'text-primary-glow' : 'text-white/50 group-hover:text-white/70'
                  }`} />
                  <span className={`font-medium transition-colors ${
                    activeCategory === index ? 'text-white' : 'text-white/50 group-hover:text-white/70'
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
              <div className="relative min-h-[600px] flex items-center justify-center py-16">
                {/* Central core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/20 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl flex items-center justify-center z-20">
                  <CategoryIcon className="w-12 h-12 text-primary-glow" />
                </div>
                
                {/* Orbiting skills */}
                <div className="relative w-full h-[600px]">
                  {activeSkills.skills.map((skill, index) => {
                    const angle = (index * 360) / activeSkills.skills.length;
                    const radius = 200; // Increased from 180
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    
                    return (
                      <div
                        key={index}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        <SkillOrb skill={skill} index={index} />
                      </div>
                    );
                  })}
                </div>
                
                {/* Orbital rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/5 animate-spin pointer-events-none anim-duration-30000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 animate-spin pointer-events-none anim-duration-40000 anim-direction-reverse" />
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