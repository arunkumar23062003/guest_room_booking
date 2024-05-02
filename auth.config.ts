import { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";
import { LoginSchema } from "./_schema/authschema";
import clsx from "clsx";

export default {
  trustHost: true,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // console.log(credentials);
        const validateFields = LoginSchema.safeParse(credentials);
        if (validateFields.success) {
          const authResponse = await fetch(
            "http://localhost:3000/api/auth/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(credentials),
            }
          );
          // console.log(authResponse);
          if (!authResponse.ok) {
            return null;
          }
          const response = await authResponse.json();
          if (response.status) {
            // console.log(response);
            const user = response.data;
            user["token"] = response.authToken;
            return Promise.resolve(user);
          }
          return null;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
