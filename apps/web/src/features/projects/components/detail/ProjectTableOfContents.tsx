const sections = [
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "problem",
    title: "Problem",
  },
  {
    id: "solution",
    title: "Solution",
  },
  {
    id: "architecture",
    title: "Architecture",
  },
  {
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "challenges",
    title: "Challenges",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "future",
    title: "Future",
  },
];

export default function ProjectTableOfContents() {
  return (
    <div
      className="
        sticky
        top-8
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-6
      "
    >
      <h3 className="mb-6 text-xl font-bold">
        Project Contents
      </h3>

      <nav className="space-y-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="
              block
              rounded-xl
              px-3
              py-2
              text-sm
              transition
              hover:bg-[var(--surface-light)]
            "
          >
            {section.title}
          </a>
        ))}
      </nav>
    </div>
  );
}