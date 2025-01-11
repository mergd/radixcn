"use client";

import * as React from "react";
import { IconButton, Button as RadixButton, Spinner } from "@radix-ui/themes";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | string;
export type ButtonSize = "default" | "sm" | "lg" | "icon";

/**
 * @deprecated
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

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
  override?: boolean;
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
      override,
      ...props
    },
    ref,
  ) => {
    if (size === "icon") {
      return (
        <IconButton
          className={cn(" cursor-pointer ", className)}
          ref={ref}
          loading={loading ?? isSpinning}
          disabled={isSpinning}
          variant={variantMap[variant] ?? "solid"}
          color={variant === "destructive" ? "red" : color}
          aria-label={ariaLabel}
          {...props}
        >
          {children}
        </IconButton>
      );
    }
    // Default button styling if radix button is too restrictive.
    if (override) {
      return (
        <button
          className={cn("cursor-pointer", className)}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      );
    } else if (variant === "link") {
      return (
        <button
          className={cn(
            "cursor-pointer",
            variant === "link" && "underline-offset-4 hover:underline",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <RadixButton
        className={cn("cursor-pointer flex items-center gap-2", className)}
        ref={ref}
        disabled={isSpinning}
        variant={variantMap[variant] ?? "solid"}
        size={sizeMap[size as ButtonSize]}
        color={variant === "destructive" ? "red" : color}
        loading={loading}
        {...props}
      >
        <>
          {isSpinning && <Spinner />}
          {children}
        </>
      </RadixButton>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
