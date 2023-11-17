import { type PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center items-center min-h-[100svh]">
      {children}
    </div>
  );
}
