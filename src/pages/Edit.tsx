import useEditPostMutation from "components/edit/hooks/useEditPostMutation";
import CollectWriteEditValue from "components/shared/CollectWriteEditValue";
import usePost from "hooks/usePost";
import { useSlidePopup } from "hooks/useSlidePopup";
import { PostCreate } from "models/post";
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const { id = "" } = useParams();
  const { data: post } = usePost(id);
  const openPopup = useSlidePopup();
  const navigate = useNavigate();

  const { mutate } = useEditPostMutation({
    id,
    onSuccess: () => {
      openPopup("게시글을 수정했습니다.");
      navigate(`/post/${id}`);
    },
    onError: () => {
      openPopup("네크워크 오류입니다.");
    },
  });

  const onSubmit = useCallback(
    (updateValues: PostCreate) => {
      mutate({ ...updateValues, id: Number(id) });
    },
    [mutate, id]
  );

  return (
    <>
      {post ? (
        <CollectWriteEditValue editValues={post} onSubmit={onSubmit} />
      ) : null}
    </>
  );
};

export default EditPage;
