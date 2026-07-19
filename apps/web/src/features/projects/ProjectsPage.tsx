import { SEO } from "@/shared/seo";

import GithubRepositories from "@/features/github/components/GithubRepositories";

import ProjectsSection from "./components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects"
        description="Explore AI, Machine Learning, Artificial Intelligence, and Full Stack projects built by Bikesh Pandit."
      />

      <ProjectsSection />

      <GithubRepositories />
    </>
  );
}