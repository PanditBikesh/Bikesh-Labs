import { useEffect, useState } from "react";

import {
  getGithubRepos,
  getGithubUser,
} from "../services/githubApi";

import type {
  GithubRepo,
  GithubUser,
} from "../types/github";

export default function useGithub() {
  const [user, setUser] = useState<GithubUser | null>(null);

  const [repos, setRepos] = useState<GithubRepo[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [userData, repoData] = await Promise.all([
          getGithubUser(),
          getGithubRepos(),
        ]);

        setUser(userData);

        setRepos(repoData);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    user,
    repos,
    loading,
  };
}