import { FormikProvider } from "formik";
import React from "react";
import { useCreateCategory } from "../hooks/useCreateCategory";
import { Button } from "@/components/ui/button";
import CategoryForm from "./CategoryForm";

interface IProps {
  closeModal: () => void;
}

const CreateCategoryForm: React.FC<IProps> = ({ closeModal }) => {
  const formik = useCreateCategory({ closeModal });
  return (
    <FormikProvider value={formik.createCategoryFormik}>
      <form>
        <div>
          <CategoryForm />
          <Button
            className="mt-10"
            variant={"default"}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              formik.createCategoryFormik.handleSubmit();
            }}
          >
            submit
          </Button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default CreateCategoryForm;
