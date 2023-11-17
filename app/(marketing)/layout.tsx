import { type PropsWithChildren } from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-[100svh] bg-muted">
      <Navbar />
      <main className="flex-1 container">{children}</main>
      <Footer />
    </div>
  );
}
