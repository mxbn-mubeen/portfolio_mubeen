import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <div className={`glass-nav ${scrolled ? 'w-[98%] max-w-6xl' : 'w-[95%] max-w-5xl'}`}>
        <div className="text-xl font-bold text-white tracking-tight">
          <span className="text-primary-glow">M</span>ubeen
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-white/70 hover:text-white cursor-pointer transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/mxbn-mubeen" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/mohamed-mubeen-a-s-3b6a3a288" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};
