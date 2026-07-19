import { GraduationCap } from "lucide-react";

import { education } from "../data/education";

export default function EducationSection() {
  return (
    <section
      className="mt-12"
      aria-labelledby="education-heading"
    >
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-lg">
        {/* Header */}

        <div className="mb-10 flex items-center gap-4">
          <div className="rounded-2xl bg-blue-500/10 p-3">
            <GraduationCap
              className="h-8 w-8 text-[var(--primary)]"
              aria-hidden="true"
            />
          </div>

          <div>
            <h2
              id="education-heading"
              className="text-3xl font-bold text-[var(--text)]"
            >
              Education
            </h2>

            <p className="mt-1 text-[var(--muted)]">
              My academic journey and technical foundation.
            </p>
          </div>
        </div>

        {/* Timeline */}

        <div className="space-y-10">
          {education.map((item) => (
            <article
              key={`${item.degree}-${item.institution}`}
              className="relative border-l-2 border-blue-500 pl-8"
            >
              <span
                aria-hidden="true"
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

              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--text)]">
                    {item.degree}
                  </h3>

                  <p className="mt-1 font-medium text-[var(--primary)]">
                    {item.institution}
                  </p>
                </div>

                <span
                  className="
                    rounded-full
                    bg-blue-500/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-[var(--primary)]
                  "
                >
                  {item.duration}
                </span>
              </div>

              <p className="mt-5 leading-8 text-[var(--muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}