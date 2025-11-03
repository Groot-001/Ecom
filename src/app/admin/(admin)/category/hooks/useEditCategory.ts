import { useGetDataQuery, useUpdateDataMutation } from "@/lib/api";
import { useFormik } from "formik";
import { categorySchema } from "./useCreateCategory";
import { endpoints } from "@/constant/endpoints";
import { apiTag } from "@/constant/apiTag";
import { showSuccessMessage } from "@/lib/toast";

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
      const response = await updateCategory({
        data: "",
        url: endpoints.category.edit,
        invalidateTag: [apiTag.category.getAll],
      });
      if (response?.data?.code === 201) {
        showSuccessMessage(response?.data?.message || "");
      }
    },
  });

  return {
    editCategoryFormik,
  };
};
