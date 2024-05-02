import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { env } from "process";

dotenv.config();

export const generateToken = (credentials: any) => {
  const token = jwt.sign({ credentials }, "Arun54321", {
    expiresIn: "30d",
  });
  return token;
};
