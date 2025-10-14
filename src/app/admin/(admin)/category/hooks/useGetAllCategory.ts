import { apiTag } from "@/constant/apiTag";
import { endpoints } from "@/constant/endpoints";
import { useGetDataQuery } from "@/lib/api";

interface ICategory {
  id: string;
  name: string;
  description: string;
}

interface IGetCategoryResponse {
  message: string;
  code: number;
  success: boolean;
  data: ICategory[];
  errors: any | null;
}

export const useGetAllCategory = () => {
  const {} = useGetDataQuery({
    url: endpoints.category.list,
    params: {},
    tag: apiTag.category.getAll,
  });
  return;
};
