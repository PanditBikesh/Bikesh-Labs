import { CheckCircle2 } from "lucide-react";

type Props = {
  features: string[];
};

export default function ProjectFeatures({
  features,
}: Props) {
  return (
    <div>

      <h3 className="mb-4 text-xl font-semibold">
        Key Features
      </h3>

      <ul className="grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
            <li
            key={feature}
            className="
                flex items-center gap-3
                rounded-xl
                border border-[var(--border)]
                bg-[var(--surface)]/50
                p-4
            "
            >
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <span>{feature}</span>
            </li>
        ))}
      </ul>

    </div>
  );
}