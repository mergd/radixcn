import { cn } from "@/lib/utils";
import { Callout } from "@radix-ui/themes";
import * as React from "react";

type AlertProps = Omit<
  React.ComponentPropsWithoutRef<typeof Callout.Root>,
  "size"
> & {
  variant?: "default" | "destructive";
};

const Alert = React.forwardRef<
  React.ElementRef<typeof Callout.Root>,
  AlertProps
>(({ className, variant = "default", children, ...props }, ref) => (
  <Callout.Root
    ref={ref}
    className={cn(
      "w-full [&_div]:text-sm",
      variant === "destructive" && "data-[color=red]",
      className
    )}
    color={variant === "destructive" ? "red" : "gray"}
    {...props}
  >
    {children}
  </Callout.Root>
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  React.ElementRef<typeof Callout.Text>,
  React.ComponentPropsWithoutRef<typeof Callout.Text>
>(({ className, ...props }, ref) => (
  <Callout.Text
    ref={ref}
    className={cn("[&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
