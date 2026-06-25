import { Card, CardContent } from "@/shared/components/ui/card";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from "lucide-react";

import { ContactCard } from "./components/ContactCard";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0c10] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse anim-delay-1s" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[80px] animate-pulse anim-delay-2s" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection variant="scale" duration={900}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <MessageCircle className="w-4 h-4 text-primary-glow" />
              <span className="text-sm text-white/70">Let's Connect</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Get In Touch
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Currently based in Sharjah, UAE and available for immediate opportunities
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fade-up" delay={200}>
            <Card className="glass-card border-white/10 overflow-hidden mb-12">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-center text-white/70 mb-4 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <p className="text-center text-white/60 text-sm">
                  I'll try my best to get back to you as soon as possible.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <AnimatedSection variant="fade-left" delay={300} duration={700}>
              <ContactCard
                icon={Mail}
                title="Email"
                info="mohamedmubeen.dev@gmail.com"
                href="mailto:mohamedmubeen.dev@gmail.com"
                color="#EA4335"
              />
            </AnimatedSection>

            <AnimatedSection variant="fade-right" delay={300} duration={700}>
              <ContactCard
                icon={Phone}
                title="Phone"
                info="+971 52 381 9286"
                href="tel:+971523819286"
                color="#34A853"
              />
            </AnimatedSection>

            <AnimatedSection variant="fade-left" delay={450} duration={700}>
              <ContactCard
                icon={Linkedin}
                title="LinkedIn"
                info="Connect with me"
                href="https://www.linkedin.com/in/mohamed-mubeen-a-s-3b6a3a288"
                color="#0A66C2"
              />
            </AnimatedSection>

            <AnimatedSection variant="fade-right" delay={450} duration={700}>
              <ContactCard
                icon={Github}
                title="GitHub"
                info="@mxbn-mubeen"
                href="https://github.com/mxbn-mubeen"
                color="#FFFFFF"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fade-up" delay={600} duration={800}>
            <div className="grid md:grid-cols-3 gap-6">
              <ContactCard
                icon={MapPin}
                title="Location"
                info="Sharjah, UAE"
                color="#F59E0B"
              />

              <div className="glass-card border-white/10 p-6 rounded-2xl">
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-1">Availability</p>
                  <p className="text-white font-semibold text-lg">Immediate</p>
                </div>
              </div>

              <div className="glass-card border-white/10 p-6 rounded-2xl">
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-1">Visa Status</p>
                  <p className="text-white font-semibold text-lg">Valid until Feb 2026</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Final CTA */}
          <AnimatedSection variant="scale" delay={750} duration={800}>
            <div className="glass-card border-white/10 p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-white/60 mb-6 max-w-xl mx-auto">
                Let's discuss how I can help bring your project to life with modern web technologies
              </p>
              <a
                href="mailto:mohamedmubeen.dev@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary/20 border border-primary/50 text-white font-semibold hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span>Send Me an Email</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
