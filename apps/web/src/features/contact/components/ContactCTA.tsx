import {
  ArrowRight,
  Download,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  Container,
} from "@/shared/components/ui";

import Button from "@/shared/components/ui/Button";

import resumePdf from "@/assets/resume/Bikeshresume.pdf";

export default function ContactCTA() {
  return (
    <section className="mt-24">

      <Container>

        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-[var(--border)]
            bg-gradient-to-r
            from-[var(--surface)]
            via-[var(--surface)]
            to-[var(--primary)]/10
            p-10
            text-center
          "
        >

          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[var(--primary)]
            "
          >
            Available for Opportunities
          </span>

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              text-[var(--text)]
            "
          >
            Ready to Build Something Amazing?
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-[var(--muted)]
            "
          >
            I'm currently open to internships, freelance work,
            AI projects, software development opportunities,
            and exciting collaborations.
          </p>

          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >

            <a
              href={resumePdf}
              download
            >
              <Button variant="outline">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </a>

            <Link to="/projects">
              <Button variant="outline">
                <ArrowRight className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}