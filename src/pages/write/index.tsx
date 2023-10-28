import { useState } from "react";
import UnderLineInput from "components/input/underline-input";
import { useQuery } from "react-query";
import { categoryApi } from "apis/apis";
import { Category } from "types/category.interface";
import useInput from "hooks/useInput";
import { PostCreate } from "types/post.interface";
import ToastEditor from "components/toast-editor";
import axiosInstance from "apis/axios-instance";
import { useNavigate } from "react-router-dom";
import useHandleModal from "hooks/useOpenModal";
import CategoryEditModal from "components/modal/component/category-edit-modal";

const WritePost = () => {
  const { openModal } = useHandleModal();
  const [postValue, inputPostValue] = useInput<PostCreate>({
    title: "",
    categoryId: "",
  });
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const { data: categoryList } = useQuery<Category[]>(
    "category",
    categoryApi.getUserCategory,
    {
      staleTime: 50000,
    }
  );

  const submitCreatePost = async () => {
    const res = await axiosInstance.post("/post", {
      content,
      title: postValue.title,
      categoryId: Number(postValue.categoryId),
    });

    if (res.status === 200) {
      alert("게시글이 작성되었습니다.");
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="w-1/2 flex flex-col gap-5 xs:w-full px-3">
        <UnderLineInput
          value={postValue.title}
          name="title"
          onChange={inputPostValue}
          placeholder="제목을 입력해주세요."
        />
        <div className="w-full flex gap-5 ">
          <select
            name="categoryId"
            value={postValue.categoryId}
            onChange={inputPostValue}
            className="w-full bg-bg border-border border-b-2 focus:outline-none dark:bg-transparent"
          >
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
        <ToastEditor setContent={setContent} />
      </div>
      <div className="flex gap-3 mt-5 justify-end ">
        <button>취소</button>
        <button onClick={submitCreatePost}>글 작성</button>
      </div>
    </div>
  );
};

export default WritePost;
