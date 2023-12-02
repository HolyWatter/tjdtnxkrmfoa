import CloseIcon from "components/svg/close-icon";
import useCategory from "hooks/useCategory";
import useHandleModal from "hooks/useOpenModal";
import { useSlidePopup } from "hooks/useSlidePopup";
import { useCallback } from "react";
import CategoryEditItem from "./category-edit-item";
import useCategoryCreateMuatation from "./hooks/useCategoryCreateMutation";
import CategoryForm from "./category-form";

export const CategoryEditModal = () => {
  const openPopup = useSlidePopup();
  const { closeModal } = useHandleModal();
  const { data: categoryList } = useCategory();

  const { mutate: createMutate } = useCategoryCreateMuatation({
    onSuccess: () => {
      openPopup("카테고리가 생성되었습니다.");
    },
    onError: () => {
      openPopup("오류가 발생했습니다.");
    },
  });

  const onSubmit = useCallback(
    (createValue: string) => {
      createMutate(createValue);
    },
    [createMutate]
  );

  return (
    <div className="relative pb-1">
      <p className="py-3 border-b-2 text-center">카테고리 수정</p>
      <button onClick={closeModal} className="absolute top-3 right-3">
        <CloseIcon />
      </button>
      <div className="py-7 flex flex-col gap-3 px-3">
        {categoryList?.map((item) => (
          <CategoryEditItem key={item.id} {...item} />
        ))}
      </div>
      <CategoryForm onSubmit={onSubmit} />
    </div>
  );
};

export default CategoryEditModal;
