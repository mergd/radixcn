"use client";

import * as React from "react";
import { Checkbox as RadixCheckbox } from "@radix-ui/themes";
import type { CheckboxProps as RadixCheckboxProps } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

type CheckboxProps = Omit<RadixCheckboxProps, "size"> & {
  size?: "1" | "2" | "3";
};

const Checkbox = React.forwardRef<
  React.ElementRef<typeof RadixCheckbox>,
  CheckboxProps
>(({ className, size = "2", ...props }, ref) => (
  <RadixCheckbox
    ref={ref}
    className={cn("cursor-pointer", className)}
    size={size}
    {...props}
  />
));

Checkbox.displayName = "Checkbox";

export { Checkbox };
export type { CheckboxProps };
