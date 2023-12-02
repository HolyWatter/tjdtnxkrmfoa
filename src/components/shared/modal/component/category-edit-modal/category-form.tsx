import Input from "components/shared/input/default-input";
import { useState } from "react";

interface Props {
  onSubmit: (createValue: string) => void;
}

const CategoryForm = ({ onSubmit }: Props) => {
  const [newCategory, setNewCategory] = useState("");
  const inputNewCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };
  return (
    <form
      className="flex px-3 justify-between"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(newCategory);
      }}
    >
      <div className="w-4/5">
        <Input value={newCategory} onChange={inputNewCategory} />
      </div>
      <button className="w-1/5 text-center">추가</button>
    </form>
  );
};

export default CategoryForm;
