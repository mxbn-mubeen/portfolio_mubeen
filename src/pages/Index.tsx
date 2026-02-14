import { Navbar } from "@/shared/components/Navbar";
import { Footer } from "@/shared/components/Footer";
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
      <Footer />
    </div>
  );
};

export default Index;