import PostItemList from "components/shared/PostListItem";
import { Post } from "models/post";

interface Props {
  title: string;
  postList: Post[] | undefined;
}

const ContentsContainer = ({ title, postList }: Props) => {
  return (
    <>
      <p>{title}</p>
      <div className="flex flex-wrap justify-between w-full xs:flex-col xs:flex-nowrap">
        {postList?.length ? (
          postList?.map((post) => (
            <div key={post.id} className="w-[48%] xs:w-full">
              <PostItemList isHome {...post} />
            </div>
          ))
        ) : (
          <p className="w-full text-black/50 text-center py-5 dark:text-white">
            게시글이 없습니다.
          </p>
        )}
      </div>
    </>
  );
};

export default ContentsContainer;
