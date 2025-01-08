"use client";

import * as React from "react";
import { Slider as RadixSlider } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof RadixSlider>,
  Omit<React.ComponentPropsWithoutRef<typeof RadixSlider>, "size"> & {
    size?: "1" | "2" | "3";
  }
>(({ className, size = "2", ...props }, ref) => (
  <RadixSlider
    ref={ref}
    className={cn("w-full", className)}
    size={size}
    {...props}
  />
));
Slider.displayName = "Slider";

export { Slider };
