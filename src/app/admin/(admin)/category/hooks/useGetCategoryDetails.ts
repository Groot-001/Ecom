import { apiTag } from "@/constant/apiTag";
import { endpoints } from "@/constant/endpoints";
import { useGetDataQuery } from "@/lib/api";

interface IProps {
  categoryId: string;
}

export const useGetCategoryDetails = ({ categoryId }: IProps) => {
  const { isLoading, isError } = useGetDataQuery({
    url: endpoints.category.details.replace("id", categoryId),
    tag: apiTag.category.getDetails,
  });
  return { isLoading, isError };
};
