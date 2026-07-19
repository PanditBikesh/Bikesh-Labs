import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Heading({
  children,
  className,
}: Props) {
  return (
    <h2
      className={clsx(
        `
        text-4xl
        font-bold
        tracking-tight
        text-[var(--text)]

        md:text-5xl
        `,
        className
      )}
    >
      {children}
    </h2>
  );
}