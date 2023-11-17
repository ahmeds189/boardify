"use client";

import Logo from "@/app/_components/logo";
import RedirectLink from "@/app/_components/redirect-link";
import { useAuth } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container flex items-center space-x-2 py-3">
        <Logo className="mr-auto" />

        <RedirectLink
          href="dashboard/sign-in"
          title="Login"
          hidden={isSignedIn}
          variant="outline"
        />
        <RedirectLink
          href={isSignedIn ? "dashboard" : "dashboard/sign-up"}
          title={isSignedIn ? "Dashboard" : "Get started for free"}
        />
      </div>
    </nav>
  );
}
