import useBlogInfo from "hooks/useBlogInfo";
import ProfileEditForm from "./profile-edit-form";
import useProfileMutation from "./hooks/useProfileMutation";
import { useSlidePopup } from "hooks/useSlidePopup";
import { UpdateBlogInfo } from "models/blog";
import { useCallback } from "react";
import { useModalContext } from "context/ModalContext";

const ProfileEdit = () => {
  const { data: blogInfo } = useBlogInfo();
  const { closeModal } = useModalContext();
  const openPopup = useSlidePopup();

  const { mutate } = useProfileMutation({
    onSuccess: () => {
      openPopup("프로필이 수정되었습니다.");
      closeModal();
    },
    onError: () => {
      openPopup("네트워크 에러입니다.");
    },
  });

  const onSubmit = useCallback(
    (updateValues: UpdateBlogInfo) => {
      mutate(updateValues);
    },
    [mutate]
  );

  return blogInfo ? (
    <ProfileEditForm
      blogName={blogInfo.blogName}
      nickname={blogInfo.nickname}
      description={blogInfo.description}
      thumbnailUrl={blogInfo.thumbnailUrl}
      onSubmit={onSubmit}
    />
  ) : null;
};

export default ProfileEdit;
