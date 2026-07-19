import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function ProjectSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative mt-14">

      <Search
        className="
          absolute
          left-5
          top-1/2
          h-5
          w-5
          -translate-y-1/2
          text-[var(--muted)]
        "
      />

      <input
        type="text"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search projects..."
        className="
          w-full
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          py-4
          pl-14
          pr-5
          text-[var(--text)]
          outline-none
          transition-all
          duration-300
          focus:border-[var(--primary)]
        "
      />

    </div>
  );
}