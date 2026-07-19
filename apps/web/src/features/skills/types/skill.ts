export type SkillLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Expert";

export interface Skill {
  name: string;

  category: string;

  level: SkillLevel;

  percentage: number;

  description: string;

  icon?: string;

  years?: string;

  featured?: boolean;
}