import { modalAtom } from "atom/modalAtom";
import { useSetRecoilState } from "recoil";

const useHandleModal = () => {
  const setModalState = useSetRecoilState(modalAtom);

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
