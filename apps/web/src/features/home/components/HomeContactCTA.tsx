import {
  ArrowRight,
  Mail,
  MessageCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

import { FadeIn } from "@/shared/animations";
import Button from "@/shared/components/ui/Button";
import Card from "@/shared/components/ui/Card";
import {
  Container,
  Section,
} from "@/shared/components/ui";

export default function ContactCTA() {
  return (
    <Section
      id="contact-cta"
      className="py-24"
    >
      <Container>

        <FadeIn>

          <Card
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border-[var(--border)]
              p-8
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[var(--primary)]
              hover:shadow-2xl
              md:p-12
              lg:p-16
            "
          >

            {/* Background Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-72
                w-72
                rounded-full
                bg-[var(--primary)]/10
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-[var(--primary)]/20
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-32
                h-72
                w-72
                rounded-full
                bg-[var(--primary)]/5
                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                items-center
                justify-between
                gap-10
                text-center
                lg:flex-row
                lg:text-left
              "
            >

              {/* Content */}

              <div className="max-w-3xl">

                <div
                  className="
                    mb-5
                    flex
                    items-center
                    justify-center
                    gap-3
                    text-[var(--primary)]
                    lg:justify-start
                  "
                >
                  <MessageCircle className="h-5 w-5" />

                  <span
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                    "
                  >
                    Let's Work Together
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
                  Have an Idea?
                  <span className="text-[var(--primary)]">
                    {" "}Let's Build It.
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    max-w-2xl
                    text-lg
                    leading-8
                    text-[var(--muted)]
                  "
                >
                  Whether you are building an AI-powered application,
                  exploring a Machine Learning project, or looking for a
                  software developer, I would love to hear about your idea.
                </p>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    leading-7
                    text-[var(--muted)]
                  "
                >
                  Let's turn a challenging problem into a practical,
                  intelligent, and scalable solution.
                </p>

              </div>

              {/* Action */}

              <div
                className="
                  flex
                  shrink-0
                  flex-col
                  items-center
                  gap-4
                  sm:flex-row
                  lg:flex-col
                  xl:flex-row
                "
              >

                <Link to="/contact">

                  <Button
                    variant="primary"
                    size="lg"
                  >
                    Start a Conversation
                    <ArrowRight className="h-5 w-5" />
                  </Button>

                </Link>

                <a
                  href="mailto:bikeshpandit@example.com"
                  aria-label="Send an email to Bikesh Pandit"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[var(--muted)]
                    transition-colors
                    duration-300
                    hover:text-[var(--primary)]
                  "
                >
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>

              </div>

            </div>

          </Card>

        </FadeIn>

      </Container>
    </Section>
  );
}