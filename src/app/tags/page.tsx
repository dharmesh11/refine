"use client";

import { useTable } from "@refinedev/antd";
import { StyledTable, TableContainer } from '../tags/styles/tableStyle'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type BlogTable = {
  id: number
  title: string
}


export default function BlogPostList() {

const { tableProps, tableQueryResult } = useTable({
  syncWithLocation: true,
});




const columnHelper = createColumnHelper<BlogTable>();

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
  }),
  columnHelper.accessor('title', {
    header: 'Title',
  }),
]

const data = tableProps.dataSource;


  const table = useReactTable({
    data: data as BlogTable[],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });




  return (
    (table && tableProps.dataSource)
    ?
    <>
    <TableContainer>
      <h2>Tanstack Table with Style</h2>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
    
      </StyledTable>
    </TableContainer>
      
    
      </>
      : null
  );
}
