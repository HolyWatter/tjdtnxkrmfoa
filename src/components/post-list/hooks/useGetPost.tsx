import { postApi } from "apis/apis";
import { Category } from "models/category.interface";
import { PostListType } from "models/post.interface";
import { useQuery } from "react-query";

const useGetPost = (cid: string | undefined) => {
  return useQuery<PostListType & { category: Category }>(
    ["postlist", cid],
    () => postApi.getPostListByCid(cid),
    {
      staleTime: 50000,
    }
  );
};

export default useGetPost;
