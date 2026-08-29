import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-[15px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)] disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-dark shadow-cfige-sm",
        outline:
          "border border-primary bg-white text-primary hover:bg-primary-light",
        secondary:
          "bg-secondary text-white hover:bg-gray-700",
        ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
        link: "text-primary underline-offset-4 hover:text-primary-dark hover:underline",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 px-4 text-sm",
        lg: "h-13 px-7",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
