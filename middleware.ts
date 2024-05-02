import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { privateRoute, authRoute, apiAuthPrefix, DEFAULT_LOGIN_REDIRECT } from "./routes";
import { cookies } from "next/headers";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req?.auth;
  const { nextUrl, auth } = req!;
  console.log(req.nextUrl);
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoute.includes(nextUrl.pathname);
  const isPrivateRoute = privateRoute.includes(nextUrl.pathname);
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  console.log(cookies());
  // const role = cookieStore.get("role");
  // console.log(role);
  console.log(isAuthRoute);
  if (isApiAuthRoute) {
    return;
  }
  if (isAuthRoute) {
    console.log("It is auth route");
    if (isLoggedIn) {
      console.log("it is logged in");
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }
  if (!isLoggedIn || !token) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }
  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
