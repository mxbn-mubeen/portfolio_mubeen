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
            className={`relative px-3 py-1.5 text-xs tracking-wide font-medium cursor-pointer transition-all duration-200 rounded-full ${activeSection === link.to
              ? 'text-white bg-white/10 shadow-sm'
              : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
              }`}
          >
            {link.name}
            {activeSection === link.to && (
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            )}
          </Link>
        ))}
        <a
          href="/resume"
          className="relative px-3 py-1.5 text-xs tracking-wide font-medium transition-all duration-200 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.05]"
        >
          Resume
        </a>
      </div>
      <SocialLinks className="hidden md:flex flex-shrink-0" />
    </>
  );
};
