import { blogApi } from "apis/apis";
import axiosInstance from "apis/axios-instance";
import { useQuery } from "react-query";

const Profile = () => {
  const { data: blogInfo } = useQuery("blogInfo", blogApi.getBlogInfo, {
    staleTime: 50000,
  });

  return (
    <div className="flex flex-col w-full px-5 py-10 border-border border-2 rounded-md gap-5 xs:flex-row xs:p-3 xs:border-b-2 xs:border-x-0 xs:border-t-0 xs:rounded-none">
      <img
        src={blogInfo?.thumbnailUrl}
        className="bg-gray-500 w-[220px] h-[220px] rounded-full m-auto xs:w-1/4 xs:h-[90px] xs:max-h-[100px] xs:m-0"
      />
      <div className="max-w-full break-all mt-5 xs:w-3/4 xs:mt-0">
        <p className="text-gray text-gray-700 font-semibold dark:text-gray-300 xs:m-0">
          {blogInfo?.nickname}
        </p>
        <p className="mt-3 text-gray-400 xs:mt-0 xs:text-sm">
          {blogInfo?.description}
        </p>
      </div>
    </div>
  );
};

export default Profile;
