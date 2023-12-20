import PostItemList from "components/post-list/PostListItem";
import useGetHomeData from "hooks/useGetHomeData";

const HomeContents = () => {
  const { data } = useGetHomeData();

  return data ? (
    <div className="w-full">
      <p>최근 게시물</p>
      <div className="flex flex-wrap justify-between">
        {data.lastPost.length ? (
          data.lastPost.map((post) => (
            <div key={post.id} className="w-[48%]">
              <PostItemList isHome {...post} />
            </div>
          ))
        ) : (
          <p className="w-full text-black/50 text-center py-5 dark:text-white">
            최근 게시글이 없습니다.
          </p>
        )}
      </div>
      <p className="mt-10">고정 게시물</p>
      <div className="flex flex-wrap">
        {data.pinnedPost.length ? (
          data.pinnedPost.map((post) => (
            <div key={post.id} className="w-4/9">
              <PostItemList isHome {...post} />
            </div>
          ))
        ) : (
          <p className="w-full text-black/50 text-center py-5 dark:text-white">
            고정된 게시글이 없습니다.
          </p>
        )}
      </div>
    </div>
  ) : null;
};

export default HomeContents;
