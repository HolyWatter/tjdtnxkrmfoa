import Skeleton from ".";

const PostSkeleton = () => {
  return (
    <Skeleton>
      <div className="w-full flex py-5 border-grey border-b-2 gap-5 text-clip h-[170px] xs:px-2 xs:h-[130px]">
        <Skeleton.Square className="w-[130px] h-[130px] xs:w-[100px] xs:h-[100px] xs:min-w-[100px]" />
        <div className="w-4/5  flex flex-col justify-between space-y-2">
          <Skeleton.TextLg className="w-full xs:w-[200px]" />
          <div className="flex flex-col gap-2">
            <Skeleton.TextSm className="w-full xs:w-[200px]" />
            <Skeleton.TextSm className="w-full" />
          </div>
          <div className="flex justify-end items-end gap-5 xs:flex-col xs:gap-1">
            <Skeleton.TextLg className="w-[120px]" />
            <Skeleton.TextSm className="w-[80px]" />
          </div>
        </div>
      </div>
    </Skeleton>
  );
};

export default PostSkeleton;
