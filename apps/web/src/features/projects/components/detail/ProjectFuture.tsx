import { Rocket } from "lucide-react";

import Card from "@/shared/components/ui/Card";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectFuture({
  project,
}: Props) {
  if (!project.future.length) {
    return null;
  }

  return (
    <section id="future">

      <Card className="p-8">

        <div className="mb-8 flex items-center gap-4">

          <div className="rounded-2xl bg-sky-500/10 p-3">
            <Rocket
              aria-hidden="true"
              className="h-6 w-6 text-sky-500"
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
              Future Improvements
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Planned enhancements and future roadmap for this project.
            </p>

          </div>

        </div>

        <ol className="grid gap-5 md:grid-cols-2">

          {project.future.map((item, index) => (
            <li
              key={item}
              className="
                flex
                gap-4
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--background)]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-sky-500/40
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
                  bg-sky-500/10
                  text-sm
                  font-bold
                  text-sky-500
                "
              >
                {index + 1}
              </div>

              <p className="text-base leading-8 text-[var(--muted)]">
                {item}
              </p>

            </li>
          ))}

        </ol>

      </Card>

    </section>
  );
}