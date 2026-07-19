import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { projects } from "../../data";
import type { Project } from "../../types/project";

type Props = {
  currentProject: Project;
};

export default function ProjectNavigation({
  currentProject,
}: Props) {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentProject.slug
  );

  const previousProject =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : null;

  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <section className="mt-16">

      <div className="grid gap-6 md:grid-cols-2">

        {previousProject ? (
          <Link
            to={`/projects/${previousProject.slug}`}
            className="
              group
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--surface)]
              p-6
              transition-all
              duration-300
              hover:border-[var(--primary)]
              hover:-translate-y-1
            "
          >
            <div className="mb-4 flex items-center gap-2 text-[var(--primary)]">
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium">
                Previous Project
              </span>
            </div>

            <h3 className="text-xl font-bold text-[var(--text)]">
              {previousProject.title}
            </h3>

            <p className="mt-2 text-[var(--muted)]">
              {previousProject.category}
            </p>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="
              group
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--surface)]
              p-6
              text-right
              transition-all
              duration-300
              hover:border-[var(--primary)]
              hover:-translate-y-1
            "
          >
            <div className="mb-4 flex items-center justify-end gap-2 text-[var(--primary)]">
              <span className="text-sm font-medium">
                Next Project
              </span>

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>

            <h3 className="text-xl font-bold text-[var(--text)]">
              {nextProject.title}
            </h3>

            <p className="mt-2 text-[var(--muted)]">
              {nextProject.category}
            </p>
          </Link>
        ) : (
          <div />
        )}

      </div>

    </section>
  );
}