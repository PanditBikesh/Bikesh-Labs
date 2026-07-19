import { Lightbulb } from "lucide-react";

import Card from "@/shared/components/ui/Card";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectSolution({
  project,
}: Props) {
  return (
    <section id="solution">

      <Card className="p-8">

        <div className="mb-10 flex items-center gap-4">

          <div className="rounded-2xl bg-emerald-500/10 p-3">
            <Lightbulb
              aria-hidden="true"
              className="h-6 w-6 text-emerald-500"
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
              Solution
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              How this project solves the identified problem.
            </p>

          </div>

        </div>

        <div
          className="
            border-l-4
            border-emerald-500/70
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
            {project.solution}
          </p>
        </div>

      </Card>

    </section>
  );
}