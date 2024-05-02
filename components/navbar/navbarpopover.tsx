'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuSlidersHorizontal } from "react-icons/lu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Merriweather } from "next/font/google";
import { MdAccountCircle } from "react-icons/md";
import { signOut } from "next-auth/react";

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export function MyAccountButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-[#003C43] p-0">
          <MdAccountCircle className="text-2xl sm:text-3xl md:hidden" />
          <div className="bg-white hidden md:flex text-[#003C43] items-center gap-2 p-1 rounded-xl">
            <LuSlidersHorizontal />
            <MdAccountCircle className="text-2xl text-gray-500 sm:text-3xl" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-32">
        <div
          className={`text-sm flex flex-col space-y-2 ${merriweather.className}`}
        >
          <div>
            <Link href="/auth/register">SignUp</Link>
          </div>
          <div>
            <Link href="/auth/login">Login</Link>
          </div>
          <div
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
