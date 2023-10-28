import { atom } from "recoil";

export const slidePopup = atom<{
  isOpen: boolean;
  message: string;
  isAnimation: boolean;
}>({
  key: "slidePopup",
  default: {
    isOpen: false,
    isAnimation: false,
    message: "",
  },
});
