import useHandleModal from "hooks/useOpenModal";

interface Props {
  children: React.ReactNode;
}

const ModalBackGround = ({ children }: Props) => {
  const { closeModal } = useHandleModal();
  return (
    <div
      onClick={closeModal}
      className="fixed top-0 left-0 h-[100vh] w-full bg-modalbg z-20 flex justify-center items-center backdrop-blur-sm xs:px-5"
    >
      {children}
    </div>
  );
};

export default ModalBackGround;
