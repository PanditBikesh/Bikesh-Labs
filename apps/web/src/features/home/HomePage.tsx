import Hero from "./components/Hero";

import AboutPreview from "./components/HomeAboutPreview";
import SkillsPreview from "./components/HomeSkillsPreview";
import FeaturedProjects from "./components/FeaturedProjects";

import HomeCTA from "./components/HomeContactCTA";
import HomeExperiencePreview from "./components/HomeExperiencePreview";
import HomeEducationPreview from "./components/HomeEducationPreview";
import HomeCertificationsPreview from "./components/HomeCertificationsPreview";

import { SEO } from "@/shared/seo";

export default function HomePage() {
  return (
    <>
      <SEO
        title="AI/ML Engineer & Developer"
        description="Explore the portfolio of Bikesh Kumar Pandit, also known as Bikesh Pandit. Discover projects in artificial intelligence, machine learning, Python, and software development."
      />

      <Hero />

      <AboutPreview />

      <SkillsPreview />

      <FeaturedProjects />

      <HomeExperiencePreview />

      <HomeEducationPreview />

      <HomeCertificationsPreview />
      
      <HomeCTA />
    </>
  );
}