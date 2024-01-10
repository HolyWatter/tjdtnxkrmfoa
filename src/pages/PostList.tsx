import PostItemList from "components/shared/PostListItem";
import useGetPostList from "hooks/usePostList";
import { useParams } from "react-router-dom";

const PostListPage = () => {
  const { cid } = useParams();

  const { data: postList } = useGetPostList(cid);

  return (
    <div className="w-full">
      <div className="flex gap-3 items-center  xs:px-3">
        <p className="text-lg">
          {postList?.category?.categoryName || "전체 카테고리"}
        </p>
        <p className="text-xs">({postList?.postCount})</p>
      </div>
      <div className="mt-5 w-full">
        {postList?.posts.map((item) => (
          <PostItemList key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default PostListPage;
