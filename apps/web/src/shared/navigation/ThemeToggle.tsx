import { Moon, Sun } from "lucide-react";

import useTheme from "@/core/providers/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[var(--primary)]
        hover:shadow-lg
      "
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-[var(--text)]" />
      )}
    </button>
  );
}