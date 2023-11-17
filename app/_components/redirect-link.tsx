import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
  className?: string;
  hidden?: boolean;
  variant?: "default" | "outline";
  size?: "sm" | "lg";
};

export default function RedirectLink({
  href,
  title,
  className,
  hidden,
  variant = "default",
  size = "sm",
}: Props) {
  return (
    <Link
      className={cn(
        buttonVariants({ size: size, variant: variant }),
        hidden ? "hidden" : "inline-flex",
        className
      )}
      href={href}
    >
      {title}
    </Link>
  );
}
