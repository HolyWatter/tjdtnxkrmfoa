import UnderLineInput from "components/shared/input/UnderlineInput";
import CategoryEditModal from "components/shared/modal/component/category-edit-modal";
import useCategory from "hooks/useCategory";
import useInput from "hooks/useInput";
import { PostCreate } from "models/post.interface";
import { useState } from "react";
import Editor from "./SunEditor";
import { useModalContext } from "context/ModalContext";

interface Props {
  onSubmit: (postValues: Partial<PostCreate>) => void;
  editValue?: Omit<PostCreate, "categoryId" | "isPinned" | "thumbnailUrl">;
}

const InputPostValues = ({ onSubmit, editValue }: Props) => {
  const { openModal } = useModalContext();
  const [postValue, inputPostValue] = useInput<Partial<PostCreate>>({
    title: editValue ? editValue.title : "",
    categoryId: "",
  });
  const [content, setContent] = useState("");
  const { data: categoryList } = useCategory();

  return (
    <div className="flex flex-col">
      <div className="w-1/2 flex flex-col gap-5 xs:w-full px-3">
        <UnderLineInput
          value={postValue.title}
          name="title"
          onChange={inputPostValue}
          placeholder="제목을 입력해주세요."
          defaultValue={postValue.title}
        />
        <div className="w-full flex gap-5 ">
          <select
            name="categoryId"
            value={postValue.categoryId}
            onChange={inputPostValue}
            className="w-full bg-bg border-border border-b-2 focus:outline-none dark:bg-transparent"
          >
            <option>카테고리를 설정해주세요</option>
            {categoryList?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.categoryName}
              </option>
            ))}
          </select>
          <button
            className="whitespace-nowrap"
            onClick={() => openModal(<CategoryEditModal />)}
          >
            카테고리수정
          </button>
        </div>
      </div>
      <div className="mt-10 w-full overflow-hidden xs-3 m-auto flex justify-center">
        <Editor setContent={setContent} editValue={editValue} />
      </div>
      <div className="flex gap-3 mt-5 justify-end ">
        <button>취소</button>
        <button
          onClick={() =>
            onSubmit({
              ...postValue,
              content,
            })
          }
        >
          글 작성
        </button>
      </div>
    </div>
  );
};

export default InputPostValues;
