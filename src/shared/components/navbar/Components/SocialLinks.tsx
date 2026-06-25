import { Github, Linkedin, Mail } from "lucide-react";

interface SocialLinksProps {
  iconSize?: number;
  className?: string;
}

export const SocialLinks = ({ iconSize = 18, className = "" }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href="https://github.com/mxbn-mubeen"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a
        href="https://www.linkedin.com/in/mohamed-mubeen-a-s-3b6a3a288"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a
        href="mailto:mohamedmubeen.dev@gmail.com"
        className="p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
        aria-label="Email"
      >
        <Mail size={iconSize} />
      </a>
    </div>
  );
};
