import { postApi } from "apis/apis/postApi";
import { Post } from "models/post.interface";
import { useQuery } from "react-query";

const useGetHomeData = () => {
  return useQuery<
    | {
        pinnedPost: Post[];
        lastPost: Post[];
      }
    | undefined
  >(["homedata"], () => postApi.getHomeData(), {
    staleTime: 50000,
    refetchOnWindowFocus: false,
  });
};

export default useGetHomeData;
