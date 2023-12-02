import { postApi } from "apis/apis/postApi";
import { useSlidePopup } from "hooks/useSlidePopup";
import { PostCreate } from "models/post.interface";
import { UseMutationOptions, useMutation } from "react-query";

const useWritePostMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: () => void;
}) => {
  const windowOpen = useSlidePopup();
  return useMutation(
    (createValues: PostCreate) => postApi.createPost(createValues),
    {
      onSuccess: () => {
        console.log(1);
        windowOpen("게시글이 작성되었습니다.");
        onSuccess();
      },
      onError: () => {},
    }
  );
};

export default useWritePostMutation;
