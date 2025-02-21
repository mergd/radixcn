import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/registry/new-york/ui/segmented-control";

export default function SegmentedControlDemo() {
  return (
    <SegmentedControl defaultValue="preview">
      <SegmentedControlItem value="preview">Preview</SegmentedControlItem>
      <SegmentedControlItem value="code">Code</SegmentedControlItem>
      <SegmentedControlItem value="properties">Properties</SegmentedControlItem>
    </SegmentedControl>
  );
}
