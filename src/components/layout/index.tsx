import { modalAtom } from "atom/modalAtom";
import { slidePopup } from "atom/slidePopupAtom";
import { themeAtom } from "atom/themeAtom";
import CategoryBar from "components/category-bar";
import Modal from "components/modal";
import Navigation from "components/navigation";
import Profile from "components/profile";
import SlideInfoWindow from "components/slide-popup";
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
  }, [isSlidePopup.isOpen]);

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
  }, [isSlidePopup.isAnimation]);

  return (
    <div className={`${isDark && "dark"} scrollbar-hide xs:relative`}>
      <div
        className={`scrollbar-hide min-h-screen h-screen m-auto bg-bg overflow-auto font-orbit dark:bg-gray-800 dark:text-white pb-20`}
      >
        {isOpen && <Modal />}
        {isSlidePopup.isOpen && <SlideInfoWindow />}
        <Navigation />
        <div className="flex max-w-[1200px] m-auto pt-[70px] gap-7 items-start xs:flex-col">
          <div className="flex flex-col w-[270px] gap-7 xs:w-full">
            <Profile />
            <CategoryBar />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
