import CollectWriteEditValue from "components/shared/CollectWriteEditValue";
import useWritePostMutation from "components/write/hooks/useWritePostMutation";
import { useSlidePopup } from "hooks/useSlidePopup";
import { PostCreate } from "models/post.interface";
import { useCallback } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const WritePostPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const openPopup = useSlidePopup();

  const { mutate } = useWritePostMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(["postlist", ""]);
      openPopup("게시글이 작성되었습니다.");
      navigate("/list");
    },
    onError: () => {
      openPopup("네트워크 오류입니다.");
    },
  });

  const onSubmit = useCallback(
    (postValues: PostCreate) => {
      mutate(postValues);
    },
    [mutate]
  );

  return <CollectWriteEditValue onSubmit={onSubmit} />;
};

export default WritePostPage;
