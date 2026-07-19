import { FadeIn } from "@/shared/animations";
import SectionHeader from "@/shared/components/common/SectionHeader";
import {
  Container,
  Section,
} from "@/shared/components/ui";

import useProjects from "../hooks/useProjects";

import FeaturedProject from "./FeaturedProject";
import ProjectStats from "./ProjectStats";
import ProjectsCTA from "./ProjectsCTA";
import ProjectsGrid from "./ProjectsGrid";
import ProjectsToolbar from "./ProjectsToolbar";

export default function ProjectsSection() {
  const {
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
    categories,
    projects,
  } = useProjects();

  const featuredProject = projects.find(
    ({ featured }) => featured
  );

  return (
    <Section id="projects">
      <Container>

        <FadeIn>
          <SectionHeader
            title="Featured Projects"
            subtitle="A collection of AI, Machine Learning, and Full Stack applications that demonstrate real-world engineering skills."
          />
        </FadeIn>

        {featuredProject && (
          <div className="mt-12">
            <FeaturedProject
              project={featuredProject}
            />
          </div>
        )}

        <ProjectStats />

        <ProjectsToolbar
          search={search}
          onSearch={setSearch}
          category={category}
          categories={categories}
          onCategory={setCategory}
          sort={sort}
          onSort={setSort}
        />

        <div className="mt-16">
          <ProjectsGrid
            projects={projects}
          />
        </div>

        <ProjectsCTA />

      </Container>
    </Section>
  );
}