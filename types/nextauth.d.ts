import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
      token: string;
    } & DefaultSession["user"];
  }
}
