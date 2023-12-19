import Input from "components/shared/input/DefaultInput";
import TextArea from "components/shared/input/DefaultTextarea";
import useHandleModal from "hooks/useOpenModal";
import { UpdateBlogInfo } from "models/blog.interface";
import { useCallback, useState } from "react";
import uploadImgFunction from "utils/function/uploadImg";

interface Props {
  blogName: string;
  nickname: string;
  description: string;
  thumbnailUrl: string;
  onSubmit: (updateValues: UpdateBlogInfo) => void;
}

const ProfileEditForm = ({
  blogName,
  nickname,
  description,
  thumbnailUrl,
  onSubmit,
}: Props) => {
  const [profileData, setProfileData] = useState<UpdateBlogInfo>({
    blogName,
    nickname,
    description,
    thumbnailUrl,
  });

  const { closeModal } = useHandleModal();

  const uploadImg = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target!;
      if (!files) return;
      const link = await uploadImgFunction(files[0]);
      setProfileData((prevValues) => ({ ...prevValues, thumbnailUrl: link }));
    },
    []
  );

  const inputProfile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setProfileData((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    },
    []
  );

  return (
    <div className="flex flex-col gap-5 px-7 py-10 shadow-lg">
      <p className="text-center py-2 text-xl font-black">프로필 수정</p>
      <label className="flex justify-center">
        <img
          alt=""
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
        <button onClick={() => onSubmit(profileData)}>수정</button>
      </div>
    </div>
  );
};

export default ProfileEditForm;
