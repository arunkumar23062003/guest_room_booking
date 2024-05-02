"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { CardWrapper } from "./cardwrapper-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/_schema/authschema";
import { SignUpJsonData } from "@/jsondata/auth-json";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { Merriweather } from "next/font/google";
import { toast } from "sonner";

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      password: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {
    try {
      const response = await axios.post("/api/auth/register", values);
      if (response.status === 201) {
        toast.success("Successfully registered", {
          duration: 4000,
          position: "top-center",
        });
        form.reset();
      }
      console.log(response);
    } catch (err: any) {
      toast.info(err.response.data.message);
    }
  };

  return (
    <CardWrapper headerLabel="Create an account">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {SignUpJsonData.map((data, index) => (
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
                        isRing={true}
                        isPassword={data.name === "password"}
                        {...field}
                        type={data.type}
                        placeholder={data.placeholder}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          ))}
          <div>
            <Link
              href="/auth/login"
              className={`text-black text-sm text-muted-foreground w-full flex justify-center ${merriweather.className}`}
            >
              Already an User?Login
            </Link>
          </div>

          <Button type="submit" className="w-full bg-[#003C43]">
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default SignUpForm;
