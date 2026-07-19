export interface GithubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  html_url: string;

  followers: number;
  following: number;
  public_repos: number;

  location: string;
  blog: string;
  company: string;

  created_at: string;
}

export interface GithubRepo {
  id: number;

  name: string;

  html_url: string;

  description: string;

  language: string;

  stargazers_count: number;

  forks_count: number;

  updated_at: string;
}