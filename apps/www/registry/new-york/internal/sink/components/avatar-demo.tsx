import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/radixcn.png" alt="@radixcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
