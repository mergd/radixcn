import * as React from "react";
import { notFound } from "next/navigation";
import { Style } from "@/registry/registry-styles";
import { getRegistryComponent } from "@/lib/registry";

export default async function SinkPage({
  params,
}: {
  params: {
    style: Style["name"];
  };
}) {
  const { style } = params;
  const Component = getRegistryComponent("sink", style);

  if (!Component) {
    return notFound();
  }

  return (
    <div className="themes-wrapper bg-background">
      <Component />
    </div>
  );
}
