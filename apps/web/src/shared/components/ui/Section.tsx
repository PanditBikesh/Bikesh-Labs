import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import clsx from "clsx";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={clsx(
        "py-16 sm:py-20 lg:py-24",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}