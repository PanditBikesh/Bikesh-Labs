import {
  ArrowRight,
  BrainCircuit,
} from "lucide-react";

import { Link } from "react-router-dom";

import { FadeIn } from "@/shared/animations";
import {
  Container,
  Section,
} from "@/shared/components/ui";
import Card from "@/shared/components/ui/Card";

export default function HomeAboutPreview() {
  return (
    <Section className="py-24">

      <Container>

        <FadeIn>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">

            {/* LEFT */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
                About Me
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-tight text-[var(--text)] md:text-5xl">

                Building Intelligent Software

                <span className="block text-[var(--primary)]">
                  with Purpose
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">

                I'm Bikesh Pandit, a Computer Science student and Software Developer
                focused on Artificial Intelligence, Machine Learning, and modern
                software engineering.

              </p>

              <Link
                to="/about"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[var(--border)]
                  px-6
                  py-3
                  font-semibold
                  text-[var(--text)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[var(--primary)]
                  hover:bg-[var(--primary)]/10
                  hover:text-[var(--primary)]
                "
              >

                Learn More About Me

                <ArrowRight
                  className="
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Link>

            </div>

            {/* RIGHT */}

            <Card
              className="
                group
                relative
                overflow-hidden
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[var(--primary)]
                hover:shadow-2xl
              "
            >

              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[var(--primary)]/10
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-[var(--primary)]/20
                "
              />

              <div className="relative">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[var(--primary)]/10
                  "
                >
                  <BrainCircuit
                    className="h-7 w-7 text-[var(--primary)]"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[var(--text)]">
                  My Mission
                </h3>

                <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
                  To build intelligent, reliable, and scalable software by
                  combining Artificial Intelligence, modern engineering
                  principles, clean architecture, and continuous learning.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">

                  <div>
                    <p className="text-sm text-[var(--muted)]">
                      Focus
                    </p>

                    <p className="mt-2 font-semibold text-[var(--text)]">
                      AI & Software Engineering
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[var(--muted)]">
                      Experience
                    </p>

                    <p className="mt-2 font-semibold text-[var(--text)]">
                      2+ Years of Learning & Building
                    </p>
                  </div>

                </div>

              </div>

            </Card>

          </div>

        </FadeIn>

      </Container>

    </Section>
  );
}