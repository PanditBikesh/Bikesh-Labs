import { ChevronDown } from "lucide-react";

export default function HeroScroll() {
  function scrollToNext() {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="mt-20 flex justify-center">
      <button
        type="button"
        onClick={scrollToNext}
        aria-label="Scroll to About section"
        className="
          group
          flex
          flex-col
          items-center
          gap-3
          text-[var(--muted)]
          transition-colors
          duration-300
          hover:text-[var(--primary)]
        "
      >
        <span className="text-sm font-medium uppercase tracking-widest">
          Scroll Down
        </span>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[var(--border)]
            transition-colors
            duration-300
            group-hover:border-[var(--primary)]
            group-hover:bg-[var(--primary)]/10
            animate-bounce
          "
        >
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>
    </div>
  );
}