import { blogApi } from "apis/apis/blogApi";
import { Blog } from "models/blog";
import { useQuery } from "react-query";

const useBlogInfo = () => {
  return useQuery<Blog>("blogInfo", blogApi.getBlogInfo, {
    staleTime: 50000,
    refetchOnWindowFocus: false,
    suspense: true,
  });
};

export default useBlogInfo;
