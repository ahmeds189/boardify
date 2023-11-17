import { type PropsWithChildren } from "react";
import Sidebar from "../_components/sidebar";

export default function OrganizationLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex mt-10 flex-1 container">
      <Sidebar />
      {children}
    </main>
  );
}
