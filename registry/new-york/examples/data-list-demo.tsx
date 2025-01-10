import { DataList } from "@/registry/new-york/ui/data-list";

export default function DataListDemo() {
  return (
    <DataList.Root>
      <DataList.Item>
        <DataList.Label minWidth="120px">Status</DataList.Label>
        <DataList.Value>Active</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="120px">Created</DataList.Label>
        <DataList.Value>December 12, 2023</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="120px">Updated</DataList.Label>
        <DataList.Value>January 5, 2024</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="120px">Type</DataList.Label>
        <DataList.Value>Personal</DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
}
