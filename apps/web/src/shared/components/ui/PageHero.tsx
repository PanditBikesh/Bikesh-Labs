import type { LucideIcon } from "lucide-react";
import { MapPin } from "lucide-react";

interface PageHeroProps {
  badge?: string;

  title: string;

  subtitle: string;

  description: string;

  location?: string;

  actions?: React.ReactNode;

  icon?: LucideIcon;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  description,
  location,
  actions,
  icon: Icon,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-br
          from-blue-500/5
          via-transparent
          to-cyan-500/5
        "
      />

      <div
        className="
          absolute
          -top-24
          -right-24
          h-64
          w-64
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-24
          -left-24
          h-64
          w-64
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          rounded-3xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          p-10
          shadow-xl
          md:p-14
        "
      >
        {badge && (
          <span
            className="
              inline-flex
              rounded-full
              bg-[var(--primary)]/10
              px-4
              py-2
              text-sm
              font-semibold
              text-[var(--primary)]
            "
          >
            {badge}
          </span>
        )}

        <div className="mt-6 flex items-start gap-4">

          {Icon && (
            <div className="rounded-2xl bg-[var(--primary)]/10 p-4">
              <Icon className="h-8 w-8 text-[var(--primary)]" />
            </div>
          )}

          <div>

            <h1
              className="
                text-5xl
                font-bold
                tracking-tight
                text-[var(--text)]
                md:text-6xl
              "
            >
              {title}
            </h1>

            <p
              className="
                mt-3
                text-xl
                font-medium
                text-[var(--primary)]
              "
            >
              {subtitle}
            </p>

          </div>

        </div>

        <p
          className="
            mt-8
            max-w-4xl
            text-lg
            leading-9
            text-[var(--muted)]
          "
        >
          {description}
        </p>

        {location && (
          <div
            className="
              mt-6
              flex
              items-center
              gap-2
              text-[var(--muted)]
            "
          >
            <MapPin className="h-5 w-5" />

            <span>{location}</span>
          </div>
        )}

        {actions && (
          <div className="mt-10 flex flex-wrap gap-4">
            {actions}
          </div>
        )}
      </div>

    </section>
  );
}