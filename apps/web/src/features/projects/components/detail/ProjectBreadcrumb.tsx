import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
};

export default function ProjectBreadcrumb({
  title,
}: Props) {
  return (
    <div className="mb-10 flex flex-wrap items-center gap-3 text-sm">

      <Link
        to="/"
        className="
          flex
          items-center
          gap-2
          text-[var(--muted)]
          transition-colors
          hover:text-[var(--primary)]
        "
      >
        <Home className="h-4 w-4" />
        Home
      </Link>

      <span className="text-[var(--muted)]">/</span>

      <Link
        to="/projects"
        className="
          flex
          items-center
          gap-2
          text-[var(--muted)]
          transition-colors
          hover:text-[var(--primary)]
        "
      >
        <ChevronRight className="h-4 w-4" />
        Projects
      </Link>

      <span className="text-[var(--muted)]">/</span>

      <span className="font-medium text-[var(--text)]">
        {title}
      </span>

    </div>
  );
}