import clsx from "clsx";

type Props = {
  percentage: number;
};

export default function SkillProgress({
  percentage,
}: Props) {
  const value = Math.max(0, Math.min(percentage, 100));

  const progressColor =
    value >= 90
      ? "bg-emerald-500"
      : value >= 80
        ? "bg-[var(--primary)]"
        : value >= 70
          ? "bg-cyan-500"
          : "bg-slate-500";

  return (
    <div className="mt-6">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-[var(--muted)]">
          Proficiency
        </span>

        <span className="font-semibold text-[var(--text)]">
          {value}%
        </span>
      </div>

      <div
        className="h-2 overflow-hidden rounded-full bg-[var(--border)]"
        role="progressbar"
        aria-label="Skill proficiency"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={clsx(
            "h-full rounded-full transition-all duration-500",
            progressColor
          )}
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}