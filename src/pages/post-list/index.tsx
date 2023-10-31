import axiosInstance from "apis/axios-instance";
import PostItemList from "components/post-item/list";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Category } from "types/category.interface";
import { PostListType } from "types/post.interface";

const PostList = () => {
  const user = process.env.REACT_APP_USER_ID;
  const { cid } = useParams();

  const getPostListByCid = async () => {
    if (!cid) return (await axiosInstance.get(`/post/${user}`)).data;
    return (await axiosInstance.get(`/post/${user}/${cid}`)).data;
  };

  const { data: categoryList } = useQuery<
    PostListType & { category: Category }
  >(["postlist", cid], getPostListByCid, {
    staleTime: 50000,
  });

  return (
    <div className="w-full">
      <div className="flex gap-3 items-center  xs:px-3">
        <p className="text-lg">
          {categoryList?.category?.categoryName || "전체 카테고리"}
        </p>
        <p className="text-xs">({categoryList?.postCount})</p>
      </div>
      <div className="mt-5 w-full">
        {categoryList?.posts.map((item) => (
          <PostItemList key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default PostList;
