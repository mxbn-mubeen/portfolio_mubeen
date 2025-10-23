import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2, Database, Layers, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HeroAnimation } from "@/components/HeroAnimation";
import { useStaggerAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useRef } from "react";
// @ts-ignore
import anime from 'animejs';

const Index = () => {
  const skillsRef = useStaggerAnimation({ delay: 80 });
  const projectsRef = useStaggerAnimation({ delay: 150 });
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Continuous floating animation for hero content
    if (floatingRef.current) {
      anime({
        targets: floatingRef.current,
        translateY: [-10, 10],
        duration: 3000,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate',
      });
    }
  }, []);

  const skills = [
    { name: "React.js", icon: Code2 },
    { name: "Next.js", icon: Layers },
    { name: "TypeScript", icon: Terminal },
    { name: "JavaScript", icon: Code2 },
    { name: "TRPC", icon: Database },
    { name: "Drizzle ORM", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "TanStack Query", icon: Code2 },
    { name: "Chakra UI", icon: Layers },
    { name: "SaaS UI", icon: Layers },
    { name: "HTML/CSS", icon: Code2 },
  ];

  const projects = [
    {
      title: "Caviti AI",
      description: "Built type-safe TRPC APIs and responsive UIs with React.js & Chakra UI. Implemented PostgreSQL schema via Drizzle ORM for better scalability.",
      tech: ["React.js", "TRPC", "Chakra UI", "PostgreSQL", "Drizzle ORM"],
      impact: "Improved API stability by 30%"
    },
    {
      title: "AI Projects Suite",
      description: "Contributed to multiple AI-powered applications including Otteri.ai, Pickel.ai, Vipery.ai, Snap.photo, and GoodOff. Built reusable UI components and enhanced frontend functionality.",
      tech: ["React.js", "TypeScript", "API Integration", "Git"],
      impact: "Improved load time and user experience across projects"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <HeroAnimation>
            <div ref={floatingRef}>
              <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6">
                Mohamed Mubeen A S
              </h1>
              <p className="hero-subtitle text-2xl md:text-3xl text-white/90 mb-8 font-light">
                Full Stack Developer
              </p>
            </div>
            
            <p className="hero-description text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Specialized in React.js, Next.js, and TypeScript. Building scalable web solutions 
              with modern technologies and clean architecture.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="hero-button bg-white text-primary hover:bg-white/90 shadow-xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="hero-button border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>

            <div className="flex gap-6 justify-center mt-12">
              <a href="https://linkedin.com/in/mohamed-mubeen" target="_blank" rel="noopener noreferrer" 
                 className="hero-social text-white/70 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="hero-social text-white/70 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:mxbn18@gmail.com"
                 className="hero-social text-white/70 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </HeroAnimation>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center">
              About Me
            </h2>
            <Card className="card-glass border-2">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Full Stack Developer with expertise in React.js, Next.js, and TypeScript. 
                  Currently based in Dubai and available for immediate opportunities. 
                  Proven track record of delivering scalable web solutions using modern technologies 
                  like TRPC, Drizzle ORM, and PostgreSQL.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in building performant, user-friendly applications with clean architecture 
                  and modern design patterns. Experienced in optimizing database schemas, improving API 
                  stability, and enhancing user experience across multiple projects.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
              Technical Skills
            </h2>
          </AnimatedSection>
          <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                style={{ opacity: 0 }}
                className="card-glass border-2 hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <skill.icon className="w-8 h-8 mb-3 text-primary group-hover:text-accent transition-colors" />
                  <p className="font-semibold text-center">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
              Experience
            </h2>
          </AnimatedSection>
          <AnimatedSection className="max-w-4xl mx-auto">
            <Card className="card-glass border-2 border-primary/20">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-2xl mb-2">Full Stack Developer</CardTitle>
                    <CardDescription className="text-lg">Nexobe</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-sm">Sep 2024 - Sep 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>Built and deployed interactive dashboards using Chakra UI and SaaS UI, improving internal workflow efficiency</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>Integrated TanStack Query and TRPC to enhance data performance and backend communication</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>Optimized PostgreSQL schema with Drizzle ORM, reducing redundant queries and improving data integrity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
              Featured Projects
            </h2>
          </AnimatedSection>
          <div ref={projectsRef} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                style={{ opacity: 0 }}
                className="card-glass border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
              >
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 group-hover:text-primary transition-colors">
                    {project.title}
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold mb-2 text-primary">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm font-semibold text-accent">Impact: {project.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
              Get In Touch
            </h2>
          </AnimatedSection>
          <AnimatedSection className="max-w-3xl mx-auto">
            <Card className="card-glass border-2 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-lg text-center text-muted-foreground mb-8">
                  Currently based in Dubai and available for immediate opportunities. 
                  Let's discuss how I can contribute to your team!
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <a 
                    href="mailto:mxbn18@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-muted/50 transition-all group"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">mxbn18@gmail.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+971523819286"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-muted/50 transition-all group"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-sm text-muted-foreground">+971 52 381 9286</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-border">
                    <div className="p-3 rounded-full bg-accent/10">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-muted-foreground">Dubai, UAE</p>
                    </div>
                  </div>
                  
                  <a 
                    href="https://linkedin.com/in/mohamed-mubeen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-muted/50 transition-all group"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Connect with me</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Mohamed Mubeen A S. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
