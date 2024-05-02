"use client";
import Cookies from "js-cookie";
import { LoginSchema } from "@/_schema/authschema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { LoginJsonData } from "@/jsondata/auth-json";
import { Input } from "../ui/input";
import { CardWrapper } from "./cardwrapper-form";
import { Button } from "../ui/button";
import Link from "next/link";
import { Merriweather } from "next/font/google";
import axios from "axios";
import { toast } from "sonner";
import { Login } from "@/actions/login";

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);
    // console.log(values);

    await Login(values)
  };

  return (
    <CardWrapper headerLabel="Welcome Back 😃">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {LoginJsonData.map((data, index) => {
            return (
              <FormField
                key={index}
                name={data.name as any}
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>{data.label}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={data.placeholder}
                          isRing={false}
                          isPassword={data.name === "password"}
                          type={data.type}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            );
          })}
          <div className="flex justify-center">
            <Link
              href="/auth/register"
              className={`${merriweather.className} text-sm text-muted-foreground`}
            >
              Create an account
            </Link>
          </div>
          <Button className="w-full bg-[#003C43]">Login</Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
