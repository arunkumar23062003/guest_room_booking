"use client";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

interface headerProps {
  label: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Header = ({ label }: headerProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className={cn("font-semibold text-3xl", font.className)}> 🔐 Auth</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default Header;
