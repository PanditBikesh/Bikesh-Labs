import { Sparkles } from "lucide-react";

type Props = {
  featured?: boolean;
};

export default function FeaturedBadge({
  featured,
}: Props) {
  if (!featured) {
    return null;
  }

  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        transition-all
        duration-300
        hover:scale-105
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        px-4
        py-1.5
        text-sm
        font-semibold
        text-[var(--text)]
      "
    >
      <Sparkles className="h-4 w-4" />
      Featured Project
    </div>
  );
}