import { type PropsWithChildren } from "react";
import Sidebar from "../_components/sidebar";

export default function OrganizationLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  );
}
