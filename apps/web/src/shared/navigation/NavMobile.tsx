import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation } from "@/shared/data/navigation";

import NavigationLink from "./NavLink";

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
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
          text-[var(--text)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-[var(--primary)]
          hover:text-[var(--primary)]
          hover:shadow-lg
        "
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {open && (
        <div
          id="mobile-navigation"
          className="
            fixed
            inset-x-4
            top-24
            z-50
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--surface)]/95
            p-6
            shadow-2xl
            backdrop-blur-xl
            sm:inset-x-8
          "
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-2"
          >
            {navigation.map((item) => (
              <div
                key={item.href}
                onClick={() => setOpen(false)}
                className="
                  rounded-xl
                  transition-colors
                  duration-300
                  hover:bg-[var(--surface-light)]
                "
              >
                <NavigationLink to={item.href}>
                  {item.label}
                </NavigationLink>
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}