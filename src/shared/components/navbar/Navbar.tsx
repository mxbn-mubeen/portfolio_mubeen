import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { NavbarLogo } from "./components/NavbarLogo";
import { DesktopNav } from "./components/DesktopNav";
import { MobileNav } from "./components/MobileNav";

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
    handleScroll();
    return () => window.removeEventListener("scroll", optimizedScroll);
  }, []);

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

  const handleLogoClick = () => {
    if (!isScrollingRef.current) {
      handleLinkClick("hero");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="w-full max-w-4xl">
          <div className={`glass-nav px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'py-2.5 shadow-2xl shadow-black/80 border-white/[0.12] bg-[#09090b]/90' : 'py-3 bg-[#09090b]/70 border-white/[0.08]'
          }`}>

            <NavbarLogo onClick={handleLogoClick} />

            <DesktopNav activeSection={activeSection} onLinkClick={handleLinkClick} />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onLinkClick={handleLinkClick}
      />
    </>
  );
};