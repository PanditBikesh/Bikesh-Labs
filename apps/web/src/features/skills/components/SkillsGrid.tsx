import { FadeIn } from "@/shared/animations";

import type { Skill } from "../types/skill";

import SkillCard from "./SkillCard";

type SkillsGridProps = {
  skills: Skill[];
};

export default function SkillsGrid({
  skills,
}: SkillsGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {skills.map((skill, index) => (
        <FadeIn
          key={skill.name}
          delay={index * 0.08}
        >
          <SkillCard {...skill} />
        </FadeIn>
      ))}
    </div>
  );
}