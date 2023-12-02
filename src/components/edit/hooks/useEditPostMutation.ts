import { postApi } from "apis/apis/postApi";
import { PostCreate } from "models/post.interface";
import { useMutation, useQueryClient } from "react-query";

interface Props {
  id: string;
  onSuccess: () => void;
  onError: () => void;
}

const useEditPostMutation = ({ onSuccess, onError, id }: Props) => {
  const queryClient = useQueryClient();
  return useMutation(
    (updateValues: { id: number } & PostCreate) =>
      postApi.updatePost(updateValues),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["post", id]);
        onSuccess();
      },
      onError: () => {
        onError();
      },
    }
  );
};

export default useEditPostMutation;
