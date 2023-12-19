import { modalAtom } from "atom/modalAtom";
import { slidePopup } from "atom/slidePopupAtom";
import { themeAtom } from "atom/themeAtom";
import Profile from "components/shared";
import CategoryBar from "components/shared/CategoryBar";
import Modal from "components/shared/modal";
import Navigation from "components/shared/navigation";
import SlideInfoWindow from "components/shared/SlidePopup";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

const Layout = () => {
  const { isDark } = useRecoilValue(themeAtom);
  const { isOpen } = useRecoilValue(modalAtom);
  const [isSlidePopup, setIsSlidePopup] = useRecoilState(slidePopup);

  useEffect(() => {
    if (isSlidePopup.isOpen) {
      const timeout = setTimeout(() => {
        setIsSlidePopup((prev) => {
          return {
            ...prev,
            isAnimation: false,
          };
        });
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [isSlidePopup.isOpen, setIsSlidePopup]);

  useEffect(() => {
    if (!isSlidePopup.isAnimation) {
      setTimeout(() => {
        setIsSlidePopup({
          isOpen: false,
          message: "",
          isAnimation: false,
        });
      }, 500);
    }
  }, [isSlidePopup.isAnimation, setIsSlidePopup]);

  return (
    <div className={`${isDark && "dark"} scrollbar-hide xs:relative`}>
      <div
        className={`scrollbar-hide min-h-screen h-screen m-auto bg-bg overflow-auto font-orbit dark:bg-gray-800 dark:text-white pb-20`}
      >
        {isOpen && <Modal />}
        {isSlidePopup.isOpen && <SlideInfoWindow />}
        <Navigation />
        <div className="flex max-w-[1200px] m-auto pt-[70px] gap-7 items-start xs:flex-col">
          <div className="flex flex-col w-1/4 gap-7 xs:w-full">
            <Profile />
            <CategoryBar />
          </div>
          <div className="w-3/4 xs:w-full px-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
