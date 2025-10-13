import React from 'react';
import { ISubCategoryData } from '../data/subCategoryData';

const page = () => {
    const columns: ColumnDef<ISubCategoryData>[] = [
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
            header: ' Actions',
            cell: ({ row }) => (
                <div className="flex gap-3">
                    <button
                        onClick={() => {
                            setIsUpdateCategoryOpen(true)
                            setUpdateId(row?.original?.id.toString())
                        }}
                        className="text-blue-600 hover:text-blue-800">
                        <Edit3 size={16}
                        />
                    </button>

                    <button
                        onClick={() => {
                            setIsDeleteCategoryOpen(true)
                            setdeleteId(row?.original?.id.toString())
                        }}
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

        </div>
    );
}

export default page;
