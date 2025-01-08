"use client";

import { Check, PlusCircle } from "lucide-react";

import { useProject } from "@/hooks/use-project";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york/ui/button";
import { Tooltip } from "@/registry/new-york/ui/tooltip";

export function ProjectAddButton({
  name,
  className,
  ...props
}: React.ComponentProps<typeof Button> & { name: string }) {
  const { addBlock, isAdded } = useProject();
  return (
    <Tooltip
      className="flex items-center gap-4"
      content={"Add to Project"}
      sideOffset={10}
    >
      <Button
        variant="ghost"
        size="sm"
        className={cn("rounded-sm", className)}
        onClick={() => {
          addBlock(name);
        }}
        {...props}
      >
        {isAdded ? <Check /> : <PlusCircle />}
      </Button>
    </Tooltip>
  );
}
