import axiosInstance from "apis/axios-instance";
import logo from "assets/image/logo/logo.png";
import { themeAtom } from "atom/themeAtom";
import Login from "components/shared/modal/component/login";
import MenuIcon from "components/svg/menu-icon";
import MoonIcon from "components/svg/moon";
import SunIcon from "components/svg/sun";
import useHandleModal from "hooks/useOpenModal";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import MenuBar from "./menu-bar";
import useToggle from "hooks/useToggle";
import SearchIcon from "components/svg/search-icon";

const Navigation = () => {
  const [isMenubar, handleMenubar] = useToggle();

  const getUser = async () => {
    const res = await axiosInstance.get("/users");
    return res.data;
  };
  const { data: currentUser } = useQuery("currentUser", getUser, {
    staleTime: 60000,
    retry: 1,
  });

  const { openModal } = useHandleModal();
  const [theme, setTheme] = useRecoilState(themeAtom);

  const toggleTheme = () => {
    setTheme({
      isDark: !theme.isDark,
    });
  };

  return (
    <div className="bg-white w-full shadow-md fixed top-0 z-10 dark:bg-slate-900">
      <div className="m-auto max-w-[1200px]  h-[50px] flex justify-between items-center px-10 xs:p-4">
        <Link to="/">
          <img className="w-[100px]" src={logo} alt="" />
        </Link>
        <div className="flex gap-5 items-center relative">
          <Link to="/search?keyword=">
            <SearchIcon />
          </Link>
          <button onClick={toggleTheme}>
            {theme.isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          {currentUser ? (
            <button onClick={handleMenubar}>
              <MenuIcon />
            </button>
          ) : (
            <button
              className="text-sm bg-navy text-white px-5 py-2 rounded-md"
              onClick={() => openModal(<Login />)}
            >
              로그인
            </button>
          )}
          {isMenubar && <MenuBar handleMenubar={handleMenubar} />}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
