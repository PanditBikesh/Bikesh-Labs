import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

import { FadeIn } from "@/shared/animations";
import Button from "@/shared/components/ui/Button";
import Card from "@/shared/components/ui/Card";
import {
  Container,
  Section,
} from "@/shared/components/ui";

import { education } from "@/features/resume/data/education";

export default function HomeEducationPreview() {
  const currentEducation = education[0];

  return (
    <Section
      id="education-preview"
      className="py-24"
    >
      <Container>

        <FadeIn>

          <Card
            className="
              overflow-hidden
              p-8
              transition-all
              duration-300
              hover:border-[var(--primary)]
              hover:shadow-xl
              md:p-10
            "
          >

            <div
              className="
                flex
                flex-col
                gap-8
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >

              {/* Content */}

              <div className="flex items-start gap-5">

                <div
                  className="
                    shrink-0
                    rounded-2xl
                    bg-[var(--primary)]/10
                    p-4
                  "
                >
                  <GraduationCap
                    className="
                      h-8
                      w-8
                      text-[var(--primary)]
                    "
                  />
                </div>

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
                    Education
                  </p>

                  <h2
                    className="
                      mt-3
                      text-3xl
                      font-bold
                      text-[var(--text)]
                      md:text-4xl
                    "
                  >
                    {currentEducation.degree}
                  </h2>

                  <p
                    className="
                      mt-2
                      font-medium
                      text-[var(--primary)]
                    "
                  >
                    {currentEducation.institution}
                  </p>

                  <p
                    className="
                      mt-4
                      max-w-2xl
                      leading-8
                      text-[var(--muted)]
                    "
                  >
                    {currentEducation.description}
                  </p>

                </div>

              </div>

              {/* Right Side */}

              <div
                className="
                  flex
                  shrink-0
                  flex-col
                  gap-4
                  lg:items-end
                "
              >

                <span
                  className="
                    w-fit
                    rounded-full
                    bg-[var(--primary)]/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-[var(--primary)]
                  "
                >
                  {currentEducation.duration}
                </span>

                <Link to="/resume">

                  <Button
                    variant="outline"
                  >
                    View Resume
                    <ArrowRight className="h-5 w-5" />
                  </Button>

                </Link>

              </div>

            </div>

          </Card>

        </FadeIn>

      </Container>
    </Section>
  );
}