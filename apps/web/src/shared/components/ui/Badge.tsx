import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Badge({
  children,
  className,
}: Props) {
  return (
    <span
      className={clsx(
        `
        inline-flex
        items-center
        rounded-full

        border
        border-[var(--border)]

        bg-[var(--primary)]/10

        px-4
        py-1.5

        text-sm
        font-medium
        text-[var(--primary)]

        transition-colors
        duration-300

        hover:bg-[var(--primary)]/15
        `,
        className
      )}
    >
      {children}
    </span>
  );
}