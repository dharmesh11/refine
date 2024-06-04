"use client";

import { useTable } from "@refinedev/antd";
import { StyledTable, TableContainer } from '../tags/styles/tableStyle'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'


export default function BlogPostList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  // console.log(tableProps);
  

  type BlogTable = {
    id: number
    title: string
  }

  const columnHelper = createColumnHelper<BlogTable>();

  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
    }),
    columnHelper.accessor('title', {
      header: 'Title',
    }),
    
    
  ]

  

  // console.log(tableProps); 

  
  const table = useReactTable({
    data: tableProps.dataSource,
    columns,
    getCoreRowModel: getCoreRowModel(),

  })



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
