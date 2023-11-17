import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        className,
        "flex items-center space-x-2 duration-200 hover:opacity-75"
      )}
    >
      <Image src={logo} alt="logo" width="42" priority />
      <p className="text-lg font-semibold hidden sm:block">Boardify</p>
    </Link>
  );
}
