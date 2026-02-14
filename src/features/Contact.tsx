import { Card, CardContent } from "@/shared/components/ui/card";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0c10] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
            Get In Touch
          </h2>
        </AnimatedSection>
        <AnimatedSection className="max-w-3xl mx-auto">
          <Card className="glass-card border-none p-8">
            <CardContent className="pt-6">
              <p className="text-lg text-center text-white/70 mb-12 max-w-2xl mx-auto">
                Currently based in Dubai and available for immediate opportunities. 
                Let's discuss how I can contribute to your team!
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <a 
                  href="mailto:mxbn18@gmail.com"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group"
                >
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors text-primary-glow">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-sm text-white/60">mxbn18@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+971523819286"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group"
                >
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors text-primary-glow">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-sm text-white/60">+971 52 381 9286</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="p-4 rounded-full bg-accent/10 text-accent">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-sm text-white/60">Sharjah, UAE</p>
                  </div>
                </div>
                
                <a 
                  href="https://www.linkedin.com/in/mohamed-mubeen-a-s-3b6a3a288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group"
                >
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors text-primary-glow">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <p className="text-sm text-white/60">Connect with me</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};
