import Badge from "@/shared/components/ui/Badge";
import Card from "@/shared/components/ui/Card";

import type { Skill } from "../types/skill";

import SkillProgress from "./SkillProgress";

export default function SkillCard({
  name,
  category,
  level,
  percentage,
  description,
  years,
  featured,
}: Skill) {
  return (
    <Card className="flex h-full flex-col p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-[var(--text)]">
            {name}
          </h3>

          <p className="mt-1 text-sm text-[var(--muted)]">
            {category}
          </p>
        </div>

        {featured && <Badge>Featured</Badge>}
      </div>

      <p className="flex-1 leading-7 text-[var(--muted)]">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Badge>{level}</Badge>

        {years && <Badge>{years}</Badge>}
      </div>

      <div className="mt-8">
        <SkillProgress percentage={percentage} />
      </div>
    </Card>
  );
}