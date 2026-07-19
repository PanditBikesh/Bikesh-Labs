import {
  Award,
  Brain,
  Code2,
  FolderGit2,
} from "lucide-react";

import Card from "@/shared/components/ui/Card";

const stats = [
  {
    icon: FolderGit2,
    value: "10+",
    label: "Projects",
  },
  {
    icon: Code2,
    value: "25+",
    label: "Technologies",
  },
  {
    icon: Award,
    value: "6+",
    label: "Certificates",
  },
  {
    icon: Brain,
    value: "AI",
    label: "Focused",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.label}
            className="p-5"
          >
            <Icon className="mb-4 h-7 w-7 text-[var(--primary)]" />

            <h3 className="text-3xl font-bold text-[var(--text)]">
              {item.value}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {item.label}
            </p>
          </Card>
        );
      })}
    </div>
  );
}