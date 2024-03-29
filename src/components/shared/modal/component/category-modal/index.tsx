import { Link } from "react-router-dom";
import { Category } from "models/category";
import { useModalContext } from "context/ModalContext";

interface Props {
  categoryList: Category[];
}

const CategoryModal = ({ categoryList }: Props) => {
  const { closeModal } = useModalContext();
  return (
    <div className="dark:text-white">
      <p className="py-3 border-b-2 text-center">카테고리</p>
      <div className="py-7 flex flex-col gap-3">
        <Link to="/list" className="text-center" onClick={closeModal}>
          전체 글 <span className="text-xs">(5)</span>
        </Link>
        {categoryList.map((item) => (
          <Link
            to={`/list/${item.id}`}
            onClick={closeModal}
            className="text-center"
            key={item.id}
          >
            {item.categoryName}{" "}
            <span className="text-xs">({item.postCount})</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryModal;
