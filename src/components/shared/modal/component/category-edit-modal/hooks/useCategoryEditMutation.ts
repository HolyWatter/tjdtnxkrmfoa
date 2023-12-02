import { categoryApi } from "apis/apis/categoryApi";
import { useMutation, useQueryClient } from "react-query";

interface Props {
  onSuccess: () => void;
  onError: () => void;
}

const useCategoryEditMutation = ({ onSuccess, onError }: Props) => {
  const queryClient = useQueryClient();
  return useMutation(
    ({
      categoryId,
      categoryName,
    }: {
      categoryId: number;
      categoryName: string;
    }) => categoryApi.updateCategory(categoryId, categoryName),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("category");
        onSuccess();
      },
      onError: () => {
        onError();
      },
    }
  );
};

export default useCategoryEditMutation;
