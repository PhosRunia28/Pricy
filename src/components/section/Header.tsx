import { Button } from "@/components/ui/button";
import LogoHeader from "../common/LogoHeader";
import NavigationLink from "../common/NavigationLink";
import NavigationMenuMobile from "../common/NavigationMenuMobile";
export default function Header() {
  return (
    <header className="container pt-5 font-dmSans lg:pt-8">
      <nav className="flex items-center justify-between gap-6">
        <LogoHeader />
        <NavigationLink menu="desktop" />
        <a href="#" className="hidden w-full max-w-fit md:inline-block">
          <Button className="rounded-full px-8 py-6">My Account</Button>
        </a>
        <div className="md:hidden">
          <NavigationMenuMobile />
        </div>
      </nav>
    </header>
  );
}
