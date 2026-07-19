import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/shared/components/ui/Button";

export default function ResumeCTA() {
  return (
    <section className="mt-12">
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          p-10
          text-center
          shadow-xl
          relative
        "
      >
        {/* Background Glow */}

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        <h2 className="text-4xl font-bold text-[var(--text)]">
          Let's Build Something Amazing
        </h2>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-[var(--muted)]">
          I'm always interested in Artificial Intelligence,
          Machine Learning and software
          engineering opportunities where I can build impactful,
          real-world solutions.
        </p>

        <div className="mt-8">
          <Link to="/contact">
            <Button size="lg">
              Contact Me
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}