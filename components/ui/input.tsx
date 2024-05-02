'use client';
import * as React from "react";
import { cn } from "@/lib/utils";
import { MdRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isRing: boolean;
  isPassword?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isPassword, isRing, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

    const EyeIcon = showPassword ? MdRemoveRedEye : FaEyeSlash;

    return (
      <div className="relative w-full h-full">
        <input
          type={isPassword && showPassword ? "text" : type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            isRing ? "ring-2 ring-ring ring-offset-2" : "",
            isRing ? "focus-visible:ring-2" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {isPassword && (
          <span 
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={togglePasswordVisibility}
          >
            <EyeIcon className="text-gray-400" />
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
