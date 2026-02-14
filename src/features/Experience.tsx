import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { AnimatedSection } from "@/shared/components/AnimatedSection";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0a0c10]">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
            Experience
          </h2>
        </AnimatedSection>
        <div className="space-y-6 max-w-4xl mx-auto">
          <AnimatedSection>
            <Card className="glass-card border-none p-6">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-2xl mb-2 text-white">Full Stack Developer</CardTitle>
                    <CardDescription className="text-lg text-primary-glow">Nexobe</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20 border-white/10">Sep 2024 - Sep 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/70">
                  <li className="flex gap-3">
                    <span className="text-primary-glow mt-1">▹</span>
                    <span>Built and deployed interactive dashboards using Chakra UI and SaaS UI, improving internal workflow efficiency</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-glow mt-1">▹</span>
                    <span>Integrated TanStack Query and TRPC to enhance data performance and backend communication</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-glow mt-1">▹</span>
                    <span>Optimized PostgreSQL schema with Drizzle ORM, reducing redundant queries and improving data integrity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection>
            <Card className="glass-card border-none p-6">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-2xl mb-2 text-white">Java Full Stack Developer Intern</CardTitle>
                    <CardDescription className="text-lg text-primary-glow">Inmakes Infotech</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20 border-white/10">May 2024 - Jul 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/70">
                  <li className="flex gap-3">
                    <span className="text-primary-glow mt-1">▹</span>
                    <span>Developed full stack web applications using Java, Spring Framework, and Hibernate ORM</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-glow mt-1">▹</span>
                    <span>Built responsive front-end interfaces with HTML, CSS, JavaScript, Bootstrap, and jQuery</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-glow mt-1">▹</span>
                    <span>Designed and implemented MySQL database schemas for efficient data management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
