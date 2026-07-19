type SortOption =
  | "featured"
  | "newest"
  | "oldest"
  | "alphabetical";

type Props = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

export default function SortDropdown({
  value,
  onChange,
}: Props) {
  return (
    <div className="w-full sm:w-64">

      <label
        htmlFor="project-sort"
        className="mb-2 block text-sm font-medium text-[var(--muted)]"
      >
        Sort Projects
      </label>

      <select
        id="project-sort"
        value={value}
        onChange={(e) =>
          onChange(e.target.value as SortOption)
        }
        className="
          w-full
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          px-4
          py-3
          text-[var(--text)]
          outline-none
          transition-all
          duration-300
          focus:border-[var(--primary)]
        "
      >
        <option value="featured">
           Featured First
        </option>

        <option value="newest">
           Newest First
        </option>

        <option value="oldest">
           Oldest First
        </option>

        <option value="alphabetical">
           Alphabetical
        </option>
      </select>

    </div>
  );
}