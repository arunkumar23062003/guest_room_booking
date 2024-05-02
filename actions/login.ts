"use server"
import { LoginSchema } from "@/_schema/authschema";
import { z } from "zod";
import { signIn } from "@/auth";

export const Login = async (data: z.infer<typeof LoginSchema>) => {
  try {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
    });
  } catch (err) {
    console.log(err);
  }
};
