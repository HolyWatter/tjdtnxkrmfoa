import Input from "components/shared/input/DefaultInput";
import DeleteIcon from "components/svg/delete-icon";
import EditIcon from "components/svg/edit-icon";
import { useSlidePopup } from "hooks/useSlidePopup";
import { Category } from "models/category.interface";
import { useState } from "react";
import useCategoryDeleteMutation from "./hooks/useCategoryDeleteMutation";
import useCategoryEditMutation from "./hooks/useCategoryEditMutation";

const CategoryEditItem = ({ id, categoryName }: Category) => {
  const [categoryEditValue, setCategoryEditValue] = useState(categoryName);
  const [isEditComponent, setIsEditComponent] = useState(false);
  const openPopup = useSlidePopup();

  const changeToEditComponent = () => {
    setIsEditComponent((prev) => !prev);
  };

  const inputCategoryEditValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryEditValue(e.target.value);
  };

  const { mutate: deleteMutate } = useCategoryDeleteMutation({
    onSuccess: () => {
      openPopup("카테고리가 삭제되었습니다.");
    },
    onError: () => {
      openPopup("네트워크 오류입니다.");
    },
  });

  const { mutate: updateMutate } = useCategoryEditMutation({
    onSuccess: () => {
      openPopup("카테고리가 수정되었습니다.");
      setIsEditComponent(false);
    },
    onError: () => {
      openPopup("네트워크 오류입니다.");
    },
  });

  return (
    <div className="flex justify-between h-10 items-center">
      {isEditComponent ? (
        <>
          <div className="w-4/5">
            <Input
              value={categoryEditValue}
              onChange={inputCategoryEditValue}
            />
          </div>
          <button
            className="w-1/5"
            onClick={() =>
              updateMutate({ categoryId: id, categoryName: categoryEditValue })
            }
          >
            수정
          </button>
        </>
      ) : (
        <>
          <p>{categoryName}</p>
          <div className="flex gap-3">
            <button onClick={changeToEditComponent}>
              <EditIcon />
            </button>
            <button onClick={() => deleteMutate(id)}>
              <DeleteIcon />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryEditItem;
