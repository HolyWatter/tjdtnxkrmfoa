import { atom } from "recoil";

export const themeAtom = atom({
  key: "themeAtom",
  default: {
    isDark: localStorage.getItem("theme") === "light" ? false : true,
  },
});
