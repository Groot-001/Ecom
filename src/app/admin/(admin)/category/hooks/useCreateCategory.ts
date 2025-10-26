import { apiTag } from "@/constant/apiTag";
import { endpoints } from "@/constant/endpoints";
import { IApiResponse } from "@/interface/IApiResponse";
import { usePostDataMutation } from "@/lib/api";
import { showSuccessMessage } from "@/lib/toast";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IProps {
  closeModal: () => void;
}

interface ICreateCategory {
  name: string;
  description: string;
}

export const categorySchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .typeError("Only valid strinig"),
  description: Yup.string().required("Description is required"),
});

export const useCreateCategory = ({ closeModal }: IProps) => {
  const [createCategory, { isLoading }] = usePostDataMutation();
  // createCategory is a function that will send a post request and return a isLoading

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
        invalidateTag: [apiTag.category.getAll],
        // invalidate tag tells that here we perform some operation i.e mutation, which perform some changes in the tag of useGetDataQuery()
        // i.e [apiTag.category.getAll], so refetch them which the tag associated .
        // so when we perform invalidate then it goes and perfrom the useGetDataQuery because it has the same tag and then refetch 
      })) as IApiResponse<ICreateCategory>;
      if (response?.data?.code === 201) {
        showSuccessMessage(response?.data?.message || "");
        closeModal();
      }
    },
  });

  return {
    createCategoryFormik,
  };
};
