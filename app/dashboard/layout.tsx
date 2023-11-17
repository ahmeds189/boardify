import { ClerkProvider } from "@clerk/nextjs";
import { type PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}