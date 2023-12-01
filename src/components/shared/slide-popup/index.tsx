import { slidePopup } from "atom/slidePopupAtom";
import { useRecoilValue } from "recoil";

const SlidePopup = () => {
  const isPopupOpen = useRecoilValue(slidePopup);
  return (
    <div
      className={`dark:bg-gray-800 fixed z-40 bg-white top-5 right-5 w-[330px] p-5 shadow-md rounded-lg ${
        isPopupOpen.isOpen && "animate-slidedown"
      } ${!isPopupOpen.isAnimation && "animate-slideup"}`}
    >
      <p className="font-bold">{isPopupOpen.message}</p>
    </div>
  );
};

export default SlidePopup;
