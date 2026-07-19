import Badge from "@/shared/components/ui/Badge";

export default function HeroBadge() {
  return (
    <Badge>
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
        </span>

        <span className="sr-only">
          Available for opportunities
        </span>

        <span className="text-sm font-medium">
          Available for AI/ML Projects • Freelance • Internships
        </span>
      </div>
    </Badge>
  );
}