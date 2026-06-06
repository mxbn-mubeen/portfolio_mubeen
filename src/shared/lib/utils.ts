import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const colorClasses: Record<string, {bg: string; bg20: string; text: string}> = {
  '#61DAFB': { bg: 'bg-[#61DAFB]', bg20: 'bg-[#61DAFB]/20', text: 'text-[#61DAFB]' },
  '#7C3AED': { bg: 'bg-[#7C3AED]', bg20: 'bg-[#7C3AED]/20', text: 'text-[#7C3AED]' },
  '#F59E0B': { bg: 'bg-[#F59E0B]', bg20: 'bg-[#F59E0B]/20', text: 'text-[#F59E0B]' },
  '#10B981': { bg: 'bg-[#10B981]', bg20: 'bg-[#10B981]/20', text: 'text-[#10B981]' },
  '#EA4335': { bg: 'bg-[#EA4335]', bg20: 'bg-[#EA4335]/20', text: 'text-[#EA4335]' },
  '#34A853': { bg: 'bg-[#34A853]', bg20: 'bg-[#34A853]/20', text: 'text-[#34A853]' },
  '#0A66C2': { bg: 'bg-[#0A66C2]', bg20: 'bg-[#0A66C2]/20', text: 'text-[#0A66C2]' },
  '#FFFFFF': { bg: 'bg-white', bg20: 'bg-white/20', text: 'text-white' },
};
