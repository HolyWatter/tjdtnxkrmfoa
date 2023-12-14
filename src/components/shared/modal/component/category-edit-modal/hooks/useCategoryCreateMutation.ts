import { categoryApi } from "apis/apis/categoryApi";
import { useMutation, useQueryClient } from "react-query";

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
      onError: () => {
        onError();
      },
    }
  );
};

export default useCategoryCreateMuatation;
