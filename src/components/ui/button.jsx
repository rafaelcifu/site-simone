import * as React from "react";
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-base font-semibold whitespace-nowrap transition-all duration-300 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red)]/90 shadow-md hover:shadow-lg active:scale-95",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border-2 border-[var(--brand-red)] bg-transparent text-[var(--brand-red)] hover:bg-[var(--brand-red)] hover:text-white active:scale-95",
        secondary:
          "border-2 border-[var(--brand-purple)] bg-transparent text-[var(--brand-purple)] hover:bg-[var(--brand-purple)] hover:text-white active:scale-95",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-4 has-[>svg]:px-6",
        xs: "h-8 gap-1 px-3 text-xs has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4",
        sm: "h-10 gap-1.5 px-6 has-[>svg]:px-4",
        lg: "h-14 px-10 has-[>svg]:px-8 text-lg",
        icon: "size-12",
        "icon-xs": "size-8 [&_svg:not([class*='size-'])]:size-4",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
