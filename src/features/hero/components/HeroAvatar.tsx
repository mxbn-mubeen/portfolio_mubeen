import { HeroAnimation } from "@/shared/components/HeroAnimation";
import { TypewriterText } from "./TypewriterText";

export const HeroAvatar = () => {
  return (
    <HeroAnimation>
      <div className="h-[350px] md:h-[500px] lg:h-[600px] w-full relative z-20 pointer-events-auto mt-16 md:mt-0">
        {/* Speech Bubble */}
        <div className="absolute -top-12 right-2 md:top-10 md:right-20 lg:right-32 z-30 max-w-[260px] md:max-w-xs bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-2xl rounded-tr-none shadow-xl transform animate-float">
          <div className="absolute -right-3 top-0 w-4 h-4 bg-white/10 backdrop-blur-md border-r border-t border-white/20 transform rotate-45" />
          <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
            <TypewriterText
              text="Hi there! 👋 I'm Mubeen. I build scalable SaaS apps and create exceptional user experiences. Let's build something amazing together!"
              delay={1000}
            />
            {/* Cursor blinks while typing, disappears when done */}
          </p>
        </div>

        {/* 3D Avatar Image with Tilt Effect */}
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-200 ease-out avatar-tilt-container"
        >
          <div
            className="relative w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 avatar-glass-ring"
          >
            <img
              src="/avatar.webp"
              alt="3D Avatar"
              className="w-full h-full object-cover rounded-full shadow-2xl avatar-img-translate"
            />
            {/* Glowing backdrop */}
            <div className="absolute inset-0 bg-primary/20 blur-[50px] -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </HeroAnimation>
  );
};
