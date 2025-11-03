import { useUpdateDataMutation } from "@/lib/api";
import { useFormik } from "formik";
import { categorySchema } from "./useCreateCategory";

export const useEditCategory = () => {
  const [updateCategory] = useUpdateDataMutation();

  const initialValues = {
    name: "",
    description: "",
  };

  const editCategoryFormik = useFormik({
    initialValues,
    validationSchema: categorySchema,
    onSubmit: async (values) => {
      
    },
  });

  return {
    editCategoryFormik,
  };
};
