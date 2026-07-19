import { Download } from "lucide-react";

import Button from "@/shared/components/ui/Button";

import resumePdf from "@/assets/resume/Bikeshresume.pdf";

export default function ResumeDownload() {
  return (
    <section className="mt-12">

      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center shadow-lg">

        <h2 className="text-3xl font-bold text-[var(--text)]">
          Download Resume
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-8 text-[var(--muted)]">
          Download a PDF version of my resume for offline viewing,
          interviews, or recruitment purposes.
        </p>

        <div className="mt-8">

          <a
            href={resumePdf}
            download
          >
            <Button size="lg">
              <Download className="h-5 w-5" />
              Download PDF Resume
            </Button>
          </a>

        </div>

      </div>

    </section>
  );
}