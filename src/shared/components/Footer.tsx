import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Link } from "react-scroll";
import { BrandLogo } from "@/shared/components/BrandLogo";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#09090b] border-t border-white/[0.08]">
      <div className="container mx-auto px-4 py-12 relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="mb-3 inline-block">
              <BrandLogo size="md" showWordmark={false} />
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
              Full Stack Software Engineer building mission-critical web applications with React, Next.js, and TypeScript.
            </p>
            <div className="flex gap-2.5 justify-center md:justify-start">
              <a
                href="https://github.com/mxbn-mubeen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-mubeen-a-s-3b6a3a288"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:mohamedmubeen.dev@gmail.com"
                className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white text-xs font-mono uppercase tracking-wider mb-4 font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-zinc-400 hover:text-white text-xs sm:text-sm cursor-pointer transition-colors inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-white text-xs font-mono uppercase tracking-wider mb-4 font-semibold">Location & Status</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <a
                  href="mailto:mohamedmubeen.dev@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start"
                >
                  <Mail size={14} className="text-blue-400" />
                  <span>mohamedmubeen.dev@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Sharjah, UAE • Immediate Start</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>© {new Date().getFullYear()} Mohamed Mubeen A S. Crafted with React, Vite & Tailwind CSS.</p>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-200 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
