'use client'
import { ISubCategoryData, subCategoryData } from '../data/subCategoryData';
import { ColumnDef } from '@tanstack/react-table';
import { Edit3, Trash2 } from 'lucide-react';
import BaseTable from '@/components/table/BaseTable';
import AdminHeader from '@/common/adminheader/AdminHeader';
import { useState } from 'react';
import ModalWrapper from '@/components/wrapper/ModalWrapper';
import CreateSubCategoryForm from './partial/CreateSubCategory';
import UpdateSubCategoryForm from './partial/UpdateSubCategory';
import AlertModal from '@/components/forms/AlertModel';

const page = () => {

    const [query, setQuery] = useState<string>("");
    const [isCreateCategoryOpen, setIsCreateCategoryOpen] = useState<boolean>(false)
    const [isUpdateSubCategoryOpen, setisUpdateSubCategoryOpen] = useState<boolean>(false);
    const [updateId, setupdateId] = useState<string | null>(null);
    const [isDeleteSubCategoryOpen, setisDeleteSubCategoryOpen] = useState<boolean>(false);
    const [deleteId, setdeleteId] = useState<string | null>(null);

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
                        onClick={() => {
                            setisUpdateSubCategoryOpen(true)
                            setupdateId(row?.original?.id.toString())
                        }}
                        className="text-blue-600 hover:text-blue-800">
                        <Edit3 size={16}
                        />
                    </button>

                    <button
                        onClick={() => {
                            setisDeleteSubCategoryOpen(true)
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
            <AdminHeader
                title="Subcategory Management"
                query={query}
                setQuery={setQuery}
                isCategoryOpen={isCreateCategoryOpen}
                setIsCategoryOpen={setIsCreateCategoryOpen}
            />

            <BaseTable columns={columns} data={subCategoryData} />

            <ModalWrapper
                isOpen={isCreateCategoryOpen}
                name='Create Subcategory'
                onOpenChange={() => { setIsCreateCategoryOpen(false) }}
            >
                <CreateSubCategoryForm />
            </ModalWrapper>

            <ModalWrapper
                isOpen={isUpdateSubCategoryOpen}
                name='Update Subcategory'
                onOpenChange={() => {
                    setisUpdateSubCategoryOpen(false)
                    setupdateId(null)
                }}
            >
                <UpdateSubCategoryForm />
            </ModalWrapper>

            <AlertModal
                isOpen={isDeleteSubCategoryOpen}
                onClose={() => {
                    setisDeleteSubCategoryOpen(false)
                    setdeleteId(null)
                }}
                onDelete={() => {

                }}
            />


        </div>
    );
}

export default page;
