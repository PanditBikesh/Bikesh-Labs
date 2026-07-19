import { Cpu } from "lucide-react";

import Badge from "@/shared/components/ui/Badge";

import { resumeSkills } from "../data/skills";

export default function SkillsSummary() {
  return (
    <section
      aria-labelledby="technical-skills-heading"
      className="mt-12"
    >
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-lg">
        {/* Header */}

        <div className="mb-10 flex items-center gap-4">
          <div className="rounded-2xl bg-blue-500/10 p-3">
            <Cpu
              aria-hidden="true"
              className="h-8 w-8 text-[var(--primary)]"
            />
          </div>

          <div>
            <h2
              id="technical-skills-heading"
              className="text-3xl font-bold text-[var(--text)]"
            >
              Technical Skills
            </h2>

            <p className="mt-1 text-[var(--muted)]">
              Programming languages, frameworks, AI/ML libraries, databases,
              development tools, and technologies used to build intelligent,
              scalable, and modern software applications.
            </p>
          </div>
        </div>

        {/* Skills */}

        <div className="grid gap-8 lg:grid-cols-2">
          {resumeSkills.map((group) => (
            <article
              key={group.category}
              className="
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--background)]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500
              "
            >
              <h3 className="mb-5 text-xl font-semibold text-[var(--text)]">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}