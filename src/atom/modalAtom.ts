import { atom } from "recoil";

export const modalAtom = atom<ModalAtom>({
  key: "modalAtom",
  default: {
    isOpen: false,
    component: null,
  },
});

interface ModalAtom {
  isOpen: boolean;
  component: null | React.ReactNode;
}
