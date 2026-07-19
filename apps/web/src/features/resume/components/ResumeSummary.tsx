import { summary } from "../data/summary";

export default function ResumeSummary() {
  const stats = [
    {
      label: "Years Learning",
      value: summary.stats.yearsOfLearning,
    },
    {
      label: "Projects",
      value: summary.stats.totalProjects,
    },
    {
      label: "Technologies",
      value: summary.stats.technologies,
    },
    {
      label: "Certificates",
      value: summary.stats.certificates,
    },
  ];

  return (
    <section
      aria-labelledby="resume-summary-heading"
      className="mt-16"
    >
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">

        <div
          className="
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-6
            shadow-lg
            md:p-8
          "
        >
          <h2
            id="resume-summary-heading"
            className="
              mb-6
              text-2xl
              font-bold
              text-[var(--text)]
              md:text-3xl
            "
          >
            Professional Summary
          </h2>

          <p
            className="
              text-lg
              leading-8
              text-[var(--muted)]
            "
          >
            {summary.professionalSummary}
          </p>
        </div>

        <div className="grid gap-5">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--primary)]
                hover:shadow-lg
              "
            >
              <h3
                className="
                  text-3xl
                  font-bold
                  text-[var(--primary)]
                  md:text-4xl
                "
              >
                {item.value}
              </h3>

              <p className="mt-2 text-[var(--muted)]">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}