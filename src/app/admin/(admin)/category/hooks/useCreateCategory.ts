import { endpoints } from "@/constant/endpoints";
import { IApiResponse } from "@/interface/IApiResponse";
import { usePostDataMutation } from "@/lib/api";
import { showSuccessMessage } from "@/lib/toast";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IProps {
  closeModal: () => void;
}

export const categorySchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .typeError("Only valid strinig"),
  description: Yup.string().required("Description is required"),
});

export const useCreateCategory = ({ closeModal }: IProps) => {
  const [createCategory, { isLoading }] = usePostDataMutation();

  const initialValues = {
    name: "",
    description: "",
  };

  const createCategoryFormik = useFormik({
    initialValues,
    validationSchema: categorySchema,
    onSubmit: async (values) => {
      const response = (await createCategory({
        url: endpoints.category.create,
        data: { ...values },
      })) as IApiResponse;
      if (response?.data?.code === 201) {
        showSuccessMessage(response?.data?.message || "Gand mey lele response");
        closeModal();
      }
    },
  });

  return {
    createCategoryFormik,
  };
};
