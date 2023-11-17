"use client";
import Logo from "@/app/_components/logo";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="bg-background shadow-sm border-b">
      <div className="container flex items-center space-x-1 py-3">
        <Logo className="mr-auto" />
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterSelectOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
