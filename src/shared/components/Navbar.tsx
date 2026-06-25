import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only update active section if not currently scrolling from a click
      if (!isScrollingRef.current) {
        const sections = ["hero", "about", "skills", "experience", "projects", "contact"];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedScroll, { passive: true });
    return () => window.removeEventListener("scroll", optimizedScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const handleLinkClick = (section: string) => {
    // Prevent multiple clicks during scroll
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;
    setActiveSection(section);
    setMobileMenuOpen(false);

    // Reset after scroll completes (matches 500ms scroll duration)
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 550);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'
        }`}>
        <div className="container mx-auto px-4">
          <div className={`glass-nav transition-all duration-300 ${scrolled ? 'py-3 shadow-lg shadow-primary/10' : 'py-4'
            }`}>
            {/* Logo */}
            <div
              onClick={() => {
                if (!isScrollingRef.current) {
                  handleLinkClick("hero");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-xl md:text-2xl font-bold text-white tracking-tight cursor-pointer group flex-shrink-0"
            >
              <span className="text-primary-glow group-hover:text-primary transition-colors">M</span>
              <span className="group-hover:text-primary-glow transition-colors">ubeen</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-100}
                  onClick={() => handleLinkClick(link.to)}
                  className={`relative px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-200 rounded-lg ${activeSection === link.to
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.name}
                  {activeSection === link.to && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary-glow rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <a
                href="https://github.com/mxbn-mubeen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-mubeen-a-s-3b6a3a288"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:mohamedmubeen.dev@gmail.com"
                className="p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className={`absolute top-20 left-4 right-4 glass-card border-white/10 p-6 transition-transform duration-300 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}>
          <div className="flex flex-col gap-2 mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                onClick={() => handleLinkClick(link.to)}
                className={`px-4 py-3 text-base font-medium cursor-pointer transition-all duration-200 rounded-lg ${activeSection === link.to
                    ? 'text-white bg-white/10 border border-primary/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6">
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/mxbn-mubeen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5 border border-white/10"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-mubeen-a-s-3b6a3a288"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5 border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mohamedmubeen.dev@gmail.com"
                className="p-3 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5 border border-white/10"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};