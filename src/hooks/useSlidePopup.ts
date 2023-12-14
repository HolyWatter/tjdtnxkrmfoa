import { slidePopup } from "atom/slidePopupAtom";
import { useSetRecoilState } from "recoil";

export const useSlidePopup = () => {
  const setIsInfoWindow = useSetRecoilState(slidePopup);

  const windowOpen = (text: string) => {
    setIsInfoWindow({
      isOpen: true,
      message: text,
      isAnimation: true,
    });
  };

  return windowOpen;
};
