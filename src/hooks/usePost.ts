import { postApi } from "apis/apis/postApi";
import { useSlidePopup } from "hooks/useSlidePopup";
import { Post, PostCreate } from "models/post.interface";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const usePost = (id?: string) => {
  const windowOpen = useSlidePopup();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data } = useQuery<Post>(["post", id], () => postApi.getOnePost(id!));

  const { mutate: write } = useMutation(
    (createValues: PostCreate) => postApi.createPost(createValues),
    {
      onSuccess: () => {
        windowOpen("게시글이 작성되었습니다.");
        queryClient.invalidateQueries(["postlist", ""]);
        navigate("/list");
      },
      onError: () => {},
    }
  );

  const { mutate: deletePost } = useMutation(
    (id: string) => postApi.deletePost(id),
    {
      onSuccess: () => {
        windowOpen("게시글이 삭제되었습니다.");
        queryClient.invalidateQueries(["postlist", ""]);
        navigate("/list");
      },
    }
  );

  return { data, write, deletePost };
};

export default usePost;
