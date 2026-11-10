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
      <div className="p-6 rounded-2xl bg-zinc-950/70 border border-white/[0.08] hover:border-white/20 h-full transition-all duration-300 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Certifications & Accreditations</h3>
              <p className="text-xs text-zinc-400 font-mono">Verified Credentials</p>
            </div>
          </div>

          <div className="space-y-3">
            {/* Featured Premier Credential: Azure AI-103 – MICROSOFT */}
            <Azure
              {...azureLinkProps}
              className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-sky-400/5 border border-sky-400/30 hover:border-sky-400/60 hover:bg-sky-400/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0 animate-pulse" />
                <div className="min-w-0">
                  <p className="text-white/95 text-xs sm:text-sm font-semibold group-hover:text-sky-300 transition-colors">
                    Microsoft Certified: Azure AI Apps and Agents Developer Associate
                    <Badge variant="outline" className="ml-2 px-1.5 py-0 text-[10px] border-sky-400/40 text-sky-400 bg-sky-400/10">
                      AI-103
                    </Badge>
                  </p>
                  <p className="text-zinc-400 text-[11px] font-mono mt-0.5">Microsoft · Oct 2026 – Oct 2027</p>
                </div>
              </div>
              {AZURE_AI_103_URL && (
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-sky-400 flex-shrink-0 transition-colors" />
              )}
            </Azure>

            {/* Other Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {/* Microsoft AI Skills Fest 2026 */}
              <a
                href="https://www.credly.com/badges/3fd5b49c-3c26-4882-bef6-9bbff953485a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-xs font-medium group-hover:text-white transition-colors truncate">
                      AI Skills Fest 2026
                    </p>
                    <p className="text-zinc-400 text-[11px]">Microsoft · Credly</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white flex-shrink-0 transition-colors" />
              </a>

              {/* Cloud Core Badge – IBM */}
              <a
                href="https://www.credly.com/badges/6c346395-028f-4b57-8f7e-878e3db5caba/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-xs font-medium group-hover:text-white transition-colors truncate">
                      Cloud Core Badge
                    </p>
                    <p className="text-zinc-400 text-[11px]">IBM · Credly</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white flex-shrink-0 transition-colors" />
              </a>

              {/* Data Science – GUVI */}
              <a
                href="https://www.guvi.in/verify-certificate?id=U46ax3103M6e8635W9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-xs font-medium group-hover:text-white transition-colors truncate">
                      Data Science
                    </p>
                    <p className="text-zinc-400 text-[11px]">GUVI</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white flex-shrink-0 transition-colors" />
              </a>

              {/* Introduction to Cloud – IBM / TNSDC */}
              <a
                href="https://courses.tnsdc.skillsnetwork.site/certificates/cbdbd74df85f47bebf1186b6a72a523d"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-xs font-medium group-hover:text-white transition-colors truncate">
                      Introduction to Cloud
                    </p>
                    <p className="text-zinc-400 text-[11px]">IBM · TNSDC</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white flex-shrink-0 transition-colors" />
              </a>

              {/* JavaScript – GUVI */}
              <a
                href="https://www.guvi.in/verify-certificate?id=ID3Ns5652G1M39b005&course=javascript_en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-xs font-medium group-hover:text-white transition-colors truncate">
                      JavaScript
                    </p>
                    <p className="text-zinc-400 text-[11px]">GUVI</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white flex-shrink-0 transition-colors" />
              </a>

              {/* Data-Driven Insights – Udemy */}
              <a
                href="https://www.udemy.com/certificate/UC-aa4ee1a9-dddb-4009-b54f-5d39e157ff44/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/90 text-xs font-medium group-hover:text-white transition-colors truncate">
                      Olympic Insights
                    </p>
                    <p className="text-zinc-400 text-[11px]">Udemy · Internshala</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white flex-shrink-0 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
