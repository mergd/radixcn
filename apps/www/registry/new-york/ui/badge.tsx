import * as React from "react";
import { Badge as RadixBadge } from "@radix-ui/themes";
import { cva } from "class-variance-authority";

type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | string;
type RadixBadgeVariant = "solid" | "soft" | "surface" | "outline";

const badgeVariants = cva("", {
  variants: {
    variant: {
      default: "",
      secondary: "",
      destructive: "",
      outline: "",
    } as Record<BadgeVariant, string>,
  },
  defaultVariants: {
    variant: "default",
  },
});

const variantMap: Record<string, RadixBadgeVariant> = {
  default: "solid",
  secondary: "soft",
  destructive: "solid",
  outline: "outline",
};

interface BadgeProps
  extends Omit<React.ComponentProps<typeof RadixBadge>, "variant"> {
  variant?: BadgeVariant;
}

function Badge({ variant = "default", ...props }: BadgeProps) {
  return (
    <RadixBadge
      variant={variantMap[variant] ?? "solid"}
      color={variant === "destructive" ? "red" : undefined}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
export type { BadgeProps };
