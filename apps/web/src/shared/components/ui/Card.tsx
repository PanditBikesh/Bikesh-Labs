import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import clsx from "clsx";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Card({
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        `
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        backdrop-blur
        shadow-lg
        transition-all
        duration-300

        before:pointer-events-none
        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-[var(--primary)]/5
        before:to-transparent
        before:opacity-0
        before:transition-opacity
        before:duration-300

        hover:before:opacity-100
        `,
        className
      )}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}