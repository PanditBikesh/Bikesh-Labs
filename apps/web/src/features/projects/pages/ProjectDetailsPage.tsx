import { Navigate, useParams } from "react-router-dom";

import { SEO } from "@/shared/seo";

import { projects } from "../data";

import ProjectArchitecture from "../components/detail/ProjectArchitecture";
import ProjectBreadcrumb from "../components/detail/ProjectBreadcrumb";
import ProjectChallenges from "../components/detail/ProjectChallenges";
import ProjectFeatureList from "../components/detail/ProjectFeatureList";
import ProjectFuture from "../components/detail/ProjectFuture";
import ProjectGallery from "../components/detail/ProjectGallery";
import ProjectHero from "../components/detail/ProjectHero";
import ProjectNavigation from "../components/detail/ProjectNavigation";
import ProjectOverview from "../components/detail/ProjectOverview";
import ProjectProblem from "../components/detail/ProjectProblem";
import ProjectSidebar from "../components/detail/ProjectSidebar";
import ProjectSolution from "../components/detail/ProjectSolution";
import ProjectTableOfContents from "../components/detail/ProjectTableOfContents";
import ProjectTechnology from "../components/detail/ProjectTechnology";
import RelatedProjects from "../components/detail/RelatedProjects";

export default function ProjectDetailsPage() {
  const { slug } = useParams();

  const project = projects.find(
    ({ slug: projectSlug }) => projectSlug === slug
  );

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
      />

      <main className="mx-auto max-w-7xl px-6 py-20">

        <ProjectBreadcrumb
          title={project.title}
        />

        <div className="grid gap-12 lg:grid-cols-[2fr_360px]">

          <div className="space-y-12">

            <ProjectHero project={project} />

            <ProjectOverview project={project} />

            <ProjectProblem project={project} />

            <ProjectSolution project={project} />

            <ProjectArchitecture project={project} />

            <ProjectFeatureList project={project} />

            <ProjectTechnology project={project} />

            <ProjectChallenges project={project} />

            <ProjectGallery project={project} />

            <ProjectFuture project={project} />

            <RelatedProjects
              currentProject={project}
            />

            <ProjectNavigation
              currentProject={project}
            />

          </div>

          <aside className="space-y-6">

            <ProjectTableOfContents />

            <ProjectSidebar
              project={project}
            />

          </aside>

        </div>

      </main>
    </>
  );
}