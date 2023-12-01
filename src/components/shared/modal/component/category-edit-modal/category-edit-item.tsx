import { categoryApi } from "apis/apis";
import axiosInstance from "apis/axios-instance";
import Input from "components/shared/input/default-input";
import UnderLineInput from "components/shared/input/underline-input";
import DeleteIcon from "components/svg/delete-icon";
import EditIcon from "components/svg/edit-icon";
import { useSlidePopup } from "hooks/useSlidePopup";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { Category } from "models/category.interface";

const CategoryEditItem = ({ id, categoryName }: Category) => {
  const [categoryEditValue, setCategoryEditValue] = useState(categoryName);
  const [isEditComponent, setIsEditComponent] = useState(false);
  const queryClient = useQueryClient();
  const openPopup = useSlidePopup();
  const deleteCateogry = async () => {
    const res = await categoryApi.deleteCategory(id);

    if (!!res.message) {
      openPopup(res.message);
      queryClient.invalidateQueries("category");
    }
  };

  const changeToEditComponent = () => {
    setIsEditComponent((prev) => !prev);
  };

  const inputCategoryEditValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryEditValue(e.target.value);
  };

  const editCategory = async () => {
    const res = await categoryApi.updateCategory(id, categoryEditValue);

    if (!!res.message) {
      openPopup(res.message);
      queryClient.invalidateQueries("category");
      setIsEditComponent(false);
    }
  };

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
          <button className="w-1/5" onClick={editCategory}>
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
            <button onClick={deleteCateogry}>
              <DeleteIcon />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryEditItem;
