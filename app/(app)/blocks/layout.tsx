import { Metadata } from "next";

import { BlocksNav } from "@/components/blocks-nav";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/registry/new-york/ui/button";

import "@/styles/mdx.css";

export const metadata: Metadata = {
  title: "Building Blocks.",
  description:
    "Beautifully designed. Copy and paste into your apps. Open Source.",
};

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Building Blocks for the Web</PageHeaderHeading>
        <PageHeaderDescription>
          Clean, modern building blocks. Copy and paste into your apps. Works
          with all React frameworks. Open Source. Free forever.
        </PageHeaderDescription>
        <PageActions>
          <Button size="sm">
            <a href="#blocks">Browse Blocks</a>
          </Button>
          <Button variant="ghost" size="sm">
            <a
              href="https://github.com/mergd/radixcn/discussions/new?category=blocks-request"
              target="_blank"
            >
              Request a block
            </a>
          </Button>
        </PageActions>
      </PageHeader>
      <div id="blocks" className="border-grid scroll-mt-24 border-b">
        <div className="container-wrapper">
          <div className="container flex items-center py-4">
            <BlocksNav />
          </div>
        </div>
      </div>
      <div className="container-wrapper flex-1">{children}</div>
    </>
  );
}
