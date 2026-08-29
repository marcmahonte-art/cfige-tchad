import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[120px] w-full rounded-[8px] border border-gray-300 bg-white px-3.5 py-3 text-[16px] text-gray-900 placeholder:text-gray-400 transition-colors focus-visible:border-primary focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)] focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
