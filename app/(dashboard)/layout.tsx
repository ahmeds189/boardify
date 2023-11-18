import { type PropsWithChildren } from "react";
import { UserButton } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Sidebar from "./_components/sidebar";
import MobileSidebar from "./_components/mobile-sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-[100vh] bg-muted flex flex-col">
      <Navbar className="flex space-x-2" isMobile>
        <UserButton afterSignOutUrl="/" />
      </Navbar>
      <main className="flex flex-1 md:space-x-4 container mt-10">
        <Sidebar className="hidden md:block" />
        <MobileSidebar />
        {children}
      </main>
    </div>
  );
}
