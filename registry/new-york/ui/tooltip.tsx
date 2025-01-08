"use client";

import * as React from "react";
import { Tooltip as RadixTooltip } from "@radix-ui/themes";

import { cn } from "@/lib/utils";

interface TooltipProps {
  children: React.ReactNode;
  content?: React.ReactNode;
  delayDuration?: number;
  disableHoverableContent?: boolean;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, content, ...props }, ref) => (
    <RadixTooltip ref={ref} content={content} {...props}>
      {children}
    </RadixTooltip>
  ),
);
Tooltip.displayName = "Tooltip";

// For backwards compatibility - these just pass through to Radix Themes components
const TooltipProvider = ({ children }: { children: React.ReactNode }) =>
  children;
const TooltipTrigger = ({ children }: { children: React.ReactNode }) =>
  children;
const TooltipContent = ({ children }: { children: React.ReactNode }) =>
  children;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
