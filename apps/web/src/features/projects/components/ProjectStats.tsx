import {
  Brain,
  Briefcase,
  Cpu,
  Sparkles,
} from "lucide-react";

import Card from "@/shared/components/ui/Card";

import { projects } from "../data";

export default function ProjectStats() {
  const totalProjects = projects.length;

  const featuredProjects = projects.filter(
    (project) => project.featured
  ).length;

  const aiProjects = projects.filter((project) =>
    project.category.includes("Artificial Intelligence")
  ).length;

  const mlProjects = projects.filter((project) =>
    project.category.includes("Machine Learning")
  ).length;

  const NplProjects = projects.filter((project) =>
    project.category.includes("Natural Language Processing")
  ).length;

  const stats = [
    {
      title: "Total Projects",
      value: totalProjects,
      icon: Briefcase,
    },
    {
      title: "Featured",
      value: featuredProjects,
      icon: Sparkles,
    },
    {
      title: "AI Projects",
      value: aiProjects,
      icon: Brain,
    },
    {
      title: "ML Projects",
      value: mlProjects,
      icon: Cpu,
    },
    {
      title: "NPL Projects",
      value: NplProjects,
      icon: Cpu,
    },
  ];

  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.title}
            className="
              rounded-3xl
              border
              border-[var(--border)]
              p-8
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[var(--primary)]
            "
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
              <Icon className="h-7 w-7 text-[var(--primary)]" />
            </div>

            <h3 className="text-4xl font-extrabold text-[var(--text)]">
              {stat.value}
            </h3>

            <p className="mt-2 text-[var(--muted)]">
              {stat.title}
            </p>
          </Card>
        );
      })}
    </div>
  );
}