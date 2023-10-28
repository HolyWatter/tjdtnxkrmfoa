import { slidePopup } from "atom/slidePopupAtom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const useSlidePopup = () => {
  const [isInfoWindow, setIsInfoWindow] = useRecoilState(slidePopup);

  const windowOpen = (text: string) => {
    setIsInfoWindow({
      isOpen: true,
      message: text,
      isAnimation: true,
    });
  };

  return windowOpen;
};
