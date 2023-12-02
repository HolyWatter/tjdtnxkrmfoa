import { categoryApi } from "apis/apis/categoryApi";
import { useMutation, useQueryClient } from "react-query";

interface Props {
  onSuccess: () => void;
  onError: () => void;
}

const useCategoryDeleteMutation = ({ onSuccess, onError }: Props) => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => categoryApi.deleteCategory(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("category");
      onSuccess();
    },
    onError: () => {
      onError();
    },
  });
};

export default useCategoryDeleteMutation;
