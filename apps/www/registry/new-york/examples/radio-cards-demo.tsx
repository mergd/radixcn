import { RadioCards } from "@/registry/new-york/ui/radio-cards";
import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons";

export default function RadioCardsDemo() {
  return (
    <RadioCards
      items={[
        {
          value: "light",
          children: (
            <div className="flex items-center gap-3">
              <SunIcon width={16} height={16} />
              <div className="font-medium">Light</div>
            </div>
          ),
        },
        {
          value: "dark",
          children: (
            <div className="flex items-center gap-3">
              <MoonIcon width={16} height={16} />
              <div className="font-medium">Dark</div>
            </div>
          ),
        },
        {
          value: "system",
          children: (
            <div className="flex items-center gap-3">
              <DesktopIcon width={16} height={16} />
              <div className="font-medium">System</div>
            </div>
          ),
        },
      ]}
      defaultValue="system"
    />
  );
}
