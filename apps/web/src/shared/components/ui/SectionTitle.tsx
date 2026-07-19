import type { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: LucideIcon;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  icon: Icon,
  centered = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`
        mb-14
        ${centered ? "text-center" : "flex items-start gap-4"}
        ${className}
      `}
    >
      {!centered && Icon && (
        <div
          className="
            shrink-0
            rounded-2xl
            bg-[var(--primary)]/10
            p-4
          "
        >
          <Icon
            className="
              h-8
              w-8
              text-[var(--primary)]
            "
          />
        </div>
      )}

      <div>
        <h2
          className="
            text-4xl
            font-bold
            tracking-tight
            text-[var(--text)]
          "
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className="
              mt-3
              max-w-3xl
              leading-8
              text-[var(--muted)]
            "
          >
            {subtitle}
          </p>
        )}

        {description && (
          <p
            className="
              mt-3
              max-w-3xl
              leading-8
              text-[var(--muted)]
            "
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}