import { useFormik } from "formik";

export const useEditCategory = () => {
  const initialValues = {
    name: "",
    description: "",
  };

  const editCategoryFormik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return {
    editCategoryFormik,
  };
};
