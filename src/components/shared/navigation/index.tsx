import logo from "assets/image/logo/logo.png";
import { themeAtom } from "atom/themeAtom";
import Login from "components/shared/modal/component/login";
import MenuIcon from "components/svg/menu-icon";
import MoonIcon from "components/svg/moon";
import SearchIcon from "components/svg/search-icon";
import SunIcon from "components/svg/sun";
import useHandleModal from "hooks/useOpenModal";
import useTheme from "hooks/useTheme";
import useToggle from "hooks/useToggle";
import useUser from "hooks/useUser";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import MenuBar from "./MenuBar";

const Navigation = () => {
  const [isMenubar, handleMenubar] = useToggle();
  const { openModal } = useHandleModal();
  const theme = useRecoilValue(themeAtom);
  const toggleTheme = useTheme();
  const user = useUser();

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
          {user ? (
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
