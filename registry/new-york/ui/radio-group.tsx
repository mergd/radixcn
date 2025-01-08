"use client";

import * as React from "react";
import { RadioGroup as RadixRadioGroup } from "@radix-ui/themes";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

// Extend RadixRadioGroup props to maintain compatibility with existing usage
interface RadioGroupProps
  extends Omit<ComponentProps<typeof RadixRadioGroup.Root>, "size"> {
  className?: string;
  size?: "1" | "2" | "3"; // Map to Radix Theme sizes
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Root>,
  RadioGroupProps
>(({ className, size = "2", ...props }, ref) => {
  return (
    <RadixRadioGroup.Root
      ref={ref}
      className={cn("grid gap-2", className)}
      size={size}
      {...props}
    />
  );
});
RadioGroup.displayName = "RadioGroup";

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Item>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadixRadioGroup.Item
      ref={ref}
      className={cn(
        "cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </RadixRadioGroup.Item>
  );
});
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };

/**
 * @deprecated Use RadioGroup from @radix-ui/themes instead. This component is kept for backwards compatibility.
 */
export type { RadioGroupProps };
