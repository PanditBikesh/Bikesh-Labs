import { CheckCircle2 } from "lucide-react";

import Card from "@/shared/components/ui/Card";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectFeatureList({
  project,
}: Props) {
  return (
    <section id="features">

      <Card className="p-8">

        <div className="mb-10 flex items-center gap-4">

          <div className="rounded-2xl bg-emerald-500/10 p-3">
            <CheckCircle2
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
              Key Features
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              The main capabilities and functionality of this project.
            </p>

          </div>

        </div>

        <ul className="grid gap-5 md:grid-cols-2">

          {project.features.map((feature) => (
            <li
              key={feature}
              className="
                flex
                items-start
                gap-4
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--background)]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--primary)]
                hover:shadow-lg
              "
            >
              <CheckCircle2
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-emerald-500"
              />

              <p className="text-base leading-7 text-[var(--muted)]">
                {feature}
              </p>

            </li>
          ))}

        </ul>

      </Card>

    </section>
  );
}