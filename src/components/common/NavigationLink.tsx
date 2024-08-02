import { navigationLinks } from "@/data/NavigationLinks";
import { cn } from "@/lib/utils";
type Props = {
  menu: "mobile" | "desktop";
};
export default function NavigationLink({ menu }: Props) {
  return (
    <ul
      className={cn("mx-auto flex w-full items-center justify-center", {
        "flex-col gap-8": menu === "mobile",
        "hidden flex-row gap-12 md:flex": menu === "desktop",
      })}
    >
      {navigationLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            className="text-black/80 transition hover:font-bold hover:text-black"
          >
            {link.linkName}
          </a>
        </li>
      ))}
    </ul>
  );
}
