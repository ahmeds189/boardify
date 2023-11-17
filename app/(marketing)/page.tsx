"use client";
import { Medal } from "lucide-react";
import RedirectLink from "../_components/redirect-link";
import { useAuth } from "@clerk/nextjs";

export default function MarketingPage() {
  const { isSignedIn } = useAuth();

  return (
    <div className="container mt-20 md:mt-28 relative space-y-6 text-center">
      <div className="circle absolute w-32 h-32 md:left-2/3 md:top-28"></div>

      <div className="text-sm bg-amber-100 text-amber-700 inline-block p-2 shadow-sm rounded-full font-semibold">
        <Medal className="inline-block h-5 w-5 mr-2" />
        NO 1 TASK MANAGMENT
      </div>
      <h1 className="mx-auto tracking-tight leading-[3rem] sm:leading-[4rem] text-4xl sm:text-5xl sm:max-w-xl font-bold">
        manage your projects and tasks with &nbsp;
        <span className="bg-gradient-to-br from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
          ease.
        </span>
      </h1>
      <p className="max-w-md mx-auto text-sm sm:text-lg text-muted-foreground">
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify.
      </p>
      <RedirectLink
        href={isSignedIn ? "dashboard" : "dashboard/sign-up"}
        title={isSignedIn ? "Dashboard" : "Get started for free"}
        size="lg"
      />
    </div>
  );
}
