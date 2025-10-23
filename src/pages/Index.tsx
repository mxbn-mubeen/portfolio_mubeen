import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HeroAnimation } from "@/components/HeroAnimation";
import { useStaggerAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useRef } from "react";
import { animate } from 'animejs';
import { FaReact, FaCss3Alt, FaHtml5, FaJava } from "react-icons/fa";
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

const Index = () => {
  const languagesRef = useStaggerAnimation({ delay: 80 });
  const frameworksRef = useStaggerAnimation({ delay: 80 });
  const toolsRef = useStaggerAnimation({ delay: 80 });
  const projectsRef = useStaggerAnimation({ delay: 150 });
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Continuous floating animation for hero content
    if (floatingRef.current) {
      animate(floatingRef.current, {
        y: [-10, 10],
        duration: 3000,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate',
      });
    }
  }, []);

  const skillCategories = [
    {
      category: "Languages",
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

  const projects = [
    {
      title: "Caviti AI",
      description: "Built type-safe TRPC APIs and responsive UIs with React.js & Chakra UI. Implemented PostgreSQL schema via Drizzle ORM for better scalability.",
      tech: ["React.js", "TRPC", "Chakra UI", "PostgreSQL", "Drizzle ORM"],
      impact: "Improved API stability by 30%",
      type: "company",
      showLink: false
    },
    {
      title: "AI Projects Suite",
      description: "Contributed to multiple AI-powered applications including Otteri.ai, Pickel.ai, Vipery.ai, Snap.photo, and GoodOff. Built reusable UI components and enhanced frontend functionality.",
      tech: ["React.js", "TypeScript", "API Integration", "Git"],
      impact: "Improved load time and user experience across projects",
      type: "company",
      showLink: false
    },
    {
      title: "Marine Debris Detection System",
      description: "College project: AI-powered system for detecting and tracking marine debris using computer vision and machine learning techniques to help protect ocean ecosystems.",
      tech: ["Python", "Machine Learning", "Computer Vision", "AI"],
      impact: "Environmental conservation through technology",
      type: "personal",
      link: "https://github.com/mxbn-mubeen/MARINE-DEBRIS-DETECTION-SYSTEM",
      showLink: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>
        
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
          <div className="max-w-6xl mx-auto space-y-16">
            {skillCategories.map((category, categoryIndex) => {
              const categoryRef = categoryIndex === 0 ? languagesRef : categoryIndex === 1 ? frameworksRef : toolsRef;
              return (
                <div key={categoryIndex} className="relative">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">
                      {category.category}
                    </h3>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </div>
                  <div ref={categoryRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <Card 
                        key={skillIndex} 
                        style={{ opacity: 1 }}
                        className="card-glass border-2 hover:scale-105 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CardContent className="flex flex-col items-center justify-center p-6 gap-4 relative z-10">
                          <div className="relative">
                            <skill.icon 
                              className="w-16 h-16 group-hover:scale-110 transition-transform" 
                              style={{ color: skill.color }}
                            />
                          </div>
                          <div className="text-center space-y-1">
                            <p className="font-semibold text-base">{skill.name}</p>
                            <Badge 
                              variant="secondary" 
                              className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              {skill.level}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
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
          <div className="space-y-6 max-w-4xl mx-auto">
            <AnimatedSection>
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
            
            <AnimatedSection>
              <Card className="card-glass border-2 border-primary/20">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-2xl mb-2">Java Full Stack Developer Intern</CardTitle>
                      <CardDescription className="text-lg">Inmakes Infotech</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">May 2024 - Jul 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span>Developed full stack web applications using Java, Spring Framework, and Hibernate ORM</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span>Built responsive front-end interfaces with HTML, CSS, JavaScript, Bootstrap, and jQuery</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span>Designed and implemented MySQL database schemas for efficient data management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
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
          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => {
              const CardWrapper = project.type === "personal" && project.link 
                ? ({ children, ...props }: any) => (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                      <Card {...props}>{children}</Card>
                    </a>
                  )
                : Card;
              
              return (
                <CardWrapper 
                  key={index}
                  style={{ opacity: 1 }}
                  className="card-glass border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.showLink && (
                        <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      )}
                    </div>
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
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
              Resume
            </h2>
          </AnimatedSection>
          <AnimatedSection className="max-w-2xl mx-auto">
            <Card className="card-glass border-2 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-lg text-center text-muted-foreground mb-8">
                  Download or view my resume to learn more about my experience and qualifications.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="default"
                    className="gap-2"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    <FileText className="w-5 h-5" />
                    View Resume
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="gap-2"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/resume.pdf';
                      link.download = 'Mohamed_Mubeen_Resume.pdf';
                      link.click();
                    }}
                  >
                    <Download className="w-5 h-5" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
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
