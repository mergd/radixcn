import { Button } from "@/registry/new-york/ui/button";
import { Tooltip } from "@/registry/new-york/ui/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip content="Add to library">
      <Button variant="outline">Hover</Button>
    </Tooltip>
  );
}
