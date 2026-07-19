import SectionHeader from "@/shared/components/common/SectionHeader";

import {
  Container,
  Section,
} from "@/shared/components/ui";

import { skills } from "../data/skills";

import SkillsGrid from "./SkillsGrid";

export default function SkillsSection() {
  return (
    <Section id="skills">
      <Container>

        <div className="mx-auto max-w-6xl">

          <SectionHeader
            title="Technical Skills"
            subtitle="A collection of technologies, programming languages, frameworks, tools, and AI/ML expertise that I use to build modern software solutions."
          />

          <SkillsGrid skills={skills} />

        </div>

      </Container>
    </Section>
  );
}