import { RadioCards as RadixRadioCards } from "@radix-ui/themes";
import { cn } from "@/lib/utils";
import * as React from "react";

export interface RadioCardsProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof RadixRadioCards.Root>,
    "color" | "variant"
  > {
  items: {
    value: string;
    children: React.ReactNode;
  }[];
  variant?: "surface" | "classic";
  size?: "1" | "2" | "3";
}

export function RadioCards({
  items,
  className,
  variant = "surface",
  size = "2",
  ...props
}: RadioCardsProps) {
  return (
    <RadixRadioCards.Root
      className={cn("grid gap-2", className)}
      variant={variant === "classic" ? "classic" : "surface"}
      size={size}
      {...props}
    >
      {items.map((item) => (
        <RadixRadioCards.Item key={item.value} value={item.value}>
          {item.children}
        </RadixRadioCards.Item>
      ))}
    </RadixRadioCards.Root>
  );
}
