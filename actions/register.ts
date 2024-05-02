import { SignUpSchema } from "@/_schema/authschema";
import { z } from "zod";

export const register = async (values: z.infer<typeof SignUpSchema>) => {
  console.log(values);
  return "Hi";
};
