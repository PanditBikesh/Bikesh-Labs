import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="Bikesh Labs Home"
      className="
        group
        inline-flex
        items-center
        text-2xl
        font-black
        tracking-tight
        transition-transform
        duration-300
        hover:scale-[1.02]
        md:text-3xl
      "
    >
      <span className="text-[var(--text)]">
        Bikesh
      </span>

      <span
        className="
          ml-1
          text-[var(--primary)]
          transition-opacity
          duration-300
          group-hover:opacity-80
        "
      >
        Labs
      </span>
    </Link>
  );
}