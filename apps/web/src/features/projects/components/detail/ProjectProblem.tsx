import { TriangleAlert } from "lucide-react";

import Card from "@/shared/components/ui/Card";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectProblem({
  project,
}: Props) {
  return (
    <section id="problem">

      <Card className="p-8">

        <div className="mb-10 flex items-center gap-4">

          <div className="rounded-2xl bg-red-500/10 p-3">
            <TriangleAlert
              aria-hidden="true"
              className="h-6 w-6 text-red-500"
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
              Problem Statement
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              The real-world challenge this project was designed to solve.
            </p>

          </div>

        </div>

        <div
          className="
            border-l-4
            border-red-500/70
            pl-7
          "
        >
          <p
            className="
              text-base
              leading-8
              text-[var(--muted)]
              md:text-lg
            "
          >
            {project.problem}
          </p>
        </div>

      </Card>

    </section>
  );
}