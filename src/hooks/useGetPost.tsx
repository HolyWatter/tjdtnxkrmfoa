import { postApi } from "apis/apis";
import { Post } from "models/post.interface";
import { useQuery } from "react-query";

const useGetPost = (id: string) => {
  return useQuery<Post>(["post", id], () => postApi.getOnePost(id!));
};

export default useGetPost;
