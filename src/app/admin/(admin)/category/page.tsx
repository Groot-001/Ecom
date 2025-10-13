'use client'
import AdminHeader from "@/common/adminheader/AdminHeader";
import ModalWrapper from "@/components/wrapper/ModalWrapper";
import { useState } from "react";
import CreateCategoryForm from "./partial/CreateCategoryForm";
import EditCategoryForm from "./partial/EditCategoryForm";
import { ColumnDef } from "@tanstack/react-table";
import { categoryData, ICategoryTable } from "./data/categoryData";
import BaseTable from "@/components/table/BaseTable";
import { Edit3, Trash2 } from "lucide-react";
import AlertModal from "@/components/forms/AlertModel";

export default function AdminPage() {
  const [query, setQuery] = useState<string>("");
  const [isCreateCategoryOpen, setIsCreateCategoryOpen] = useState<boolean>(false)
  const [isUpdateCategoryOpen, setIsUpdateCategoryOpen] = useState<boolean>(false)
  const [updateId, setUpdateId] = useState<string | null>(null)
  const [isDeleteCategoryOpen, setIsDeleteCategoryOpen] = useState<boolean>(false)
  const [deleteId, setdeleteId] = useState<string | null>(null);

  const columns: ColumnDef<ICategoryTable>[] = [
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
      <AdminHeader
        query={query}
        setQuery={setQuery}
        title="Category Management"
        isCategoryOpen={isCreateCategoryOpen}
        setIsCategoryOpen={setIsCreateCategoryOpen}
      />

      <BaseTable columns={columns} data={categoryData} />

      <ModalWrapper
        isOpen={isCreateCategoryOpen}
        name="Create Category"
        onOpenChange={() => setIsCreateCategoryOpen(false)}>
        <CreateCategoryForm
        />
      </ModalWrapper>

      <ModalWrapper
        isOpen={isUpdateCategoryOpen}
        name="Edit Category" onOpenChange={() => {
          setIsUpdateCategoryOpen(false)
          setUpdateId(null)
        }}>
        <EditCategoryForm />
      </ModalWrapper>

      <AlertModal
        isOpen={isDeleteCategoryOpen}
        onClose={() => {
          setIsDeleteCategoryOpen(false)
          setdeleteId(null)
        }}
        onDelete={() => { }}
      />

    </div>
  );
}
