import { useMemo, useState } from "react";

import { projects } from "../data";

export default function useProjectFilter() {
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(projects.map((project) => project.category)),
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (category === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === category
    );
  }, [category]);

  return {
    category,
    setCategory,
    categories,
    filteredProjects,
  };
}