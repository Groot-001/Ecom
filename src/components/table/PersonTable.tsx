'use client';

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import BaseTable from './BaseTable';
import { Edit3, Trash2 } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  description: string;
}

interface IProps {
  
}

const data: Category[] = [
  {
    id: 1,
    name: "Mango Pickle",
    description: "This Pickle contains mango enriched pickle"
  },
  {
    id: 2,
    name: "Mixed Pickle",
    description: "hslfdsah"
  },
  {
    id: 3,
    name: "Raddish Pickle",
    description: "adjhasldh"
  },
  {
    id: 4,
    name: "Vegetable Pickle",
    description: "sdfkjshdflkj"
  },
];

const columns: ColumnDef<Category>[] = [
  {
    accessorKey: 'id',
    header: "Id"
  },
  {
    accessorKey: 'name',
    header: 'Category',
    cell: ({ row }) => (
      <span className="font-medium text-gray-900">{row.getValue('name')}</span>
    ),
  },
  {
    accessorKey: 'description',
    header: "Description"
  },
  {
    id: 'actions',
    header: '⚙️ Actions',
    cell: () => (
      <div className="flex gap-3">
        <button
          onClick={() => { }}
          className="text-blue-600 hover:text-blue-800">
          <Edit3 size={16}
          />
        </button>

        <button
          className="text-red-600 hover:text-red-800">
          <Trash2 size={16}
          />
        </button>
      </div>
    ),
  },
];

const PersonTable = () => {
  return <BaseTable columns={columns} data={data} />;
};

export default PersonTable;
