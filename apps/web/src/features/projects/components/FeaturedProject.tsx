import { ArrowRight, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";

import Badge from "@/shared/components/ui/Badge";
import Button from "@/shared/components/ui/Button";
import Card from "@/shared/components/ui/Card";

import type { Project } from "../types/project";

type Props = {
  project: Project;
};

export default function FeaturedProject({
  project,
}: Props) {
  return (
    <Card
      className="
        overflow-hidden
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
      "
    >
      <div className="grid items-center lg:grid-cols-2">

        {/* Left */}

        <div className="space-y-6 p-10">

          <Badge>
            ⭐ Featured Project
          </Badge>

          <div>

            <h2 className="text-4xl font-bold text-[var(--text)]">
              {project.title}
            </h2>

            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              {project.description}
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            {project.technologies.slice(0, 6).map((tech) => (
              <Badge key={tech}>
                {tech}
              </Badge>
            ))}

          </div>

          <div className="flex flex-wrap gap-4">

            <Link
              to={`/projects/${project.slug}`}
            >
              <Button size="lg">

                View Case Study

                <ArrowRight className="h-5 w-5" />

              </Button>
            </Link>

            {project.github && (
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(
                    project.github,
                    "_blank"
                  )
                }
              >
                <GitBranch className="h-5 w-5" />

                GitHub

              </Button>
            )}

          </div>

        </div>

        {/* Right */}

        <div className="overflow-hidden">

          <img
            src={project.image}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
          />

        </div>

      </div>
    </Card>
  );
}