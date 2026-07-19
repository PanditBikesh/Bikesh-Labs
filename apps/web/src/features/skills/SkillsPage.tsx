import SkillsSection from "./components/SkillsSection";
import { SEO } from "@/shared/seo";

export default function SkillsPage() {
  return (
    <>
      <SEO
        title="Skills"
        description="Technical skills including React, TypeScript, Python, Machine Learning, AI, FastAPI and more."
      />

      <SkillsSection />
    </>
  );
}