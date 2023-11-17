import { type PropsWithChildren } from "react";
import Navbar from "./_components/navbar";

export default function OrganizationLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-[100vh] bg-muted">
      <Navbar />
      {children}
      <aside>sideebar</aside>
    </div>
  );
}
