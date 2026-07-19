import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/shared/components/ui/Button";
import Card from "@/shared/components/ui/Card";

import resumePdf from "@/assets/resume/Bikeshresume.pdf";

export default function ProjectsCTA() {
  return (
    <Card
      className="
        mt-24
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        px-8
        py-14
        text-center
      "
    >
      <span
        className="
          inline-block
          rounded-full
          bg-[var(--primary)]/10
          px-4
          py-2
          text-sm
          font-semibold
          text-[var(--primary)]
        "
      >
        Ready to Collaborate?
      </span>

      <h2 className="mt-6 text-4xl font-bold text-[var(--text)] md:text-5xl">
        Have a Project in Mind?
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
        I'm passionate about Artificial Intelligence, Machine Learning,
        Full Stack Development, and building modern software solutions.
        If you're looking for someone to contribute to your next project,
        let's connect.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-5">

        <Link to="/contact">
          <Button size="lg">
            Contact Me
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>

        <a
          href={resumePdf}
          download
        >
          <Button
            variant="outline"
            size="lg"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </Button>
        </a>

      </div>
    </Card>
  );
}