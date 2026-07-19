import {
  Calendar,
  ExternalLink,
  Folder,
  GitBranch,
  Layers,
  Tag,
} from "lucide-react";

import Badge from "@/shared/components/ui/Badge";
import Button from "@/shared/components/ui/Button";
import Card from "@/shared/components/ui/Card";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectSidebar({
  project,
}: Props) {
  return (
    <aside className="sticky top-28 h-fit">

      <Card className="space-y-8 p-8">

        <div>

          <h3 className="mb-6 text-2xl font-bold text-[var(--text)]">
            Project Information
          </h3>

          <div className="space-y-6">

            <div className="flex items-center gap-4">

              <Tag className="h-5 w-5 text-[var(--primary)]" />

              <div>

                <p className="text-sm text-[var(--muted)]">
                  Category
                </p>

                <p className="font-medium text-[var(--text)]">
                  {project.category}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <Calendar className="h-5 w-5 text-[var(--primary)]" />

              <div>

                <p className="text-sm text-[var(--muted)]">
                  Year
                </p>

                <p className="font-medium text-[var(--text)]">
                  {project.year}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <Folder className="h-5 w-5 text-[var(--primary)]" />

              <div>

                <p className="text-sm text-[var(--muted)]">
                  Status
                </p>

                <p className="font-medium text-[var(--text)]">
                  {project.status}
                </p>

              </div>

            </div>

          </div>

        </div>

        <div>

          <div className="mb-4 flex items-center gap-2">

            <Layers className="h-5 w-5 text-[var(--primary)]" />

            <h4 className="font-semibold text-[var(--text)]">
              Technologies
            </h4>

          </div>

          <div className="flex flex-wrap gap-2">

            {project.technologies.map((tech) => (
              <Badge key={tech}>
                {tech}
              </Badge>
            ))}

          </div>

        </div>

        <div className="space-y-4">

          {project.github && (
            <Button
              className="w-full"
              onClick={() => window.open(project.github, "_blank")}
            >
              <GitBranch className="mr-2 h-5 w-5" />
              Source Code
            </Button>
          )}

          {project.demo && (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(project.demo, "_blank")}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
            </Button>
          )}

        </div>

      </Card>

    </aside>
  );
}