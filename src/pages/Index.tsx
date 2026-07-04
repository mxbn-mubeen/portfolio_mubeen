import { Navbar } from "@/shared/Components/navbar/Navbar";
import { Footer } from "@/shared/Components/Footer";
import { Hero, About, Skills, Experience, Projects, Contact } from "@/features";

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