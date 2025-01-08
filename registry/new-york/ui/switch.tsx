"use client";

import * as React from "react";
import { Switch as RadixSwitch } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof RadixSwitch>,
  Omit<React.ComponentPropsWithoutRef<typeof RadixSwitch>, "size"> & {
    size?: "1" | "2" | "3";
  }
>(({ className, size = "2", ...props }, ref) => (
  <RadixSwitch
    ref={ref}
    className={cn("shrink-0", className)}
    size={size}
    {...props}
  />
));
Switch.displayName = "Switch";

export { Switch };
