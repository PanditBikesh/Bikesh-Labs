import { Languages } from "lucide-react";

import Badge from "@/shared/components/ui/Badge";

import { languages } from "../data/languages";

export default function LanguagesSection() {
  return (
    <section
      aria-labelledby="languages-heading"
      className="mt-12"
    >
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-lg">

        {/* Header */}

        <div className="mb-10 flex items-center gap-4">

          <div className="rounded-2xl bg-blue-500/10 p-3">
            <Languages className="h-8 w-8 text-[var(--primary)]" />
          </div>

          <div>

            <h2
              id="languages-heading"
              className="text-3xl font-bold text-[var(--text)]"
            >
              Languages
            </h2>

            <p className="mt-1 text-[var(--muted)]">
              Languages used for communication and professional collaboration.
            </p>

          </div>

        </div>

        {/* Languages */}

        <div className="grid gap-5 md:grid-cols-2">

          {languages.map((language) => (
            <div
              key={language.language}
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
              <h3 className="text-lg font-semibold text-[var(--text)]">
                {language.language}
              </h3>

              <div className="mt-4">
                <Badge>
                  {language.level}
                </Badge>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}