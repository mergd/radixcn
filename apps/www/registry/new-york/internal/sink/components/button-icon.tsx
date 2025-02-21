import { ChevronRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/registry/new-york/ui/button";

export function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <ChevronRightIcon />
    </Button>
  );
}
