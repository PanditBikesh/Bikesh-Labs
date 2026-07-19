import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import { FadeIn } from "@/shared/animations";
import {
  Container,
  Section,
} from "@/shared/components/ui";
import Card from "@/shared/components/ui/Card";
import Button from "@/shared/components/ui/Button";

import { projects } from "@/features/projects/data";

export default function FeaturedProjects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <Section>
      <Container>
        <FadeIn>

          {/* Header */}

          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[var(--primary)]
                "
              >
                Selected Work
              </p>

              <h2
                className="
                  mt-4
                  text-4xl
                  font-bold
                  text-[var(--text)]
                  md:text-5xl
                "
              >
                Projects That
                <span className="text-[var(--primary)]">
                  {" "}Solve Problems
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  leading-8
                  text-[var(--muted)]
                "
              >
                A selection of projects where I apply Artificial Intelligence,
                Machine Learning, and modern software engineering to build
                practical solutions.
              </p>

            </div>

            <Link to="/projects">

              <Button
                variant="outline"
                size="lg"
              >
                View All Projects

                <ArrowRight className="h-5 w-5" />
              </Button>

            </Link>

          </div>

          {/* Projects */}

          <div className="grid gap-8 lg:grid-cols-3">

            {featuredProjects.map((project) => (

              <Card
                key={project.title}
                className="
                  group
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[var(--primary)]
                  hover:shadow-xl
                "
              >

                {/* Image */}

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
                      aspect-video
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                </div>

                {/* Content */}

                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-[var(--text)]
                      "
                    >
                      {project.title}
                    </h3>

                    <span
                      className="
                        shrink-0
                        rounded-full
                        bg-[var(--primary)]/10
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-[var(--primary)]
                      "
                    >
                      {project.status}
                    </span>

                  </div>

                  <p
                    className="
                      mt-4
                      line-clamp-3
                      leading-7
                      text-[var(--muted)]
                    "
                  >
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.technologies
                      .slice(0, 4)
                      .map((technology) => (

                        <span
                          key={technology}
                          className="
                            rounded-full
                            border
                            border-[var(--border)]
                            px-3
                            py-1
                            text-xs
                            text-[var(--muted)]
                          "
                        >
                          {technology}
                        </span>

                      ))}

                  </div>

                  <div className="mt-6 flex items-center gap-4">

                    {project.github && (

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        className="
                          text-[var(--muted)]
                          transition-colors
                          hover:text-[var(--primary)]
                        "
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>

                    )}

                    {project.demo && (

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="
                          text-[var(--muted)]
                          transition-colors
                          hover:text-[var(--primary)]
                        "
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>

                    )}

                    <Link
                      to="/projects"
                      className="
                        ml-auto
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-[var(--primary)]
                      "
                    >
                      Details

                      <ArrowRight className="h-4 w-4" />
                    </Link>

                  </div>

                </div>

              </Card>

            ))}

          </div>

        </FadeIn>
      </Container>
    </Section>
  );
}