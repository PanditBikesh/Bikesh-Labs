import { AlertTriangle } from "lucide-react";

import Card from "@/shared/components/ui/Card";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectChallenges({
  project,
}: Props) {
  return (
    <section id="challenges">

      <Card className="p-8">

        <div className="mb-10 flex items-center gap-4">

          <div className="rounded-2xl bg-amber-500/10 p-3">
            <AlertTriangle
              aria-hidden="true"
              className="h-6 w-6 text-amber-500"
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
              Technical Challenges
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Engineering problems encountered during development and how they were addressed.
            </p>

          </div>

        </div>

        <ol className="space-y-5">

          {project.challenges.map((challenge, index) => (
            <li
              key={challenge}
              className="
                flex
                gap-5
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--background)]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-amber-500/40
                hover:shadow-lg
              "
            >

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-amber-500/10
                  text-sm
                  font-bold
                  text-amber-500
                "
              >
                {index + 1}
              </div>

              <p className="text-base leading-8 text-[var(--muted)]">
                {challenge}
              </p>

            </li>
          ))}

        </ol>

      </Card>

    </section>
  );
}