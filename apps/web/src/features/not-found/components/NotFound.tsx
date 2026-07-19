import { Link } from "react-router-dom";
import { TriangleAlert, Home, FolderOpen } from "lucide-react";

import { FadeIn } from "@/shared/animations";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">

      <FadeIn>

        <div className="mx-auto max-w-xl text-center">

          <TriangleAlert
            className="mx-auto mb-8 text-[var(--primary)]"
            size={80}
          />

          <h1 className="text-7xl font-black">
            404
          </h1>

          <h2 className="mt-6 text-3xl font-bold">
            Page Not Found
          </h2>

          <p className="mt-4 text-[var(--muted)]">
            Sorry, the page you are looking for doesn't exist
            or has been moved.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              to="/"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-semibold
                transition
                hover:bg-blue-700
              "
            >
              <Home size={18} />
              Go Home
            </Link>

            <Link
              to="/projects"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-700
                px-6
                py-3
                font-semibold
                transition
                hover:border-blue-500
              "
            >
              <FolderOpen size={18} />
              View Projects
            </Link>

          </div>

        </div>

      </FadeIn>

    </section>
  );
}