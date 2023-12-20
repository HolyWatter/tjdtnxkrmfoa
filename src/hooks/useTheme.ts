import { themeAtom } from "atom/themeAtom";
import { useRecoilState } from "recoil";

function useTheme() {
  const [theme, setTheme] = useRecoilState(themeAtom);

  const toggleTheme = () => {
    if (theme.isDark) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }

    setTheme((prev) => ({
      isDark: !prev.isDark,
    }));
  };

  return toggleTheme;
}

export default useTheme;
