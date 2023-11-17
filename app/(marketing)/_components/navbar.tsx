"use client";

import Logo from "@/app/_components/logo";
import RedirectLink from "@/app/_components/redirect-link";
import { useAuth } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn, orgId } = useAuth();

  let session = "/sign-up";
  if (isSignedIn && !orgId) session = "/select-org";
  if (isSignedIn && orgId) session = `/organization/${orgId}`;

  return (
    <nav className="bg-background shadow-sm border-b">
      <div className="container flex items-center space-x-2 py-3">
        <Logo className="mr-auto" />

        <RedirectLink
          href="/sign-in"
          title="Login"
          hidden={isSignedIn}
          variant="outline"
        />
        <RedirectLink
          href={session}
          title={isSignedIn ? "Dashboard" : "Get started for free"}
        />
      </div>
    </nav>
  );
}
