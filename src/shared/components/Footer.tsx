import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050608] border-t border-white/10">
      {/* Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-3">
              <span className="text-primary-glow">M</span>ubeen
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Full Stack Developer crafting exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://github.com/mxbn-mubeen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-mubeen-a-s-3b6a3a288"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:mxbn18@gmail.com"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-white/60 hover:text-white text-sm cursor-pointer transition-colors inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:mxbn18@gmail.com"
                  className="text-white/60 hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start"
                >
                  <Mail size={16} className="text-primary-glow" />
                  <span>mxbn18@gmail.com</span>
                </a>
              </li>
              <li className="text-white/60 flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-4 h-4 text-primary-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Sharjah, UAE</span>
              </li>
              <li className="text-white/60 flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-4 h-4 text-primary-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Available Immediately</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mohamed Mubeen A S. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            <span>using React & TypeScript</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer"
          >
            <span className="text-sm">Back to Top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
