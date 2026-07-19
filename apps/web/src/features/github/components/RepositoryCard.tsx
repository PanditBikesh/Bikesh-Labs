import {
  Star,
  GitFork,
  ExternalLink,
} from "lucide-react";

import type { GithubRepo } from "../types/github";

interface Props {
  repo: GithubRepo;
}

export default function RepositoryCard({
  repo,
}: Props) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-6
        transition
        hover:border-blue-500
      "
    >
      <h3 className="text-xl font-bold">
        {repo.name}
      </h3>

      <p className="mt-3 text-[var(--muted)]">
        {repo.description || "No description available."}
      </p>

      <div className="mt-5 flex items-center gap-6 text-sm text-slate-300">

        <span className="flex items-center gap-1">
          <Star size={16} />
          {repo.stargazers_count}
        </span>

        <span className="flex items-center gap-1">
          <GitFork size={16} />
          {repo.forks_count}
        </span>

        <span>
          {repo.language || "Unknown"}
        </span>

      </div>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          text-[var(--primary)]
          hover:text-blue-300
        "
      >
        View Repository

        <ExternalLink size={16} />
      </a>

    </div>
  );
}