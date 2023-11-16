import Logo from "@/app/_components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const loggedin = false;

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container flex items-center space-x-2 py-3">
        <Logo className="mr-auto" />

        <Link
          href="/sign in"
          className={cn(
            buttonVariants({
              size: "sm",
              variant: "outline",
            }),
            loggedin ? "hidden" : "null"
          )}
        >
          Login
        </Link>
        <Link
          href="/sign-up"
          className={buttonVariants({
            size: "sm",
          })}
        >
          {loggedin ? "Dashboard" : "Get started for free"}
        </Link>
      </div>
    </nav>
  );
}
