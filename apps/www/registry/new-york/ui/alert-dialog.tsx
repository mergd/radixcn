"use client";

import * as React from "react";
import { AlertDialog as RadixAlertDialog } from "@radix-ui/themes";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york/ui/button";
const AlertDialog = RadixAlertDialog.Root;
const AlertDialogTrigger = RadixAlertDialog.Trigger;
const AlertDialogContent = RadixAlertDialog.Content;

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-2", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex justify-end gap-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogAction = ({
  children,
  variant = "destructive",
  ...props
}: React.ComponentProps<typeof RadixAlertDialog.Action> & {
  variant?: React.ComponentProps<typeof Button>["variant"];
  color?: React.ComponentProps<typeof Button>["color"];
}) => (
  <RadixAlertDialog.Action>
    <Button variant={variant} {...props}>
      {children}
    </Button>
  </RadixAlertDialog.Action>
);

const AlertDialogCancel = ({
  children,
  variant = "soft",
  color = "gray",
  ...props
}: React.ComponentProps<typeof RadixAlertDialog.Cancel> & {
  variant?: React.ComponentProps<typeof Button>["variant"];
  color?: React.ComponentProps<typeof Button>["color"];
}) => (
  <RadixAlertDialog.Cancel>
    <Button variant={variant} color={color} {...props}>
      {children}
    </Button>
  </RadixAlertDialog.Cancel>
);

const AlertDialogTitle = RadixAlertDialog.Title;
const AlertDialogDescription = RadixAlertDialog.Description;

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
};

/**
 * @deprecated Use AlertDialogContent instead - Portal and Overlay are handled automatically
 */
export const AlertDialogPortal = RadixAlertDialog.Content;

/**
 * @deprecated Use AlertDialogContent instead - Overlay is handled automatically
 */
export const AlertDialogOverlay = RadixAlertDialog.Content;
