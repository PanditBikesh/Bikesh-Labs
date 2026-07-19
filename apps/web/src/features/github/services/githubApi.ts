import type {
  GithubRepo,
  GithubUser,
} from "../types/github";

const USERNAME = "PanditBikesh";

const API = "https://api.github.com/users";

export async function getGithubUser(): Promise<GithubUser> {
  const response = await fetch(`${API}/${USERNAME}`);

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub user.");
  }

  return response.json();
}

export async function getGithubRepos(): Promise<GithubRepo[]> {
  const response = await fetch(
    `${API}/${USERNAME}/repos?sort=updated&per_page=6`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories.");
  }

  return response.json();
}