import { Download, Mail, MapPin } from "lucide-react";

import Button from "@/shared/components/ui/Button";

import { summary } from "../data/summary";

import resumePdf from "@/assets/resume/Bikeshresume.pdf";

export default function ResumeHero() {
  return (
    <section
      aria-labelledby="resume-heading"
      className="
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--surface)]/60
        p-8
        md:p-10
        lg:p-12
      "
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        <div className="max-w-2xl space-y-6">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
            Resume
          </p>

          <h1
            id="resume-heading"
            className="
              text-4xl
              font-extrabold
              text-[var(--text)]
              md:text-5xl
              lg:text-6xl
            "
          >
            {summary.name}
          </h1>

          <h2 className="text-2xl font-semibold text-[var(--muted)]">
            {summary.roles}
          </h2>

          <div className="flex flex-wrap gap-6 text-[var(--muted)]">

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[var(--primary)]" />
              <span>{summary.location}</span>
            </div>

            {summary.email && (
              <a
                href={`mailto:${summary.email}`}
                className="
                  flex
                  items-center
                  gap-2
                  transition-colors
                  hover:text-[var(--primary)]
                "
              >
                <Mail className="h-5 w-5 text-[var(--primary)]" />
                <span>{summary.email}</span>
              </a>
            )}

          </div>

        </div>

        <div className="flex gap-4">

          <a
            href={resumePdf}
            download
            aria-label="Download resume as PDF"
          >
            <Button size="lg">
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </a>

        </div>

      </div>
    </section>
  );
}