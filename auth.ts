import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { cookies } from "next/headers";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  events: {
    async signOut() {
      console.log("hi");
    },
  },
  callbacks: {
    async session({ token, session, user }) {
      // console.log(token);
      if (session.user && token?.sub) {
        session.user.id = token.sub;
      }
      if (session.user && token?.role) {
        session.user.role = token.role;
      }
      // console.log(token);
      if (session.user && token?.token) {
        session.user.token = token.token;
      }
      // console.log(session);
      return session;
    },
    async jwt({ token, user, profile }) {
      const newUser = user as any;
      if (!token.sub) return token;
      if (!newUser) return token;
      token.role = newUser?.role;
      cookies().set("token", newUser?.token, {
        maxAge: 5 * 24 * 60 * 60 * 1000,
      });
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 5 * 24 * 60 * 60 * 1000,
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  ...authConfig,
});
