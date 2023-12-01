import { categoryApi } from "apis/apis";
import Input from "components/shared/input/default-input";
import CloseIcon from "components/svg/close-icon";
import useHandleModal from "hooks/useOpenModal";
import { useSlidePopup } from "hooks/useSlidePopup";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Category } from "models/category.interface";
import CategoryEditItem from "./category-edit-item";

export const CategoryEditModal = () => {
  const [newCategory, setNewCategory] = useState("");
  const openPopup = useSlidePopup();
  const { closeModal } = useHandleModal();
  const queryClient = useQueryClient();
  const { data: categoryList } = useQuery<Category[]>(
    "category",
    categoryApi.getUserCategory,
    {
      staleTime: 50000,
    }
  );

  const inputNewCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };

  const submitNewCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await categoryApi.createNewCategory(newCategory);
    if (!!res.message) {
      openPopup("카테고리가 생성되었습니다.");
      queryClient.invalidateQueries("category");
      setNewCategory("");
    }
  };

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
      <form className="flex px-3 justify-between" onSubmit={submitNewCategory}>
        <div className="w-4/5">
          <Input value={newCategory} onChange={inputNewCategory} />
        </div>
        <button className="w-1/5 text-center">추가</button>
      </form>
    </div>
  );
};

export default CategoryEditModal;
