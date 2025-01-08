import { MailOpen } from "lucide-react";

import { Button } from "@/registry/default/ui/button";

export default function ButtonWithIcon() {
  return (
    <Button>
      <MailOpen /> Login with Email
    </Button>
  );
}
