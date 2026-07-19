import AboutSection from "./components/AboutSection";

import { SEO } from "@/shared/seo";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about Bikesh Pandit, an AI Engineer, Machine Learning Developer, Full Stack Developer, and Computer Science student."
      />

      <AboutSection />
    </>
  );
}