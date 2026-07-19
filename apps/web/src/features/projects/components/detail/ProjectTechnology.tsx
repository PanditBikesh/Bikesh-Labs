import { Blocks } from "lucide-react";

import Card from "@/shared/components/ui/Card";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectTechnology({
  project,
}: Props) {
  return (
    <section id="technologies">

      <Card className="p-8">

        <div className="mb-10 flex items-center gap-4">

          <div className="rounded-2xl bg-blue-500/10 p-3">
            <Blocks
              aria-hidden="true"
              className="h-6 w-6 text-[var(--primary)]"
            />
          </div>

          <div>

            <h2
              className="
                text-2xl
                font-bold
                text-[var(--text)]
                md:text-3xl
              "
            >
              Technologies Used
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Programming languages, frameworks, libraries, and tools used to build this project.
            </p>

          </div>

        </div>

        <div className="flex flex-wrap gap-5">

          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-5
                py-2
                text-sm
                font-semibold
                text-[var(--primary)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/40
                hover:bg-blue-500/20
              "
            >
              {technology}
            </span>
          ))}

        </div>

      </Card>

    </section>
  );
}