import { Network } from "lucide-react";

import Card from "@/shared/components/ui/Card";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectArchitecture({
  project,
}: Props) {
  if (!project.architecture) {
    return null;
  }

  return (
    <section id="architecture">

      <Card className="p-8">

        <div className="mb-10 flex items-center gap-4">

          <div className="rounded-2xl bg-violet-500/10 p-3">
            <Network
              aria-hidden="true"
              className="h-6 w-6 text-violet-500"
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
              Architecture
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              High-level design and workflow of the system.
            </p>

          </div>

        </div>

        <div
          className="
            border-l-4
            border-violet-500/70
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
            {project.architecture}
          </p>
        </div>

        {project.architectureBlocks && (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {project.architectureBlocks.map((block) => (
              <div
                key={block.title}
                className="
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-500/40
                "
              >
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  {block.title}
                </h3>

                <p className="mt-2 leading-7 text-[var(--muted)]">
                  {block.description}
                </p>

              </div>
            ))}

          </div>
        )}

      </Card>

    </section>
  );
}