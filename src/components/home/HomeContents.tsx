import PostSkeleton from "components/shared/Skeleton/PostSkeleton";
import withSuspense from "components/shared/hocs/withSuspense";
import useGetHomeData from "hooks/useGetHomeData";
import ContentsContainer from "./ContentsContainer";

const HomeContents = () => {
  const { data } = useGetHomeData();
  console.log(data);
  return (
    <div className="w-full">
      <ContentsContainer title="최근 게시글" postList={data?.lastPost} />
      <div className="h-[30px]" />
      <ContentsContainer title="고정 게시글" postList={data?.pinnedPost} />
    </div>
  );
};

const ContentsSkeleton = () => {
  return (
    <div className="w-full">
      <div>최근 게시글</div>
      <div className="flex flex-wrap justify-between w-full xs:flex-col xs:flex-nowrap">
        {new Array(4).fill(0).map((_, idx) => (
          <div key={idx} className="w-[48%] xs:w-full">
            <PostSkeleton />
          </div>
        ))}
      </div>
      <div className="h-[30px]" />
      <div>고정 게시글</div>
      <div className="flex flex-wrap justify-between w-full xs:flex-col xs:flex-nowrap">
        {new Array(4).fill(0).map((_, idx) => (
          <div key={idx} className="w-[48%] xs:w-full">
            <PostSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
};

export default withSuspense(HomeContents, { fallback: <ContentsSkeleton /> });
