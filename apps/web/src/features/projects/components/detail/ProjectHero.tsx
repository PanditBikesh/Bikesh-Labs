import {
  Calendar,
  ExternalLink,
  GitBranch,
} from "lucide-react";

import Button from "@/shared/components/ui/Button";
import Card from "@/shared/components/ui/Card";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectHero({
  project,
}: Props) {
  return (
    <section id="hero">

      <Card className="overflow-hidden p-0">

        <img
          src={project.image}
          alt={project.title}
          loading="eager"
          decoding="async"
          className="
            h-72
            w-full
            object-cover
            md:h-96
            lg:h-[420px]
          "
        />

        <div className="space-y-10 p-8">

          <div className="flex flex-wrap items-center gap-3">

            <span
              className="
                rounded-full
                bg-blue-500/10
                px-4
                py-1.5
                text-sm
                font-semibold
                text-[var(--primary)]
              "
            >
              {project.category}
            </span>

            <span
              className="
                rounded-full
                bg-emerald-500/10
                px-4
                py-1.5
                text-sm
                font-semibold
                text-emerald-500
              "
            >
              {project.status}
            </span>

            <span
              className="
                flex
                items-center
                gap-2
                text-sm
                text-[var(--muted)]
              "
            >
              <Calendar className="h-4 w-4" />
              {project.year}
            </span>

          </div>

          <div>

            <h1
              className="
                text-4xl
                font-extrabold
                text-[var(--text)]
                md:text-5xl
                xl:text-6xl
              "
            >
              {project.title}
            </h1>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-[var(--muted)]
              "
            >
              {project.description}
            </p>

          </div>

          <div className="flex flex-wrap gap-4">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code on GitHub"
              >
                <Button>
                  <GitBranch className="h-5 w-5" />
                  Source Code
                </Button>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open live demo"
              >
                <Button variant="outline">
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </Button>
              </a>
            )}

          </div>

        </div>

      </Card>

    </section>
  );
}