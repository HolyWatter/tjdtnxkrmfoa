import { categoryApi } from "apis/apis/categoryApi";
import { Category } from "models/category";
import { useQuery } from "react-query";

const useCategory = () => {
  return useQuery<Category[]>("category", categoryApi.getUserCategory, {
    refetchOnWindowFocus: false,
    staleTime: 50000,
  });
};

export default useCategory;
