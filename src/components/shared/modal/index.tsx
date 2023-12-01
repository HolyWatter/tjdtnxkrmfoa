import { modalAtom } from "atom/modalAtom";
import ModalBackGround from "./background";
import { useRecoilValue } from "recoil";

const Modal = () => {
  const { component } = useRecoilValue(modalAtom);
  return (
    <ModalBackGround>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[500px]  rounded-md shadow-md z-10 dark:bg-slate-900"
      >
        {component}
      </div>
    </ModalBackGround>
  );
};

export default Modal;
