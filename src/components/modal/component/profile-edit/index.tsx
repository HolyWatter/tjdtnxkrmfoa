import { blogApi, mediaApi } from "apis/apis";
import Input from "components/input/default-input";
import TextArea from "components/input/default-textarea";
import UnderLineInput from "components/input/underline-input";
import useHandleModal from "hooks/useOpenModal";
import { useSlidePopup } from "hooks/useSlidePopup";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { UpdateBlogInfo } from "types/blog.interface";

const ProfileEdit = () => {
  const { closeModal } = useHandleModal();
  const [profileData, setProfileData] = useState<UpdateBlogInfo>({
    blogName: "",
    nickname: "",
    description: "",
    thumbnailUrl: "",
  });

  const openPopup = useSlidePopup();
  const queryClient = useQueryClient();
  const { data: blogInfo } = useQuery("blogInfo", blogApi.getBlogInfo, {
    staleTime: 50000,
  });

  useEffect(() => {
    if (!blogInfo) return;
    setProfileData({
      blogName: blogInfo.blogName,
      nickname: blogInfo.nickname,
      thumbnailUrl: blogInfo.thumbnailUrl,
      description: blogInfo.description,
    });
  }, [blogInfo]);

  const uploadImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target!;
    if (!files) return;
    if (files[0]) {
      const formData = new FormData();
      formData.append("image", files[0]);
      const res = await mediaApi.uploadImg(formData);
      setProfileData({
        ...profileData,
        thumbnailUrl: res.link,
      });
    }
  };

  const inputProfile = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const submitNewProfile = async () => {
    try {
      const res = await blogApi.updateBlogInfo(profileData);
      openPopup(res.message);
      queryClient.invalidateQueries("blogInfo");
      closeModal();
    } catch (e) {
      openPopup("네트워크 에러");
    }
  };

  return (
    <div className="flex flex-col gap-5 px-7 py-10 shadow-lg">
      <p className="text-center py-2 text-xl font-black">프로필 수정</p>
      <label className="flex justify-center">
        <img
          src={profileData.thumbnailUrl}
          className="bg-gray-500 w-[220px] h-[220px] rounded-full m-auto xs:w-1/4 xs:h-[90px] xs:max-h-[100px] xs:m-0"
        />
        <input className="hidden" type="file" onChange={uploadImg} />
      </label>
      <div className="flex gap-5 items-center">
        <p className="w-1/6">이름</p>
        <div className="w-4/5">
          <Input
            name="blogName"
            value={profileData.blogName}
            onChange={inputProfile}
          />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <p className="w-1/6">닉네임</p>
        <div className="w-4/5">
          <Input
            name="nickname"
            value={profileData.nickname}
            onChange={inputProfile}
          />
        </div>
      </div>
      <div className="flex gap-5 items-start">
        <p className="w-1/6">설명글</p>
        <div className="w-4/5">
          <TextArea
            name="description"
            value={profileData.description}
            onChange={inputProfile}
          />
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <button onClick={closeModal}>닫기</button>
        <button onClick={submitNewProfile}>수정</button>
      </div>
    </div>
  );
};

export default ProfileEdit;
