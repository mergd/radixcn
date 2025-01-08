"use client";

import * as React from "react";
import { ScrollArea as RadixScrollArea } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof RadixScrollArea>,
  React.ComponentPropsWithoutRef<typeof RadixScrollArea>
>(({ className, children, ...props }, ref) => (
  <RadixScrollArea ref={ref} className={cn("relative", className)} {...props}>
    {children}
  </RadixScrollArea>
));
ScrollArea.displayName = "ScrollArea";

/**
 * @deprecated Use ScrollArea from @radix-ui/themes instead. ScrollBar is handled internally by the ScrollArea component.
 */
const ScrollBar = ScrollArea;

export { ScrollArea, ScrollBar };
