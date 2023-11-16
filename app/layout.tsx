import { type PropsWithChildren } from "react";
import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import { siteconfig } from "@/config/site";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteconfig.name,
    template: `%s | ${siteconfig.name}`,
  },
  description: siteconfig.description,
  icons: [{ url: "/logo.svg", href: "/logo.svg" }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
