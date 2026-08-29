import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
  {
    variants: {
      variant: {
        primary: "bg-primary-light text-primary-dark",
        secondary: "bg-gray-100 text-gray-700",
        success: "bg-[#dcfce7] text-[#166534]",
        warning: "bg-[#fef3c7] text-[#92400e]",
        info: "bg-[#dbeafe] text-[#1d4ed8]",
        outline: "border border-gray-200 text-gray-600",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
