import GithubIcon from "components/svg/github-icon";
import useBlogInfo from "hooks/useBlogInfo";
import Skeleton from "./Skeleton";
import withSuspense from "./hocs/withSuspense";

const Profile = () => {
  const { data: blogInfo } = useBlogInfo();
  console.log(2);
  return (
    <div className="flex flex-col w-full px-5 py-10 border-border border-2 rounded-md gap-5 xs:flex-row xs:p-3 xs:border-b-2 xs:border-x-0 xs:border-t-0 xs:rounded-none">
      <div className="relative xs:w-1/4 w-[220px] max-w-full m-auto">
        <img
          alt=""
          src={blogInfo?.thumbnailUrl}
          className="bg-gray-500 rounded-full m-auto  xs:m-0 w-full h-[220px] xs:max-h-[100px] xs:h-[90px]"
        />
        <a
          href="https://github.com/HolyWatter"
          target="_blank"
          className="absolute bottom-[-5px] right-5 xs:right-0 xs:bottom-0"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
      <div className="max-w-full break-all mt-5 xs:w-3/4 xs:mt-0">
        <p className="text-gray text-gray-700 font-semibold dark:text-gray-300 xs:m-0">
          {blogInfo?.nickname}
        </p>
        <p className="mt-3 text-gray-400 xs:mt-0 xs:text-sm whitespace-pre-line">
          {blogInfo?.description}
        </p>
      </div>
    </div>
  );
};

const ProfileSkeleton = () => {
  return (
    <Skeleton>
      <div className="flex flex-col w-full px-5 py-10 border-border border-2 rounded-md gap-5 xs:flex-row xs:p-3 xs:border-b-2 xs:border-x-0 xs:border-t-0 xs:rounded-none">
        <Skeleton.Circle className="max-w-full w-[220px] xs:w-1/4 m-auto xs:m-0 h-[220px] xs:max-h-[100px] xs:h-[90px]" />
        <div className="max-w-full break-all mt-5 xs:w-3/4 xs:mt-0">
          <Skeleton.TextLg className="xs:m-0" />
          <Skeleton.TextSm className="mt-3 xs:mt-0 xs:text-sm w-[full]" />
          <Skeleton.TextSm className="mt-3 xs:mt-0 xs:text-sm w-[full]" />
          <Skeleton.TextSm className="mt-3 xs:mt-0 xs:text-sm w-[full]" />
        </div>
      </div>
    </Skeleton>
  );
};

export default withSuspense(Profile, { fallback: <ProfileSkeleton /> });
