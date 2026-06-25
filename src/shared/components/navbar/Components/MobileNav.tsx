import { Link } from "react-scroll";
import { navLinks } from "./constants";
import { SocialLinks } from "./SocialLinks";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onLinkClick: (section: string) => void;
}

export const MobileNav = ({ isOpen, onClose, activeSection, onLinkClick }: MobileNavProps) => {
  return (
    <div
      className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Content */}
      <div
        className={`absolute top-20 left-4 right-4 glass-card border-white/10 p-6 transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
      >
        <div className="flex flex-col gap-2 mb-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              onClick={() => onLinkClick(link.to)}
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
          <SocialLinks iconSize={20} className="justify-center gap-4" />
        </div>
      </div>
    </div>
  );
};
