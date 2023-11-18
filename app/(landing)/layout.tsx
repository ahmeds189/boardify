import { type PropsWithChildren } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <Navbar>
        <Link
          href="/sign-in"
          className={cn(buttonVariants({ size: "sm", variant: "outline" }))}
        >
          Login
        </Link>
      </Navbar>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
