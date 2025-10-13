'use client'
import { ISubCategoryData, subCategoryData } from '../data/subCategoryData';
import { ColumnDef } from '@tanstack/react-table';
import { Edit3, Trash2 } from 'lucide-react';
import BaseTable from '@/components/table/BaseTable';
import AdminHeader from '@/common/adminheader/AdminHeader';
import { useState } from 'react';

const page = () => {

    const [query, setQuery] = useState<string>("");
    const [isCreateCategoryOpen, setIsCreateCategoryOpen] = useState<boolean>(false)

    const columns: ColumnDef<ISubCategoryData>[] = [
        {
            accessorKey: 'id',
            header: "Id"
        },
        {
            accessorKey: 'category',
            header: 'Category',
            cell: ({ row }) => (
                <span className="font-medium text-gray-900">{row.getValue('category')}</span>
            ),
        },
        {
            accessorKey: 'name',
            header: "Sub Category"
        },
        {
            accessorKey: 'description',
            header: "Description"
        },
        {
            id: 'actions',
            header: ' Actions',
            cell: ({ row }) => (
                <div className="flex gap-3">
                    <button

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
    return (
        <div>
            <AdminHeader
                title="Category Management"
                isCategoryOpen={isCreateCategoryOpen}
                setIsCategoryOpen={setIsCreateCategoryOpen}
                query={query}
                setQuery={setQuery}
            />

            <BaseTable columns={columns} data={subCategoryData} />
        </div>
    );
}

export default page;
