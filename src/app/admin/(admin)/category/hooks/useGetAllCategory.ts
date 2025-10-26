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

interface IPaginationParams {
  page: number;
  pageSize: number;
}

export const useGetAllCategory = ({ page, pageSize }: IPaginationParams) => {
  const { data, isLoading, isError } = useGetDataQuery<{
    // This sends a request to backend and get the response in redux under the key and associate that data with a tag that is : (some type and id)
    data: IPaginatedResponse<ICategoryItem>;
    isLoading: boolean;
    isError: boolean;
  }>({
    url: endpoints.category.list,
    params: { page: page, pageSize: pageSize },
    tag: apiTag.category.getAll,
    // while fetching the data RTK Query itself provide some default tag for cache but we need to provide the tag ourself for some specific purpose like refetching.
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
