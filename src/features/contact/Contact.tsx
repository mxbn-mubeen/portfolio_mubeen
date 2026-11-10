import { useState } from "react";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, MessageSquare, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Full-Time Role");

  const topics = ["Full-Time Role", "Freelance SaaS", "API & Architecture", "General Inquiry"];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mohamedmubeen.dev@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+971504695147");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-28 bg-[#09090b] relative overflow-hidden">
      {/* Subtle top divider line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />

      {/* Top Ambient Celestial Light Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-gradient-to-b from-emerald-500/12 via-teal-500/5 to-transparent blur-[140px] pointer-events-none" />

      {/* Floating Stardust Motes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-emerald-300 animate-pulse"
            style={{
              top: `${16 + ((i * 12) % 75)}%`,
              left: `${10 + ((i * 15) % 80)}%`,
              opacity: 0.2 + (i % 3) * 0.25,
              animationDuration: `${2.8 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <AnimatedSection variant="scale" duration={900}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 border border-emerald-400/30 mb-5 text-xs font-mono text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Available for Hire & Direct Dispatch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">Let's Connect</h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto">
              Based in Sharjah, UAE. Actively available for software engineering roles, high-impact contracts, and discussions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info (7 cols) */}
          <AnimatedSection variant="fade-left" className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/70 border border-white/[0.08] space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Direct Reach</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Feel free to reach out directly via email, phone, or LinkedIn. I typically reply within a few hours.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3">
                {/* Email */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-all duration-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-zinc-400">Email</p>
                      <a href="mailto:mohamedmubeen.dev@gmail.com" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                        mohamedmubeen.dev@gmail.com
                      </a>
                    </div>
                  </div>
                  <button onClick={handleCopyEmail} className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white transition-colors cursor-pointer" title="Copy email">
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-all duration-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-zinc-400">Phone & WhatsApp</p>
                      <a href="tel:+971504695147" className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors font-mono">
                        +971 50 469 5147
                      </a>
                    </div>
                  </div>
                  <button onClick={handleCopyPhone} className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white transition-colors cursor-pointer" title="Copy phone number">
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Profiles Row */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a href="https://www.linkedin.com/in/mohamed-mubeen-a-s-3b6a3a288" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 flex items-center justify-between group transition-all">
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold text-white">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a href="https://github.com/mxbn-mubeen" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 flex items-center justify-between group transition-all">
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-zinc-200" />
                    <span className="text-xs font-semibold text-white">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

              {/* Location & Visa Badge */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Sharjah, United Arab Emirates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">Visa:</span>
                  <span className="text-emerald-400 font-medium">Valid until 4 Jan 2027</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Quick Email Launcher Card (5 cols) */}
          <AnimatedSection variant="fade-right" className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/70 border border-white/[0.08] space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold">Fast Email Dispatch</span>
                <h3 className="text-lg font-bold text-white mt-1">Start a Conversation</h3>
                <p className="text-xs text-zinc-400 mt-1">Select an inquiry category to open your mail client with a structured subject line:</p>
              </div>

              {/* Topic Pills */}
              <div className="space-y-2">
                <label className="text-[11px] font-mono text-zinc-400">Inquiry Subject:</label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTopic(t)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                        selectedTopic === t ? "bg-blue-500/10 text-blue-400 border-blue-500/30 font-semibold" : "bg-white/[0.03] text-zinc-400 border-white/[0.06] hover:border-white/20"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={`mailto:mohamedmubeen.dev@gmail.com?subject=${encodeURIComponent(`[${selectedTopic}] Discussion with Mohamed Mubeen`)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-semibold text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-white/5"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Email Draft</span>
                </a>
              </div>

              {/* Guarantee */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Available for immediate interviews in UAE & online</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
