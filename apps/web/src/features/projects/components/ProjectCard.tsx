import { Link } from "react-router-dom";

import Card from "@/shared/components/ui/Card";

import type { Project } from "../types/project";

import FeaturedBadge from "./FeaturedBadge";
import ProjectActions from "./ProjectActions";
import ProjectImage from "./ProjectImage";
import ProjectTags from "./ProjectTags";

type Props = Project;

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  technologies,
  github,
  demo,
  featured,
}: Props) {
  return (
    <Link to={`/projects/${slug}`} className="block h-full">
      <Card
        className="
          group
          h-full
          cursor-pointer
          overflow-hidden
          rounded-3xl
          p-0
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-blue-500/40
          hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]
        "
      >
        <ProjectImage
          image={image}
          title={title}
        />

        <div className="flex h-full flex-col gap-5 p-6">

          <FeaturedBadge featured={featured} />

          <div>
            <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
              {title}
            </h3>

            <p className="mt-3 leading-7 text-[var(--muted)]">
              {description}
            </p>
          </div>

          <ProjectTags technologies={technologies} />

          <ProjectActions
            github={github}
            demo={demo}
          />

        </div>
      </Card>
    </Link>
  );
}