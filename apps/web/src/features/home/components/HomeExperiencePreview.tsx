import {
  ArrowRight,
  Briefcase,
} from "lucide-react";

import { Link } from "react-router-dom";

import { FadeIn } from "@/shared/animations";
import Button from "@/shared/components/ui/Button";
import Card from "@/shared/components/ui/Card";
import {
  Container,
  Section,
} from "@/shared/components/ui";

import { experiences } from "@/features/resume/data/experience";

export default function HomeExperiencePreview() {
  const featuredExperiences = experiences.slice(0, 2);

  return (
    <Section
      id="experience-preview"
      className="py-24"
    >
      <Container>

        <FadeIn>

          {/* Header */}

          <div
            className="
              mb-12
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-end
              md:justify-between
            "
          >

            <div>

              <div
                className="
                  mb-4
                  flex
                  items-center
                  gap-3
                  text-[var(--primary)]
                "
              >
                <Briefcase className="h-5 w-5" />

                <span
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                  "
                >
                  Experience
                </span>
              </div>

              <h2
                className="
                  text-4xl
                  font-bold
                  tracking-tight
                  text-[var(--text)]
                  md:text-5xl
                "
              >
                Building Through{" "}
                <span className="text-[var(--primary)]">
                  Experience
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-2xl
                  leading-8
                  text-[var(--muted)]
                "
              >
                Practical experience gained through building software,
                learning new technologies, and solving real-world problems.
              </p>

            </div>

            <Link to="/resume">

              <Button
                variant="outline"
                size="lg"
              >
                View Full Resume
                <ArrowRight className="h-5 w-5" />
              </Button>

            </Link>

          </div>

          {/* Experience Cards */}

          <div className="grid gap-6 lg:grid-cols-2">

            {featuredExperiences.map((experience) => (

              <Card
                key={`${experience.company}-${experience.role}`}
                className="
                  group
                  relative
                  overflow-hidden
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[var(--primary)]
                  hover:shadow-xl
                "
              >

                {/* Decorative Accent */}

                <div
                  className="
                    absolute
                    bottom-6
                    left-3
                    top-6
                    w-1
                    rounded-full
                    bg-[var(--primary)]/50
                    transition-all
                    duration-300
                    group-hover:bg-[var(--primary)]
                    group-hover:shadow-[0_0_12px_var(--primary)]
                  "
                />

                {/* Content */}

                <div className="pl-5">

                  <div
                    className="
                      flex
                      flex-col
                      gap-5
                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                    "
                  >

                    <div>

                      <h3
                        className="
                          text-2xl
                          font-bold
                          text-[var(--text)]
                          transition-colors
                          duration-300
                          group-hover:text-[var(--primary)]
                        "
                      >
                        {experience.role}
                      </h3>

                      <p
                        className="
                          mt-2
                          font-medium
                          text-[var(--primary)]
                        "
                      >
                        {experience.company}
                      </p>

                    </div>

                    <span
                      className="
                        w-fit
                        shrink-0
                        rounded-full
                        bg-[var(--primary)]/10
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-[var(--primary)]
                      "
                    >
                      {experience.duration}
                    </span>

                  </div>

                  <p
                    className="
                      mt-6
                      line-clamp-4
                      leading-8
                      text-[var(--muted)]
                    "
                  >
                    {experience.description}
                  </p>

                </div>

              </Card>

            ))}

          </div>

        </FadeIn>

      </Container>
    </Section>
  );
}