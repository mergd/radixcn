"use client";

import * as React from "react";
import { Progress as RadixProgress } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof RadixProgress>,
  Omit<React.ComponentPropsWithoutRef<typeof RadixProgress>, "value"> & {
    value?: number | null;
  }
>(({ className, value, ...props }, ref) => (
  <RadixProgress
    ref={ref}
    className={cn("w-full", className)}
    value={value || 0}
    {...props}
  />
));
Progress.displayName = "Progress";

export { Progress };
