import {
  ArrowRight,
  Award,
  ExternalLink,
} from "lucide-react";

import { Link } from "react-router-dom";

import { FadeIn } from "@/shared/animations";
import Button from "@/shared/components/ui/Button";
import Card from "@/shared/components/ui/Card";
import {
  Container,
  Section,
} from "@/shared/components/ui";

import { certifications } from "@/features/resume/data/certifications";

export default function HomeCertificationsPreview() {
  const featuredCertifications = certifications.slice(0, 3);

  return (
    <Section
      id="certifications-preview"
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
                <Award className="h-5 w-5" />

                <span
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                  "
                >
                  Certifications
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
                Continuous{" "}
                <span className="text-[var(--primary)]">
                  Learning
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
                Certifications and learning milestones that support my
                continuous growth in technology and software development.
              </p>

            </div>

            <Link to="/resume">

              <Button
                variant="outline"
                size="lg"
              >
                View All Certifications
                <ArrowRight className="h-5 w-5" />
              </Button>

            </Link>

          </div>

          {/* Certification Cards */}

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {featuredCertifications.map((certification) => (

              <Card
                key={`${certification.title}-${certification.issuer}`}
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

                {/* Certificate Preview */}

                <div
                  className="
                    relative
                    aspect-video
                    overflow-hidden
                    bg-[var(--background)]
                  "
                >

                  <img
                    src={certification.image}
                    alt={`${certification.title} certificate issued by ${certification.issuer}`}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/50
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                </div>

                {/* Content */}

                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3
                        className="
                          text-xl
                          font-bold
                          leading-snug
                          text-[var(--text)]
                          transition-colors
                          duration-300
                          group-hover:text-[var(--primary)]
                        "
                      >
                        {certification.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          font-medium
                          text-[var(--primary)]
                        "
                      >
                        {certification.issuer}
                      </p>

                    </div>

                    <Award
                      className="
                        h-6
                        w-6
                        shrink-0
                        text-[var(--primary)]
                      "
                    />

                  </div>

                  <p
                    className="
                      mt-3
                      text-sm
                      text-[var(--muted)]
                    "
                  >
                    Issued: {certification.issueDate}
                  </p>

                  <div className="mt-5 flex items-center gap-4">

                    {certification.pdf && (

                      <a
                        href={certification.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-sm
                          font-semibold
                          text-[var(--primary)]
                          transition-opacity
                          hover:opacity-80
                        "
                      >
                        View Certificate
                        <ExternalLink className="h-4 w-4" />
                      </a>

                    )}

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