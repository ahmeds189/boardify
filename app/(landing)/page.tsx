import { Medal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function MarketingPage() {
  return (
    <div className="container mt-20 md:mt-28 relative space-y-6 text-center">
      <div className="circle absolute w-32 h-32 right-0 opacity-25 md:opacity-60"></div>
      <div className="circle absolute w-32 h-32 bottom-0 opacity-25 md:opacity-60"></div>
      <div className="text-sm bg-amber-100 text-amber-700 inline-block p-2 shadow-sm rounded-full font-semibold">
        <Medal className="inline-block h-5 w-5 mr-2" />
        NO 1 TASK MANAGMENT
      </div>
      <h1 className="mx-auto tracking-tight leading-[3rem] sm:leading-[4rem] text-4xl sm:text-5xl sm:max-w-xl font-bold">
        manage your projects and tasks with&nbsp;
        <span className="bg-gradient-to-br from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
          ease.
        </span>
      </h1>
      <p className="max-w-md mx-auto text-sm sm:text-lg text-muted-foreground">
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify.
      </p>
      <Link href="/sign-up" className={cn(buttonVariants({ size: "lg" }))}>
        Sign up
      </Link>
    </div>
  );
}