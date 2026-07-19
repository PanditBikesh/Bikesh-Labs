import {
  ArrowRight,
  Brain,
  Code2,
  Globe,
  Layers3,
} from "lucide-react";

import { Link } from "react-router-dom";

import { FadeIn } from "@/shared/animations";
import {
  Card,
  Container,
  Section,
  SectionTitle,
} from "@/shared/components/ui";

const skillGroups = [
  {
    title: "Programming",
    description: "Python, Java, TypeScript, JavaScript, and SQL.",
    icon: Code2,
  },
  {
    title: "AI & Machine Learning",
    description: "Machine Learning, Deep Learning, NLP, and Computer Vision.",
    icon: Brain,
  },
  {
    title: "Web Development",
    description: "React, FastAPI, REST APIs, Tailwind CSS, and Vite.",
    icon: Globe,
  },
  {
    title: "Software Engineering",
    description: "Clean Architecture, Git, API Design, and problem solving.",
    icon: Layers3,
  },
];

export default function HomeSkillsPreview() {
  return (
    <Section className="py-24">
      <Container>

        <FadeIn>
          <SectionTitle
            subtitle="Technical Expertise"
            title="Tools I Use to Build"
            description="A focused overview of the technologies and engineering domains I use to build intelligent and modern software."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <FadeIn
                key={skill.title}
                delay={index * 0.08}
              >
                <Card
                  className="
                    group
                    h-full
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[var(--primary)]
                    hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]
                  "
                >
                  <div
                    className="
                      mb-6
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[var(--primary)]/10
                      transition-all
                      duration-300
                      group-hover:bg-[var(--primary)]
                    "
                  >
                    <Icon
                      className="
                        h-7
                        w-7
                        text-[var(--primary)]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text)]">
                    {skill.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[var(--muted)]">
                    {skill.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Link
              to="/skills"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-2xl
                border
                border-[var(--border)]
                px-6
                py-3
                font-semibold
                text-[var(--text)]
                transition-all
                duration-300
                hover:border-[var(--primary)]
                hover:text-[var(--primary)]
              "
            >
              Explore All Skills

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
        </FadeIn>

      </Container>
    </Section>
  );
}