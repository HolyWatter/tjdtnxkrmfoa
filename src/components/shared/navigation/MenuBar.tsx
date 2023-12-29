import ProfileEdit from "components/shared/modal/component/profile-edit";
import { useModalContext } from "context/ModalContext";
import { Link } from "react-router-dom";

interface Props {
  handleMenubar: () => void;
}

const MenuBar = ({ handleMenubar }: Props) => {
  const { openModal } = useModalContext();
  return (
    <>
      <div className="w-[260px] absolute top-10 bg-white rounded-lg shadow-lg py-3 right-[-30px] dark:bg-slate-900 z-10">
        <div className="text-center flex flex-col gap-3">
          <Link to="/write" onClick={handleMenubar}>
            <p className="">글쓰기</p>
          </Link>
          <button
            onClick={() => {
              openModal(<ProfileEdit />);
            }}
          >
            프로필 수정
          </button>
          <button>로그아웃</button>
        </div>
      </div>
      <div
        className="fixed w-full h-screen top-0 left-0"
        onClick={handleMenubar}
      ></div>
    </>
  );
};

export default MenuBar;
