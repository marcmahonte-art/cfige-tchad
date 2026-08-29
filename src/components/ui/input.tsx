import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-[8px] border border-gray-300 bg-white px-3.5 py-3 text-[16px] text-gray-900 placeholder:text-gray-400 transition-colors focus-visible:border-primary focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)] focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
