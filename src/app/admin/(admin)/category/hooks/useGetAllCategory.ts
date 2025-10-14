import { apiTag } from "@/constant/apiTag";
import { endpoints } from "@/constant/endpoints";
import { useGetDataQuery } from "@/lib/api";

export const useGetAllCategory = () => {
  const {} = useGetDataQuery({
    url: endpoints.category.list,
    params: {},
    tag: apiTag.category.getAll,
  });
};
