type Props = {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">

      {categories.map((category) => {
        const active = category === activeCategory;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`
              rounded-full
              border
              px-5
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-300
              ${
                active
                  ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-lg"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
              }
            `}
          >
            {category}
          </button>
        );
      })}

    </div>
  );
}