import { type PropsWithChildren } from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-[100svh] bg-slate-50">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
