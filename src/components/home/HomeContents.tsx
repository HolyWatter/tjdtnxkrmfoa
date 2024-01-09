import useGetHomeData from "hooks/useGetHomeData";
import ContentsContainer from "./ContentsContainer";

const HomeContents = () => {
  const { data } = useGetHomeData();

  return data ? (
    <div className="w-full">
      <ContentsContainer title="최근 게시글" postList={data.lastPost} />
      <div className="h-[30px]" />
      <ContentsContainer title="고정 게시글" postList={data.pinnedPost} />
    </div>
  ) : null;
};

export default HomeContents;
