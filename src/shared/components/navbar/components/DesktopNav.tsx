import { Link } from "react-scroll";
import { navLinks } from "./constants";
import { SocialLinks } from "./SocialLinks";

interface DesktopNavProps {
  activeSection: string;
  onLinkClick: (section: string) => void;
}

export const DesktopNav = ({ activeSection, onLinkClick }: DesktopNavProps) => {
  return (
    <>
      <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            spy={true}
            offset={-100}
            onClick={() => onLinkClick(link.to)}
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
      <SocialLinks className="hidden md:flex flex-shrink-0" />
    </>
  );
};
