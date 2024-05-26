import { Table as TableType, flexRender } from '@tanstack/react-table';
import { Table as BootstrapTable } from 'react-bootstrap';

type TableProps<T> = { table: TableType<T> };

export default function Table<T extends object>({ table }: Readonly<TableProps<T>>) {
  return (
    <BootstrapTable striped bordered hover>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
}
