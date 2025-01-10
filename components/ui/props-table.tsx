import * as React from "react";
import { Table } from "@radix-ui/themes";

interface PropDef {
  name: string;
  type: string;
  description: string;
  default?: string;
  required?: boolean;
}

interface PropsTableProps {
  data: PropDef[];
}

export function PropsTable({ data }: PropsTableProps) {
  return (
    <Table.Root size="2">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Prop</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((prop) => (
          <Table.Row key={prop.name}>
            <Table.Cell>
              <code>{prop.name}</code>
              {prop.required && <span className="text-red-9 ml-1">*</span>}
            </Table.Cell>
            <Table.Cell>
              <code className="whitespace-pre-wrap break-words">
                {prop.type}
              </code>
            </Table.Cell>
            <Table.Cell>{prop.description}</Table.Cell>
            <Table.Cell>
              {prop.default && <code>{prop.default}</code>}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
