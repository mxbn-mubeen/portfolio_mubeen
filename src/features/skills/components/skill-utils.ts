import type React from "react";

export interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  level: string;
}

export const sanitize = (hex: string) => hex.replace('#', '').toLowerCase();
