import { navigation } from "@/shared/data/navigation";

import NavigationLink from "./NavLink";

export default function NavDesktop() {
  return (
    <nav
      aria-label="Primary navigation"
      className="
        hidden
        items-center
        gap-7
        lg:flex
        xl:gap-9
      "
    >
      {navigation.map((item) => (
        <NavigationLink
          key={item.href}
          to={item.href}
        >
          {item.label}
        </NavigationLink>
      ))}
    </nav>
  );
}