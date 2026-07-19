import { ArrowRight, FolderKanban } from "lucide-react";
import { Link } from "react-router-dom";

import Badge from "@/shared/components/ui/Badge";

import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="mt-12"
    >
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-lg">
        {/* Header */}

        <div className="mb-10 flex items-center gap-4">
          <div className="rounded-2xl bg-blue-500/10 p-3">
            <FolderKanban className="h-8 w-8 text-[var(--primary)]" />
          </div>

          <div>
            <h2
              id="projects-heading"
              className="text-3xl font-bold text-[var(--text)]"
            >
              Selected Projects
            </h2>

            <p className="mt-1 text-[var(--muted)]">
              A selection of Artificial Intelligence, Machine Learning, and
              software engineering projects demonstrating practical problem
              solving and end-to-end development.
            </p>
          </div>
        </div>

        {/* Projects */}

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--background)]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500
              "
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--text)]">
                    {project.title}
                  </h3>

                  <p className="mt-1 font-medium text-[var(--primary)]">
                    {project.category}
                  </p>
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    font-medium
                    text-[var(--primary)]
                    transition-colors
                    hover:text-blue-400
                  "
                >
                  View Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-5 leading-8 text-[var(--muted)]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 8).map((technology) => (
                  <Badge key={technology}>
                    {technology}
                  </Badge>
                ))}

                {project.technologies.length > 8 && (
                  <Badge>
                    +{project.technologies.length - 8} more
                  </Badge>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}