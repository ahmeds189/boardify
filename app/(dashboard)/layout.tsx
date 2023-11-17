import { type PropsWithChildren } from "react";
import Navbar from "./_components/navbar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-[100vh] bg-muted">
      <Navbar />
      {children}
    </div>
  );
}
