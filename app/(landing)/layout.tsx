"use client";
import { type PropsWithChildren } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function RootLayout({ children }: PropsWithChildren) {
  const { userId } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <Navbar>
        {userId ? (
          <UserButton />
        ) : (
          <Link
            href="/sign-in"
            className={cn(buttonVariants({ size: "sm", variant: "outline" }))}
          >
            Login
          </Link>
        )}
      </Navbar>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
