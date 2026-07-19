import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
};

export default function FadeIn({
  children,
  delay = 0,
}: Props) {
  return (
    <div
      className="animate-fade-in"
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

