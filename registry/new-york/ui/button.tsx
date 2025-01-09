"use client";

import * as React from "react";
import { Button as RadixButton, IconButton } from "@radix-ui/themes";
import { cva } from "class-variance-authority";
import { Spinner } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | string;
type ButtonSize = "default" | "sm" | "lg" | "icon";

/**
 * @deprecated
 */
const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "",
      destructive: "",
      outline: "",
      secondary: "",
      ghost: "",
      link: "",
    } as Record<ButtonVariant, string>,
    size: {
      default: "",
      sm: "",
      lg: "",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

// Update variantMap to accept any string
type RadixButtonVariant = "classic" | "solid" | "soft" | "outline" | "ghost";

const variantMap: Record<string, RadixButtonVariant> = {
  default: "solid",
  destructive: "solid",
  outline: "outline",
  secondary: "soft",
  ghost: "ghost",
  link: "ghost",
};

const sizeMap = {
  sm: "1",
  default: "2",
  lg: "3",
  icon: "2",
} as const;

interface ButtonProps
  extends Omit<React.ComponentProps<typeof RadixButton>, "size" | "variant"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isSpinning?: boolean;
  "aria-label"?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "default",
      color,
      className,
      isSpinning,
      loading,
      children,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    if (size === "icon") {
      return (
        <IconButton
          className={cn("size-auto", className)}
          ref={ref}
          loading={loading ?? isSpinning}
          variant={variantMap[variant] ?? "solid"}
          color={variant === "destructive" ? "red" : color}
          aria-label={ariaLabel}
          {...props}
        >
          {children}
        </IconButton>
      );
    }

    return (
      <RadixButton
        className={cn(
          "cursor-pointer",
          variant === "link" && "underline-offset-4 hover:underline",
          className
        )}
        ref={ref}
        variant={variantMap[variant] ?? "solid"}
        size={sizeMap[size as ButtonSize]}
        color={variant === "destructive" ? "red" : color}
        loading={loading}
        {...props}
      >
        <div className="flex items-center gap-2">
          {isSpinning && <Spinner />}
          {children}
        </div>
      </RadixButton>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
