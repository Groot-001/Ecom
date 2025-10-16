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

export const useGetAllCategory = (page: number, pageSize: number) => {

  const { data, isLoading, isError } = useGetDataQuery<{
    data: IPaginatedResponse<ICategoryItem>;
    isLoading: boolean;
    isError: boolean;
  }>({
    url: endpoints.category.list,
    params: { page: page, pageSize: pageSize },
    tag: apiTag.category.getAll,
  });

  // const paginatedData = data?.data?.data ?? [];
  const totalPages = data?.data?.totalPages ?? 1;

  return {
    data,
    isLoading,
    isError,
    totalPages,
  };
};
