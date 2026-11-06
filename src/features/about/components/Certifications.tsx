import { Award, ExternalLink } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { AnimatedSection } from "@/shared/components/AnimatedSection";

// Microsoft Learn verification link for the AI-103 credential.
const AZURE_AI_103_URL = "https://learn.microsoft.com/api/credentials/share/en-us/MohamedMubeenAS-6291/CF6991BC4159A25D?sharingId";

export const Certifications = () => {
  const Azure = AZURE_AI_103_URL ? "a" : "div";
  const azureLinkProps = AZURE_AI_103_URL
    ? { href: AZURE_AI_103_URL, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <AnimatedSection className="min-w-0 h-full">
      <div className="glass-card border-white/10 p-6 md:p-8 h-full overflow-hidden group hover:border-primary/30 active:border-primary/30 active:bg-white/[0.12] transition-all duration-300">
        <div className="flex items-start gap-4 min-w-0">
          <div className="p-3 rounded-xl bg-primary/20 border border-primary/30 flex-shrink-0 group-hover:bg-primary/30 group-hover:scale-105 group-active:bg-primary/30 group-active:scale-105 transition-all duration-300">
            <Award className="w-6 h-6 text-primary-glow" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-white mb-6 group-hover:text-primary-glow group-active:text-primary-glow transition-colors duration-300">Certifications</h3>
            <div className="space-y-3">
              {/* Azure AI Apps and Agents Developer Associate (AI-103) – MICROSOFT */}
              <Azure
                {...azureLinkProps}
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-sky-400/5 border border-sky-400/30 hover:border-sky-400/60 hover:bg-sky-400/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-sm font-medium group-hover:text-white transition-colors">
                      Microsoft Certified: Azure AI Apps and Agents Developer Associate{" "}
                      <Badge variant="outline" className="ml-1.5 px-1.5 py-0 text-[10px] border-sky-400/40 text-sky-400 bg-sky-400/10">AI-103</Badge>
                    </p>
                    <p className="text-white/40 text-xs">Microsoft · Oct 2026 – Oct 2027</p>
                  </div>
                </div>
                {AZURE_AI_103_URL && (
                  <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-sky-400 flex-shrink-0 transition-colors" />
                )}
              </Azure>

              {/* Data Science – GUVI */}
              <a
                href="https://www.guvi.in/verify-certificate?id=U46ax3103M6e8635W9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-primary-glow flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-sm font-medium group-hover:text-white transition-colors truncate">Data Science</p>
                    <p className="text-white/40 text-xs">GUVI</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-primary-glow flex-shrink-0 transition-colors" />
              </a>

              {/* Introduction to Cloud – IBM / TNSDC */}
              <a
                href="https://courses.tnsdc.skillsnetwork.site/certificates/cbdbd74df85f47bebf1186b6a72a523d"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-primary-glow flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-sm font-medium group-hover:text-white transition-colors truncate">Introduction to Cloud</p>
                    <p className="text-white/40 text-xs">IBM · TNSDC</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-primary-glow flex-shrink-0 transition-colors" />
              </a>

              {/* Cloud Core – IBM / TNSDC */}
              <a
                href="https://courses.tnsdc.skillsnetwork.site/certificates/247cc08c48a9400ca6be670318631c7c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-primary-glow flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-sm font-medium group-hover:text-white transition-colors truncate">Cloud Core</p>
                    <p className="text-white/40 text-xs">IBM · TNSDC</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-primary-glow flex-shrink-0 transition-colors" />
              </a>

              {/* Cloud Core Credly Badge – IBM */}
              <a
                href="https://www.credly.com/badges/6c346395-028f-4b57-8f7e-878e3db5caba/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-400/40 hover:bg-yellow-400/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-sm font-medium group-hover:text-white transition-colors truncate">Cloud Core <Badge variant="outline" className="ml-1.5 px-1.5 py-0 text-[10px] border-yellow-400/40 text-yellow-400 bg-yellow-400/10">Badge</Badge></p>
                    <p className="text-white/40 text-xs">IBM · Credly</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-yellow-400 flex-shrink-0 transition-colors" />
              </a>

              {/* AI Skills Fest 2026 – MICROSOFT */}
              <a
                href="https://www.credly.com/badges/3fd5b49c-3c26-4882-bef6-9bbff953485a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-400/40 hover:bg-yellow-400/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-sm font-medium group-hover:text-white transition-colors truncate"> AI Skills Fest 2026 <Badge variant="outline" className="ml-1.5 px-1.5 py-0 text-[10px] border-yellow-400/40 text-yellow-400 bg-yellow-400/10">Badge</Badge></p>
                    <p className="text-white/40 text-xs">MICROSOFT · Credly</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-yellow-400 flex-shrink-0 transition-colors" />
              </a>

              {/* JavaScript – GUVI */}
              <a
                href="https://www.guvi.in/verify-certificate?id=ID3Ns5652G1M39b005&course=javascript_en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-primary-glow flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-sm font-medium group-hover:text-white transition-colors truncate">JavaScript</p>
                    <p className="text-white/40 text-xs">GUVI</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-primary-glow flex-shrink-0 transition-colors" />
              </a>

              {/* Udemy */}
              <a
                href="https://www.udemy.com/certificate/UC-aa4ee1a9-dddb-4009-b54f-5d39e157ff44/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-primary-glow flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-sm font-medium group-hover:text-white transition-colors truncate">Data-Driven Insights: Olympic Sports</p>
                    <p className="text-white/40 text-xs">Udemy · Internshala</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-primary-glow flex-shrink-0 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
