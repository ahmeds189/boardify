import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  isMobile?: boolean;
  className?: string;
};

export default function Navbar({ children, isMobile, className }: Props) {
  return (
    <nav className="bg-background shadow-sm border-b">
      <div className="container flex items-center space-x-2 py-3 w-full">
        <div className="mr-auto flex items-center">
          <Menu className={cn("md:hidden mr-3", !isMobile && "hidden")} />
          <Logo className="mr-auto" />
        </div>
        <div className={className}>{children}</div>
      </div>
    </nav>
  );
}
