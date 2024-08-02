import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import NavigationLink from "./NavigationLink";

export default function NavigationMenuMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex h-full flex-col items-center justify-center gap-5">
          <VisuallyHidden>
            <SheetTitle>This is navigation menu mobile</SheetTitle>
            <SheetDescription>This is description menu mobile</SheetDescription>
          </VisuallyHidden>
          {/* links */}
          <NavigationLink menu="mobile" />
          <a href="#" className="inline-block w-full max-w-fit">
            <Button className="rounded-full px-8 py-6">My Account</Button>
          </a>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
