import SectionHeader from "@/shared/components/common/SectionHeader";
import {
  Container,
  Section,
} from "@/shared/components/ui";
import { FadeIn } from "@/shared/animations";

import AboutContent from "./AboutContent";
import AboutHighlights from "./AboutHighlights";
import AboutPhoto from "./AboutPhoto";
import AboutTimeline from "./AboutTimeline";
import AboutStory from "./AboutStory";

export default function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader
          title="About Me"
          subtitle="Discover my journey, technical expertise, and passion for building intelligent software, AI-powered applications, and scalable solutions."
        />

        {/* Introduction */}

        <div className="mt-12 grid items-center gap-14 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <AboutPhoto />
          </FadeIn>

          <FadeIn delay={0.2}>
            <AboutContent />
          </FadeIn>
        </div>

        {/* Story */}
        <div className="mt-16">
          <FadeIn delay={0.3}>
            <AboutStory />
          </FadeIn>
        </div>

        {/* Expertise */}

        <div className="mt-20">
          <FadeIn delay={0.3}>
            <AboutHighlights />
          </FadeIn>
        </div>

        {/* Journey */}

        <div className="mt-20">
          <FadeIn delay={0.4}>
            <AboutTimeline />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}