import { about } from "../data/about";

export default function AboutTimeline() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="space-y-8"
    >
      {/* Header */}

      <div>
        <h3
          id="journey-heading"
          className="text-2xl font-bold text-[var(--text)] md:text-3xl"
        >
          My Journey
        </h3>

        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          A brief timeline of the experiences, projects, and milestones that
          have shaped my growth as a software developer.
        </p>
      </div>

      {/* Timeline */}

      <div
        className="
          relative
          border-l-2
          border-[var(--border)]
          pl-8
        "
      >
        {about.timeline.map((item) => (
          <article
            key={`${item.year}-${item.title}`}
            className="
              group
              relative
              mb-8
              transition-transform
              duration-300
              hover:translate-x-1
              last:mb-0
            "
          >
            {/* Timeline Dot */}

            <span
              aria-hidden="true"
              className="
                absolute
                -left-[41px]
                top-1
                h-5
                w-5
                rounded-full
                border-4
                border-[var(--background)]
                bg-[var(--primary)]
                transition-transform
                duration-300
                group-hover:scale-125
              "
            />

            {/* Year */}

            <p className="text-sm font-semibold text-[var(--primary)]">
              {item.year}
            </p>

            {/* Milestone */}

            <h4 className="mt-2 text-xl font-semibold text-[var(--text)]">
              {item.title}
            </h4>

            {/* Description */}

            <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}