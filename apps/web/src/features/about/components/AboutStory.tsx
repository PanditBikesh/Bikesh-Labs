import Card from "@/shared/components/ui/Card";

import { about } from "../data/about";

export default function AboutStory() {
  return (
    <Card className="p-8 md:p-10">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">

        {/* Story Header */}

        <div>
          <h3
            className="
              text-2xl
              font-bold
              text-[var(--text)]
              md:text-3xl
            "
          >
            {about.story.title}
          </h3>

          <p
            className="
              mt-4
              leading-7
              text-[var(--muted)]
            "
          >
            {about.story.subtitle}
          </p>
        </div>

        {/* Story Content */}

        <div className="space-y-6">
          {about.story.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="
                leading-8
                text-[var(--muted)]
              "
            >
              {paragraph}
            </p>
          ))}
        </div>

      </div>
    </Card>
  );
}