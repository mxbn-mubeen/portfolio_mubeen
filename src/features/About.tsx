import { Card, CardContent } from "@/shared/components/ui/card";
import { AnimatedSection } from "@/shared/components/AnimatedSection";

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0d0f14]">
      <div className="absolute top-1/2 left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
            About Me
          </h2>
          <Card className="glass-card p-4 border-white/10">
            <CardContent className="pt-6">
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Full Stack Developer with expertise in React.js, Next.js, and TypeScript. 
                Currently based in Dubai and available for immediate opportunities. 
                Proven track record of delivering scalable web solutions using modern technologies 
                like TRPC, Drizzle ORM, and PostgreSQL.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                I specialize in building performant, user-friendly applications with clean architecture 
                and modern design patterns. Experienced in optimizing database schemas, improving API 
                stability, and enhancing user experience across multiple projects.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};
