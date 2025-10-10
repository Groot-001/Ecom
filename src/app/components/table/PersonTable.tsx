'use client';

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import BaseTable from './BaseTable';
import { Edit3, Trash2 } from 'lucide-react';

// 1️⃣ Define the data type
interface Person {
  name: string;
  age: number;
  city: string;
  status: 'active' | 'inactive';
}

// 2️⃣ Define columns (with custom design)
const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'name',
    header: '👤 Name',
    cell: ({ row }) => (
      <span className="font-medium text-gray-900">{row.getValue('name')}</span>
    ),
  },
  {
    accessorKey: 'age',
    header: '🎂 Age',
    cell: ({ row }) => (
      <span className="text-blue-600">{row.getValue('age')}</span>
    ),
  },
  {
    accessorKey: 'city',
    header: '🏙️ City',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            status === 'active'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    id: 'actions',
    header: '⚙️ Actions',
    cell: () => (
      <div className="flex gap-3">
        <button className="text-blue-600 hover:text-blue-800">
          <Edit3 size={16} />
        </button>
        <button className="text-red-600 hover:text-red-800">
          <Trash2 size={16} />
        </button>
      </div>
    ),
  },
];

// 3️⃣ Define sample data
const data: Person[] = [
  { name: 'John Doe', age: 30, city: 'New York', status: 'active' },
  { name: 'Jane Smith', age: 25, city: 'London', status: 'inactive' },
  { name: 'Alice Johnson', age: 28, city: 'Tokyo', status: 'active' },
];

const PersonTable = () => {
  return <BaseTable columns={columns} data={data} />;
};

export default PersonTable;
