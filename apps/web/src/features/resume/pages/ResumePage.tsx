import {
  ResumeHero,
  ResumeSummary,
  EducationSection,
  ExperienceSection,
  SkillsSection,
  LanguagesSection,
  ProjectsSection,
  CertificationsSection,
  AchievementsSection,
  ResumeDownload,
  ResumeCTA,
} from "../components";

import {
  Container,
  Section,
} from "@/shared/components/ui";

import { SEO } from "@/shared/seo";

export default function ResumePage() {
  return (
    <Section>
      <SEO
        title="Resume | Bikesh Pandit"
        description="Explore Bikesh Pandit's professional resume, including education, technical skills, experience, AI & Machine Learning projects, certifications, achievements, and downloadable CV."
      />

      <Container>
        <div className="space-y-24">
          <ResumeHero />

          <ResumeSummary />

          <EducationSection />

          <ExperienceSection />

          <SkillsSection />

          <LanguagesSection />

          <ProjectsSection />

          <CertificationsSection />

          <AchievementsSection />

          <ResumeDownload />

          <ResumeCTA />
        </div>
      </Container>
    </Section>
  );
}