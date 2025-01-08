"use client";

import * as React from "react";
import {
  Tooltip as RadixTooltip,
  TooltipProps as RadixTooltipProps,
} from "@radix-ui/themes";

import { cn } from "@/lib/utils";

interface TooltipProps extends RadixTooltipProps {
  children: React.ReactNode;
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
/** @deprecated */
const TooltipProvider = ({ children }: { children: React.ReactNode }) =>
  children;
/** @deprecated */
const TooltipTrigger = ({ children }: { children: React.ReactNode }) =>
  children;
/** @deprecated */
const TooltipContent = ({ children }: { children: React.ReactNode }) =>
  children;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
