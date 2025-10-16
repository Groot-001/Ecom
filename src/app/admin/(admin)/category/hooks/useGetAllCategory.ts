import { apiTag } from "@/constant/apiTag";
import { endpoints } from "@/constant/endpoints";
import { IPaginatedResponse } from "@/interface/IPaginatedResponse";
import { useGetDataQuery } from "@/lib/api";
import { useState } from "react";

export interface ICategoryItem {
  id: string;
  name: string;
  description: string;
}

export const useGetAllCategory = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(80);

  const { data, isLoading, isError } = useGetDataQuery<{
    data: IPaginatedResponse<ICategoryItem>;
    isLoading: boolean;
    isError: boolean;
  }>({
    url: endpoints.category.list,
    params: { page: page, pageSize: pageSize },
    tag: apiTag.category.getAll,
  });

  return {
    data,
    isLoading,
    isError,
  };
};
