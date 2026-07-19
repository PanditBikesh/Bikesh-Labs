import type { ReactNode } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

type NavigationLinkProps = {
  to: string;
  children: ReactNode;
};

export default function NavigationLink({
  to,
  children,
}: NavigationLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          `
            group
            relative
            inline-flex
            items-center
            py-2
            text-sm
            font-medium
            transition-all
            duration-300
            hover:-translate-y-0.5
          `,
          isActive
            ? "text-[var(--primary)]"
            : "text-[var(--muted)] hover:text-[var(--primary)]"
        )
      }
    >
      {({ isActive }) => (
        <>
          {children}

          <span
            className={clsx(
              `
                absolute
                -bottom-0.5
                left-0
                h-0.5
                rounded-full
                bg-[var(--primary)]
                transition-all
                duration-300
              `,
              isActive
                ? "w-full"
                : "w-0 group-hover:w-1/2"
            )}
          />
        </>
      )}
    </NavLink>
  );
}