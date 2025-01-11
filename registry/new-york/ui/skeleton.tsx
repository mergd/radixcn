import { Skeleton as RadixSkeleton } from "@radix-ui/themes";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
type SkeletonProps = ComponentPropsWithoutRef<typeof RadixSkeleton>;

/**
 * @see https://www.radix-ui.com/themes/docs/components/skeleton
 */
function Skeleton({ className, ...props }: SkeletonProps) {
  return <RadixSkeleton className={cn(className)} {...props} />;
}

export { Skeleton };
export type { SkeletonProps };
