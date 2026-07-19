import { Trophy } from "lucide-react";

const achievements = [
  "Built 8+ end-to-end Machine Learning and AI projects.",
  "Developed OMNIX 2.0 — an offline modular AI desktop assistant.",
  "Experienced in Python, Machine Learning, NLP, React, TypeScript, and Tailwind CSS.",
  "Designed scalable clean architectures for AI applications.",
];

export default function AchievementsSection() {
  return (
    <section
      className="mt-12"
      aria-labelledby="achievements-heading"
    >
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-lg">

        <div className="mb-8 flex items-center gap-4">

          <div className="rounded-2xl bg-blue-500/10 p-3">
            <Trophy className="h-8 w-8 text-[var(--primary)]" />
          </div>

          <div>

            <h2
              id="achievements-heading"
              className="text-3xl font-bold text-[var(--text)]"
            >
              Key Achievements
            </h2>

            <p className="mt-1 text-[var(--muted)]">
              Highlights of my learning journey and technical accomplishments.
            </p>

          </div>

        </div>

        <ul className="space-y-4">

          {achievements.map((item) => (
            <li
              key={item}
              className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />

              <p className="leading-8 text-[var(--muted)]">
                {item}
              </p>
            </li>
          ))}

        </ul>

      </div>
    </section>
  );
}