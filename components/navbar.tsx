"use client";

import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { type ReactNode } from "react";
import { Button } from "./ui/button";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";

type Props = {
  children: ReactNode;
  isMobile?: boolean;
  className?: string;
};

export default function Navbar({ children, isMobile, className }: Props) {
  const onOpen = useMobileSidebar((state) => state.onOpen);

  return (
    <nav className="bg-background shadow-sm border-b">
      <div className="container flex items-center space-x-2 py-3 w-full">
        <div className="mr-auto flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onOpen}
            className={cn("md:hidden h-8 w-8", !isMobile && "hidden")}
          >
            <Menu />
          </Button>
          <Logo className="mr-auto" />
        </div>
        <div className={className}>{children}</div>
      </div>
    </nav>
  );
}
