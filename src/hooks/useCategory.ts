import { categoryApi } from "apis/apis";
import { Category } from "models/category.interface";
import { useQuery } from "react-query";

const useCategory = () => {
  return useQuery<Category[]>("category", categoryApi.getUserCategory, {
    refetchOnWindowFocus: false,
    staleTime: 50000,
  });
};

export default useCategory;
