import { postApi } from "apis/apis/postApi";
import { Post } from "models/post";
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
    suspense: true,
  });
};

export default useGetHomeData;
