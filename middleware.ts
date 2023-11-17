import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req) {
    // handle redirect if no session
    if (!auth.userId && !auth.isPublicRoute)
      return redirectToSignIn({ returnBackUrl: req.url });

    // handle if there is session but no org selected
    if (
      auth.userId &&
      !auth.orgId &&
      req.nextUrl.pathname !== "/select-org" &&
      req.nextUrl.pathname !== "/"
    ) {
      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
