import { Briefcase } from "lucide-react";

import { experiences } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mt-12"
    >
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-lg">

        {/* Header */}

        <div className="mb-10 flex items-center gap-4">

          <div className="rounded-2xl bg-blue-500/10 p-3">
            <Briefcase className="h-8 w-8 text-[var(--primary)]" />
          </div>

          <div>

            <h2
              id="experience-heading"
              className="text-3xl font-bold text-[var(--text)]"
            >
              Experience
            </h2>

            <p className="mt-1 text-[var(--muted)]">
              Practical software development experience gained through personal
              projects, continuous learning, and hands-on implementation.
            </p>

          </div>

        </div>

        {/* Timeline */}

        <div className="space-y-10">

          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="relative border-l-2 border-blue-500 pl-8"
            >

              <span
                className="
                  absolute
                  -left-[11px]
                  top-2
                  h-5
                  w-5
                  rounded-full
                  border-4
                  border-[var(--surface)]
                  bg-blue-500
                "
              />

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                <div>

                  <h3 className="text-2xl font-semibold text-[var(--text)]">
                    {experience.role}
                  </h3>

                  <p className="mt-1 font-medium text-[var(--primary)]">
                    {experience.company}
                  </p>

                </div>

                <span
                  className="
                    shrink-0
                    rounded-full
                    bg-blue-500/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-[var(--primary)]
                  "
                >
                  {experience.duration}
                </span>

              </div>

              <p className="mt-5 leading-8 text-[var(--muted)]">
                {experience.description}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}