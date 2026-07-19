import { FileText } from "lucide-react";

import Card from "@/shared/components/ui/Card";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectOverview({
  project,
}: Props) {
  return (
    <section id="overview">

      <Card className="p-8">

        <div className="mb-10 flex items-center gap-4">

          <div className="rounded-2xl bg-blue-500/10 p-3">
            <FileText
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
              Project Overview
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              A high-level summary of the project.
            </p>

          </div>

        </div>

        <div
          className="
            border-l-4
            border-blue-500/70
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
            {project.overview}
          </p>
        </div>

      </Card>

    </section>
  );
}