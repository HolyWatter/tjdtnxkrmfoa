import { postApi } from "apis/apis/postApi";
import { Category } from "models/category";
import { PostListType } from "models/post";
import { useQuery } from "react-query";

const useGetPostList = (cid: string | undefined) => {
  return useQuery<PostListType & { category: Category }>(
    ["postlist", cid],
    () => postApi.getPostListByCid(cid),
    {
      staleTime: 50000,
      suspense: true,
    }
  );
};

export default useGetPostList;
