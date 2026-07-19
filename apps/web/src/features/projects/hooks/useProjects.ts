import { useMemo, useState } from "react";

import { projects } from "../data";

type SortOption =
  | "featured"
  | "newest"
  | "oldest"
  | "alphabetical";

const ALL_CATEGORY = "All";

export default function useProjects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState(ALL_CATEGORY);
  const [sort, setSort] =
    useState<SortOption>("featured");

  const categories = useMemo(
    () => [
      ALL_CATEGORY,
      ...new Set(
        projects.map(({ category }) => category)
      ),
    ],
    []
  );

  const filteredProjects = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    let filteredProjects = [...projects];

    if (keyword) {
      filteredProjects = filteredProjects.filter(
        ({
          title,
          description,
          category,
          technologies,
        }) =>
          title.toLowerCase().includes(keyword) ||
          description.toLowerCase().includes(keyword) ||
          category.toLowerCase().includes(keyword) ||
          technologies.some((technology) =>
            technology
              .toLowerCase()
              .includes(keyword)
          )
      );
    }

    if (category !== ALL_CATEGORY) {
      filteredProjects = filteredProjects.filter(
        (project) =>
          project.category === category
      );
    }

    switch (sort) {
      case "alphabetical":
        filteredProjects.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "newest":
        filteredProjects.sort(
          (a, b) =>
            Number(b.year ?? 0) -
            Number(a.year ?? 0)
        );
        break;

      case "oldest":
        filteredProjects.sort(
          (a, b) =>
            Number(a.year ?? 0) -
            Number(b.year ?? 0)
        );
        break;

      case "featured":
      default:
        filteredProjects.sort(
          (a, b) =>
            Number(b.featured) -
            Number(a.featured)
        );
    }

    return filteredProjects;
  }, [search, category, sort]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
    categories,
    projects: filteredProjects,
  };
}