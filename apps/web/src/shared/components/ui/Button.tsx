import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  `
  inline-flex
  items-center
  justify-center
  gap-2
  cursor-pointer
  rounded-xl
  font-semibold
  transition-all
  duration-300

  hover:-translate-y-0.5
  active:translate-y-0

  focus:outline-none
  focus:ring-2
  focus:ring-[var(--primary)]
  focus:ring-offset-2

  disabled:pointer-events-none
  disabled:cursor-not-allowed
  disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--primary)] text-white shadow-md hover:opacity-90 hover:shadow-lg",

        secondary:
          "bg-[var(--surface-light)] text-[var(--text)] hover:bg-[var(--primary)] hover:text-white",

        outline:
          "border border-[var(--border)] bg-transparent text-[var(--text)] hover:border-[var(--primary)] hover:bg-[var(--surface-light)]",

        ghost:
          "bg-transparent text-[var(--text)] hover:bg-[var(--surface-light)]",

        gradient:
          "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90",
      },

      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-11 px-6",
        lg: "h-12 px-8 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
  };

export default function Button({
  children,
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        buttonVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}