import { categoryApi } from "apis/apis/categoryApi";
import { Category } from "models/category.interface";
import { MutationOptions, useMutation, useQueryClient } from "react-query";

interface Props {
  onSuccess: () => void;
  onError: () => void;
}

const useCategoryCreateMuatation = ({ onSuccess, onError }: Props) => {
  const queryClient = useQueryClient();
  return useMutation(
    (categoryName: string) => categoryApi.createNewCategory(categoryName),
    {
      onSuccess: () => {
        onSuccess();
        queryClient.invalidateQueries("category");
      },
      onError: () => {},
    }
  );
};

export default useCategoryCreateMuatation;
