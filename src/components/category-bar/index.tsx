import { categoryApi } from "apis/apis";
import CategoryModal from "components/modal/component/category-modal";
import useHandleModal from "hooks/useOpenModal";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Category } from "types/category.interface";

const CategoryBar = () => {
  const { openModal } = useHandleModal();
  const { data: categoryList } = useQuery<Category[]>(
    "category",
    categoryApi.getUserCategory,
    {
      staleTime: 50000,
    }
  );

  const totalCount = useMemo(() => {
    return categoryList?.reduce((a: number, b: Category) => a + b.postCount, 0);
  }, [categoryList]);

  return (
    <>
      <div className="rounded-md border-border border-2 min-h-[300px] p-5 xs:hidden">
        <p className="text-grey-800">카테고리</p>
        <div className="mt-5 flex flex-col gap-2">
          <Link to="/list">
            전체 글 <span className="text-xs">({totalCount})</span>
          </Link>
          {categoryList?.map((item) => (
            <Link to={`/list/${item.id}`} className="" key={item.id}>
              {item.categoryName}{" "}
              <span className="text-xs">({item.postCount})</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="sm:hidden flex justify-end px-5">
        <button
          className="bg-navy px-5 py-2 rounded-md text-white"
          onClick={() =>
            openModal(<CategoryModal categoryList={categoryList!} />)
          }
        >
          카테고리
        </button>
      </div>
    </>
  );
};

export default CategoryBar;
