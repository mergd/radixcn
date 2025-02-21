"use client";

import * as React from "react";
import { Flex } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

interface DataListRootProps extends React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
}

const DataListRoot = React.forwardRef<HTMLDivElement, DataListRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-3", className)}
        {...props}
      />
    );
  },
);
DataListRoot.displayName = "DataList.Root";

interface DataListItemProps {
  children?: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end" | "baseline" | "stretch";
}

const DataListItem = React.forwardRef<HTMLDivElement, DataListItemProps>(
  ({ className, align = "start", ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        align={align}
        className={cn("w-full", className)}
        {...props}
      />
    );
  },
);
DataListItem.displayName = "DataList.Item";

interface DataListLabelProps extends React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
  minWidth?: string;
}

const DataListLabel = React.forwardRef<HTMLDivElement, DataListLabelProps>(
  ({ className, minWidth, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("text-sm text-gray-11 shrink-0", className)}
        style={{ minWidth, ...style }}
        {...props}
      />
    );
  },
);
DataListLabel.displayName = "DataList.Label";

interface DataListValueProps extends React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
}

const DataListValue = React.forwardRef<HTMLDivElement, DataListValueProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("text-sm text-gray-12 flex-1", className)}
        {...props}
      />
    );
  },
);
DataListValue.displayName = "DataList.Value";

export const DataList = {
  Root: DataListRoot,
  Item: DataListItem,
  Label: DataListLabel,
  Value: DataListValue,
};
