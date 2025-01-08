import * as React from "react";
import { TextArea as RadixTextArea } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  Omit<React.ComponentPropsWithoutRef<typeof RadixTextArea>, "size"> & {
    size?: "1" | "2" | "3";
  }
>(({ className, size = "2", ...props }, ref) => {
  return (
    <RadixTextArea
      ref={ref}
      className={cn("w-full min-h-[60px]", className)}
      size={size}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
