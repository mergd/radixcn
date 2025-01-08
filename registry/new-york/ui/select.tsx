"use client";

import * as React from "react";
import { Select as RadixSelect } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

const Select = RadixSelect.Root;

const SelectGroup = RadixSelect.Group;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Trigger> & {
    size?: "1" | "2" | "3";
  }
>(({ className, size = "2", children, ...props }, ref) => (
  <RadixSelect.Trigger
    ref={ref}
    className={cn("cursor-pointer w-full shrink-0", className)}
    {...props}
  >
    {children}
  </RadixSelect.Trigger>
));
SelectTrigger.displayName = RadixSelect.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Content>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Content> & {
    size?: "1" | "2" | "3";
  }
>(({ className, size = "2", ...props }, ref) => (
  <RadixSelect.Content
    ref={ref}
    className={cn("min-w-[8rem]", className)}
    position="popper"
    {...props}
  />
));
SelectContent.displayName = RadixSelect.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Label>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Label>
>(({ className, ...props }, ref) => (
  <RadixSelect.Label
    ref={ref}
    className={cn("font-medium", className)}
    {...props}
  />
));
SelectLabel.displayName = RadixSelect.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Item>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Item>
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Item
    ref={ref}
    className={cn("cursor-pointer", className)}
    {...props}
  >
    {children}
  </RadixSelect.Item>
));
SelectItem.displayName = RadixSelect.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Separator>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Separator>
>(({ className, ...props }, ref) => (
  <RadixSelect.Separator
    ref={ref}
    className={cn("my-1", className)}
    {...props}
  />
));
SelectSeparator.displayName = RadixSelect.Separator.displayName;

/**
 * @deprecated Use SelectTrigger children instead. Value display is handled by Radix Themes
 */
const SelectValue = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    placeholder?: string;
  }
>(({ className, children, placeholder, ...props }, ref) => (
  <span ref={ref} {...props}>
    {children || placeholder}
  </span>
));
SelectValue.displayName = "SelectValue";

/**
 * @deprecated Use SelectContent instead. ScrollUpButton is handled automatically by Radix Themes
 */
const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Content>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Content>
>(() => null);
SelectScrollUpButton.displayName = "SelectScrollUpButton";

/**
 * @deprecated Use SelectContent instead. ScrollDownButton is handled automatically by Radix Themes
 */
const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Content>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Content>
>(() => null);
SelectScrollDownButton.displayName = "SelectScrollDownButton";

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
