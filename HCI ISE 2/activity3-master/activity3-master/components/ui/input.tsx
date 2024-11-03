import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base shadow-md transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 file:border-0 file:bg-transparent file:text-base file:font-medium file:text-gray-700 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
