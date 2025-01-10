import { DataList } from "@/registry/new-york/ui/data-list";
import { Badge } from "@radix-ui/themes";

export default function DataListAlignDemo() {
  return (
    <div className="grid gap-6">
      <DataList.Root>
        <DataList.Item align="center">
          <DataList.Label minWidth="100px">Status</DataList.Label>
          <DataList.Value>
            <Badge color="green" variant="soft">
              Active
            </Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item align="baseline">
          <DataList.Label minWidth="100px">Description</DataList.Label>
          <DataList.Value>
            A longer description that might span multiple lines. This shows how
            baseline alignment keeps the text properly aligned.
          </DataList.Value>
        </DataList.Item>
        <DataList.Item align="start">
          <DataList.Label minWidth="100px">Tags</DataList.Label>
          <DataList.Value>
            <div className="flex gap-2">
              <Badge>Design</Badge>
              <Badge>Development</Badge>
              <Badge>Product</Badge>
            </div>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </div>
  );
}
