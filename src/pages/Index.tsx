import { Navbar } from "@/shared/components/Navbar";
import { Hero } from "@/features/Hero";
import { About } from "@/features/About";
import { Skills } from "@/features/Skills";
import { Experience } from "@/features/Experience";
import { Projects } from "@/features/Projects";
import { Contact } from "@/features/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-[#050608]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/40 text-sm">
            © 2025 Mohamed Mubeen A S. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
