import { MapPin, Briefcase, CheckCircle2, Mail } from "lucide-react";

import Card from "@/shared/components/ui/Card";

import { about } from "../data/about";

export default function AboutContent() {
  return (
    <div className="space-y-8">
      {/* Identity */}

      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
          {about.subHeading}
        </p>

        <h2 className="text-4xl font-bold leading-tight text-[var(--text)] md:text-5xl">
          Who I Am
        </h2>
      </div>

      {/* Story */}

      <div className="space-y-6">
        {about.description.split("\n\n").map((paragraph) => (
          <p
            key={paragraph}
            className="leading-8 text-[var(--muted)]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Mission */}

      <Card className="p-6">
        <div className="flex items-start gap-4">
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[var(--primary)]/10
            "
          >
            <CheckCircle2
              className="h-5 w-5 text-[var(--primary)]"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--text)]">
              My Mission
            </h3>

            <p className="mt-3 leading-7 text-[var(--muted)]">
              {about.mission}
            </p>
          </div>
        </div>
      </Card>

      {/* Professional Details */}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex gap-3">
          <MapPin
            className="
              mt-1
              h-5
              w-5
              shrink-0
              text-[var(--primary)]
            "
          />

          <div>
            <p className="text-sm text-[var(--muted)]">
              Location
            </p>

            <p className="mt-1 font-semibold text-[var(--text)]">
              {about.location}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Briefcase
            className="
              mt-1
              h-5
              w-5
              shrink-0
              text-[var(--primary)]
            "
          />

          <div>
            <p className="text-sm text-[var(--muted)]">
              Experience
            </p>

            <p className="mt-1 font-semibold text-[var(--text)]">
              {about.experience}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <CheckCircle2
            className="
              mt-1
              h-5
              w-5
              shrink-0
              text-emerald-500
            "
          />

          <div>
            <p className="text-sm text-[var(--muted)]">
              Availability
            </p>

            <p className="mt-1 font-semibold text-emerald-500">
              {about.availability}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Mail
            className="
              mt-1
              h-5
              w-5
              shrink-0
              text-[var(--primary)]
            "
          />

          <div>
            <p className="text-sm text-[var(--muted)]">
              Email
            </p>

            <a
              href={`mailto:${about.email}`}
              className="
                mt-1
                block
                break-all
                font-semibold
                text-[var(--text)]
                transition-colors
                hover:text-[var(--primary)]
              "
            >
              {about.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}