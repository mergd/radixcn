import * as React from "react";
import { SegmentedControl as RadixSegmentedControl } from "@radix-ui/themes";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
export interface SegmentedControlProps
  extends Omit<
    ComponentPropsWithoutRef<typeof RadixSegmentedControl.Root>,
    "defaultValue" | "value" | "onValueChange"
  > {
  value?: string;
  className?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

interface SegmentedControlItemProps {
  className?: string;
  children?: React.ReactNode;
  value: string;
}

const SegmentedControl = React.forwardRef<
  React.ElementRef<typeof RadixSegmentedControl.Root>,
  SegmentedControlProps
>((props, ref) => {
  return (
    <RadixSegmentedControl.Root
      ref={ref}
      className={cn(props.className)}
      {...props}
    />
  );
});

const SegmentedControlItem = React.forwardRef<
  React.ElementRef<typeof RadixSegmentedControl.Item>,
  SegmentedControlItemProps
>((props, ref) => {
  return (
    <RadixSegmentedControl.Item
      ref={ref}
      className={cn(props.className)}
      {...props}
    />
  );
});

SegmentedControl.displayName = "SegmentedControl";

export { SegmentedControl, SegmentedControlItem };
