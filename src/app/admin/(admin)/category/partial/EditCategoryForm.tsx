import React from "react";
import { useEditCategory } from "../hooks/useEditCategory";
import { FormikProvider } from "formik";
import CategoryForm from "./CategoryForm";
import { Button } from "@/components/ui/button";

const EditCategoryForm = () => {
  const formik = useEditCategory();
  return (
    <FormikProvider value={formik.editCategoryFormik}>
      <CategoryForm />
      <Button
        className="mt-10"
        variant={"default"}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          formik.editCategoryFormik.handleSubmit();
        }}
      >
        submit
      </Button>
    </FormikProvider>
  );
};

export default EditCategoryForm;
