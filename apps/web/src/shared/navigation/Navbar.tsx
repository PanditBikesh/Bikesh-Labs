import clsx from "clsx";

import { Container } from "@/shared/components/ui";
import useScroll from "@/shared/hooks/useScroll";

import Logo from "./Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const scrolled = useScroll();

  return (
    <header
      role="banner"
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? [
              "border-b border-[var(--border)]",
              "bg-[var(--background)]/85",
              "backdrop-blur-xl",
              "shadow-lg",
            ]
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <div className="flex items-center gap-3 sm:gap-4">
            <NavDesktop />

            <ThemeToggle />

            <NavMobile />
          </div>
        </div>
      </Container>
    </header>
  );
}