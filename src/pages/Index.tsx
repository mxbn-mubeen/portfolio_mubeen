import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/shared/components/navbar/Navbar";
import { Footer } from "@/shared/components/Footer";
import { Hero, About, Skills, Experience, Projects, Contact } from "@/features";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [hash]);

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