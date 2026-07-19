import {
  GitBranch,
  Users,
  BookOpen,
} from "lucide-react";

import { FadeIn } from "@/shared/animations";

import useGithub from "../hooks/useGithub";

export default function GithubStats() {
  const {
    user,
    loading,
  } = useGithub();

  if (loading) {
    return (
      <p className="text-center">
        Loading GitHub...
      </p>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <FadeIn>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">

        <div className="flex flex-col items-center text-center">

          <img
            src={user.avatar_url}
            alt={user.name}
            className="h-28 w-28 rounded-full border-4 border-blue-500"
          />

          <h2 className="mt-5 text-3xl font-bold">
            {user.name}
          </h2>

          <p className="mt-2 text-[var(--muted)]">
            {user.bio}
          </p>

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 text-[var(--primary)] hover:text-blue-300"
          >
            View GitHub Profile
          </a>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-950 p-6 text-center">

            <GitBranch
              className="mx-auto mb-3"
              size={28}
            />

            <h3 className="text-3xl font-bold">
              {user.public_repos}
            </h3>

            <p>Repositories</p>

          </div>

          <div className="rounded-2xl bg-slate-950 p-6 text-center">

            <Users
              className="mx-auto mb-3"
              size={28}
            />

            <h3 className="text-3xl font-bold">
              {user.followers}
            </h3>

            <p>Followers</p>

          </div>

          <div className="rounded-2xl bg-slate-950 p-6 text-center">

            <BookOpen
              className="mx-auto mb-3"
              size={28}
            />

            <h3 className="text-3xl font-bold">
              {user.following}
            </h3>

            <p>Following</p>

          </div>

        </div>

      </section>

    </FadeIn>
  );
}