import clsx from "clsx";

import { FadeIn } from "@/shared/animations";
import { Heading } from "@/shared/components/ui";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
}: Props) {
  return (
    <FadeIn>
      <div
        className={clsx(
          "mb-16 max-w-3xl",
          align === "center"
            ? "mx-auto text-center"
            : "text-left"
        )}
      >
        <div
          className={clsx(
            "mb-6 h-1 w-16 rounded-full bg-[var(--primary)]",
            align === "center" && "mx-auto"
          )}
        />

        <Heading>
          {title}
        </Heading>

        {subtitle && (
          <p
            className={clsx(
              "mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  );
}