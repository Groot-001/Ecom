'use client'
import AdminHeader from "@/common/adminheader/AdminHeader";
import PersonTable from "@/components/table/PersonTable";
import ModalWrapper from "@/components/wrapper/ModalWrapper";
import { useState } from "react";
import CategoryForm from "./partial/CategoryForm";

export default function AdminPage() {
  const [query, setQuery] = useState<string>("");
  const [isCreateCategoryOpen, setIsCreateCategoryOpen] = useState<boolean>(false)
  const [isEditCategoryOpen, setIsEditCategoryOpen] = useState<boolean>(false)

  return (
    <div>
      <AdminHeader
        query={query}
        setQuery={setQuery}
        title="Category Management"
        isCategoryOpen={isCreateCategoryOpen}
        setIsCategoryOpen={setIsCreateCategoryOpen}
      />

      <PersonTable />

      <ModalWrapper isOpen={isCreateCategoryOpen} name="Create Category" onOpenChange={() => setIsCreateCategoryOpen(false)}>
        <CategoryForm />
      </ModalWrapper>
      
    </div>
  );
}
