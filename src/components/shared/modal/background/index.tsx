import { useModalContext } from "context/ModalContext";

interface Props {
  isDark: boolean;
  children: React.ReactNode;
}

const ModalBackGround = ({ children, isDark }: Props) => {
  const { closeModal } = useModalContext();
  return (
    <div
      onClick={closeModal}
      className={`fixed top-0 left-0 h-[100vh] w-full bg-modalbg z-20 flex justify-center items-center backdrop-blur-sm xs:px-5 ${
        isDark ? "dark " : ""
      }`}
    >
      {children}
    </div>
  );
};

export default ModalBackGround;
