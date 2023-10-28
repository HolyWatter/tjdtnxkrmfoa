import { modalAtom } from "atom/modalAtom";
import { useRecoilState } from "recoil";

const useHandleModal = () => {
  const [modalState, setModalState] = useRecoilState(modalAtom);

  const closeModal = () => {
    setModalState({
      isOpen: false,
      component: null,
    });
  };

  const openModal = (component: React.ReactNode) => {
    setModalState({
      isOpen: true,
      component: component,
    });
  };

  return { closeModal, openModal };
};

export default useHandleModal;
