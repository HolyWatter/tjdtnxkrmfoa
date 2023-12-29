import { useRecoilValue } from "recoil";
import ModalBackGround from "./background";
import { themeAtom } from "atom/themeAtom";

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  const { isDark } = useRecoilValue(themeAtom);

  return (
    <ModalBackGround isDark={isDark}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[500px]  rounded-md shadow-md z-10 dark:bg-slate-900"
      >
        {children}
      </div>
    </ModalBackGround>
  );
};

export default Modal;
