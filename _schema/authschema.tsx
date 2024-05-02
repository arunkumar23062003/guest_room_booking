import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(8, { message: "Password is required" }),
  email: z.string().email({ message: "Email is required" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(8, { message: "Password is required" }),
});
