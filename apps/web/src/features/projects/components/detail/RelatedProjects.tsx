import { Link } from "react-router-dom";

import { projects } from "../../data";
import type { Project } from "../../types/project";

type Props = {
  currentProject: Project;
};

export default function RelatedProjects({
  currentProject,
}: Props) {
  const relatedProjects = projects
    .filter(
      (project) =>
        project.slug !== currentProject.slug &&
        project.category === currentProject.category
    )
    .slice(0, 3);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <section
      className="
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-8
      "
    >
      <h2 className="mb-8 text-3xl font-bold text-[var(--text)]">
        Related Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {relatedProjects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="
              group
              overflow-hidden
              rounded-2xl
              border
              border-[var(--border)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[var(--primary)]
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="
                aspect-video
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            <div className="p-5">
              <p className="text-sm text-[var(--primary)]">
                {project.category}
              </p>

              <h3 className="mt-2 text-lg font-bold text-[var(--text)]">
                {project.title}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}