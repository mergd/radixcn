import * as React from "react";
import { TextField } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  React.ElementRef<typeof TextField.Root>,
  Omit<React.ComponentPropsWithoutRef<typeof TextField.Root>, "size"> & {
    size?: "1" | "2" | "3";
  }
>(({ className, size = "2", ...props }, ref) => {
  return (
    <TextField.Root
      ref={ref}
      className={cn(
        "w-full transition-colors file:border-0 file:items-py-1 file:bg-transparent file:text-sm file:font-medium",
        className,
      )}
      size={size}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
