import { type PropsWithChildren } from "react";
import { UserButton } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Sidebar from "./_components/sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-[100vh] bg-muted ">
      <Navbar className="flex space-x-2">
        <UserButton afterSignOutUrl="/" />
      </Navbar>
      <main className="flex space-x-4 container mt-10">
        <Sidebar />
        {children}
      </main>
    </div>
  );
}
