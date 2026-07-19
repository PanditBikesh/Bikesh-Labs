import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PageTransition({
  children,
}: Props) {
  return (
    <main className="animate-page-transition">
      {children}
    </main>
  );
}