import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconType } from "react-icons/lib";
import NavLinks from "../ui/NavLinks";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../ui/Logo";

interface MenuProps {
  opener: IconType;
}

const NavMenu: React.FC<MenuProps> = ({ opener: Icon }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Icon size={25} color="#2f29c4" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 py-8">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div>
          <Logo />
        </div>
        <div>
          <NavLinks />
        </div>
        <div>
          <Button text="Start Billify" icon={FaArrowRight} fullyRounded />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenu;
