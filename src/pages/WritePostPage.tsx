import CollectWriteEditValue from "components/shared/CollectWriteEditValue";
import usePost from "hooks/usePost";
import { PostCreate } from "models/post";
import { useCallback } from "react";

const WritePostPage = () => {
  const { write } = usePost();

  const onSubmit = useCallback(
    (postValues: PostCreate) => {
      write(postValues);
    },
    [write]
  );

  return <CollectWriteEditValue onSubmit={onSubmit} />;
};

export default WritePostPage;
