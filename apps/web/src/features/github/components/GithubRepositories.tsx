import { FadeIn } from "@/shared/animations";

import {
  Container,
  Section,
} from "@/shared/components/ui";

import useGithub from "../hooks/useGithub";
import RepositoryCard from "./RepositoryCard";

export default function GithubRepositories() {
  const {
    repos,
    loading,
  } = useGithub();

  if (loading) {
    return (
      <Container>
        <p>Loading repositories...</p>
      </Container>
    );
  }

  return (
    <FadeIn>
      <Section>
        <Container>

          <h2 className="mb-8 text-3xl font-bold">
            Latest GitHub Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            {repos.map((repo) => (
              <RepositoryCard
                key={repo.id}
                repo={repo}
              />
            ))}

          </div>

        </Container>
      </Section>
    </FadeIn>
  );
}