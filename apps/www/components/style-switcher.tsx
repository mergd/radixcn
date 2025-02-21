"use client";

import { type SelectTriggerProps } from "@radix-ui/react-select";

import { useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/registry/new-york/ui/select";
import { Style, styles } from "@/registry/registry-styles";

export function StyleSwitcher({
  className,
  color,
  ...props
}: SelectTriggerProps) {
  const [config, setConfig] = useConfig();

  return (
    <Select
      value={config.style}
      onValueChange={(value: Style["name"]) =>
        setConfig({
          ...config,
          style: value,
        })
      }
    >
      <SelectTrigger
        className={cn(
          "h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4",
          className
        )}
        color="gray"
        {...props}
        placeholder="Select style"
      >
        <span className="text-muted-foreground">Style: </span>
      </SelectTrigger>
      <SelectContent>
        {styles.map((style) => (
          <SelectItem key={style.name} value={style.name} className="text-xs">
            {style.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
