import { useMemo, useState } from "react";

import { projects } from "../data";

export default function useProjectSearch() {
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const keyword = query.toLowerCase().trim();

    if (!keyword) {
      return projects;
    }

    return projects.filter((project) => {
      return (
        project.title.toLowerCase().includes(keyword) ||
        project.category.toLowerCase().includes(keyword) ||
        project.description.toLowerCase().includes(keyword) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(keyword)
        )
      );
    });
  }, [query]);

  return {
    query,
    setQuery,
    filteredProjects,
  };
}