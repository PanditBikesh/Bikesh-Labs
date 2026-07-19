import CategoryFilter from "./CategoryFilter";
import ProjectSearch from "./ProjectSearch";
import SortDropdown from "./SortDropdown";

type Props = {
  search: string;
  onSearch: (value: string) => void;

  category: string;
  categories: string[];
  onCategory: (value: string) => void;

  sort:
    | "featured"
    | "newest"
    | "oldest"
    | "alphabetical";

  onSort: (
    value:
      | "featured"
      | "newest"
      | "oldest"
      | "alphabetical"
  ) => void;
};

export default function ProjectsToolbar({
  search,
  onSearch,

  category,
  categories,
  onCategory,

  sort,
  onSort,
}: Props) {
  return (
    <div className="mt-16">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

        <div className="flex-1">
          <ProjectSearch
            value={search}
            onChange={onSearch}
          />
        </div>

        <SortDropdown
          value={sort}
          onChange={onSort}
        />

      </div>

      <CategoryFilter
        categories={categories}
        activeCategory={category}
        onChange={onCategory}
      />

    </div>
  );
}