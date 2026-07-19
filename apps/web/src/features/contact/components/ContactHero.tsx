import { FadeIn } from "@/shared/animations";
import Button from "@/shared/components/ui/Button";
import {
  Container,
  Section,
} from "@/shared/components/ui";
import { Download } from "lucide-react";
import resumePdf from "@/assets/resume/Bikeshresume.pdf";

export default function ContactHero() {
  return (
    <Section className="pt-24 pb-10">
      <Container>

        <FadeIn>

          <div className="mx-auto max-w-4xl text-center">

            <h1 className="text-5xl font-extrabold text-[var(--text)] md:text-6xl">
              Contact
            </h1>

            <h2 className="mt-6 text-3xl font-bold text-[var(--primary)] md:text-4xl">
              Let's Build Intelligent Software Together
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              I'm always open to discussing AI projects, software development,
              internship opportunities, freelance work, and innovative ideas.

              <br />
              <br />

              Whether you're looking for an AI solution, a modern web application,
              or a passionate developer to collaborate with,
              I'd love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <a href="#contact-form">
                <Button>
                  Send Message
                </Button>
              </a>

              <a
                href={resumePdf}
                download
              >
                <Button variant="outline">
                  <Download className="h-5 w-5" />
                  Download Resume
                </Button>
              </a>

            </div>

          </div>

        </FadeIn>

      </Container>
    </Section>
  );
}