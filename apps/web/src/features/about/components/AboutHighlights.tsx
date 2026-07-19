import Card from "@/shared/components/ui/Card";
import Badge from "@/shared/components/ui/Badge";

import { about } from "../data/about";

export default function AboutHighlights() {
  return (
    <section aria-labelledby="expertise-heading" className="space-y-8">
      {/* Header */}

      <div>
        <h3
          id="expertise-heading"
          className="text-2xl font-bold text-[var(--text)] md:text-3xl"
        >
          Core Expertise
        </h3>

        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          Technologies, programming languages, frameworks, and engineering
          practices I use to build practical software solutions.
        </p>
      </div>

      {/* Expertise Cards */}

      <div className="grid gap-8 md:grid-cols-2">
        {about.highlights.map((section) => (
          <Card
            key={section.title}
            className="
              p-6
              transition-transform
              duration-300
              hover:-translate-y-1
            "
          >
            <h4 className="mb-4 text-lg font-semibold text-[var(--text)]">
              {section.title}
            </h4>

            <div className="flex flex-wrap gap-3">
              {section.items.map((item) => (
                <Badge key={item}>
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}