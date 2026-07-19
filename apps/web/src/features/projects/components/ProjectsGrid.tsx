import { FadeIn } from "@/shared/animations";

import type { Project } from "../types/project";

import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectsGrid({
  projects,
}: Props) {
  if (projects.length === 0) {
    return (
      <div
        className="
          mt-20
          rounded-3xl
          border
          border-dashed
          border-[var(--border)]
          bg-[var(--surface)]
          px-8
          py-20
          text-center
        "
      >
        <h3 className="text-3xl font-bold text-[var(--text)]">
          No Projects Found
        </h3>

        <p className="mx-auto mt-4 max-w-xl leading-8 text-[var(--muted)]">
          No projects match your current search or selected category.
          Try another keyword or choose a different category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid auto-rows-fr gap-8 lg:grid-cols-2">
      {projects.map((project, index) => (
        <FadeIn
          key={project.slug}
          delay={index * 0.08}
        >
          <ProjectCard {...project} />
        </FadeIn>
      ))}
    </div>
  );
}