type Props = {
  technologies: string[];
};

export default function ProjectTags({
  technologies,
}: Props) {

  const visible = technologies.slice(0, 4);

  const remaining =
    technologies.length - visible.length;

  return (
    <div className="mt-6 flex flex-wrap gap-2">

      {visible.map((technology) => (

        <span
          key={technology}
          className="
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--surface)]
            px-3
            py-1
            text-xs
            font-medium
            text-[var(--text)]
            transition-all
            duration-300
            hover:border-blue-500
            hover:text-[var(--primary)]
          "
        >
          {technology}
        </span>

      ))}

      {remaining > 0 && (

        <span
          className="
            rounded-full
            bg-blue-500
            px-3
            py-1
            text-xs
            font-semibold
            text-[var(--text)]
          "
        >
          +{remaining}
        </span>

      )}

    </div>
  );
}