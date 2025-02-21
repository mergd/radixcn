import * as React from "react";
import {
  Card as RadixCard,
  Box,
  Text,
  Heading,
  TextProps,
} from "@radix-ui/themes";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RadixCard>
>(({ className, ...props }, ref) => (
  <RadixCard ref={ref} className={cn(className, "gap-1")} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Box ref={ref} className={cn("flex flex-col gap-1", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof Heading>
>(({ className, size = "4", ...props }, ref) => (
  <Heading ref={ref} size={size} className={cn(className, "mb-2")} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size = "2", color = "gray", ...props }, ref) => (
    <Text
      ref={ref}
      size={size}
      color={color}
      className={cn(className)}
      {...props}
    />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Box ref={ref} className={cn(className, "mt-2 gap-2")} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Box
    ref={ref}
    className={cn("mt-2 flex items-center", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
