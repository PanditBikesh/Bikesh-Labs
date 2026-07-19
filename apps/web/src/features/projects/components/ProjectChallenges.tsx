import { TriangleAlert } from "lucide-react";

type Props = {
  challenges: string[];
};

export default function ProjectChallenges({
  challenges,
}: Props) {
  return (
    <div>

      <h3 className="mb-4 text-xl font-semibold">
        Challenges
      </h3>

      <ul className="grid gap-4 md:grid-cols-2">
        {challenges.map((challenge) => (
            <li
            key={challenge}
            className="
                flex items-center gap-3
                rounded-xl
                border border-[var(--border)]
                bg-[var(--surface)]/50
                p-4
            "
            >
            <TriangleAlert className="h-5 w-5 text-amber-400" />
            <span>{challenge}</span>
            </li>
        ))}
      </ul>

    </div>
  );
}