import { useState } from "react";

export const SaasUIIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
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

export interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  level: string;
}

export const sanitize = (hex: string) => hex.replace('#', '').toLowerCase();

export const SkillOrb = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const sizes = ['w-24 h-24', 'w-28 h-28', 'w-32 h-32', 'w-20 h-20'];
  const size = sizes[index % sizes.length];
  const colorClass = `skill-${sanitize(skill.color)}`;

  return (
    <div
      className={`${size} relative cursor-pointer group orb orb-anim-${index} ${colorClass} ${isHovered ? 'orb-hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 rounded-full transition-all duration-500 pointer-events-none glow`} />

      <div className="absolute inset-0 rounded-full border-2 transition-all duration-500 backdrop-blur-sm flex items-center justify-center orb-main">
        <skill.icon className={`transition-all duration-500 ${isHovered ? 'w-12 h-12' : 'w-8 h-8'} orb-icon`} />
      </div>

      <div className={`absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 pointer-events-none z-50 tooltip ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <div className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white backdrop-blur-md border tooltip-inner">
          {skill.name}
          <div className="text-[10px] opacity-70 mt-0.5">{skill.level}</div>
        </div>
      </div>

      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`absolute w-1 h-1 rounded-full pointer-events-none particle particle-${i}`} />
          ))}
        </>
      )}
    </div>
  );
};
