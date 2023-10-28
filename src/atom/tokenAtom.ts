import { atom } from "recoil";

export const tokenAtom = atom<null | string>({
  key: "accessToken",
  default: null,
});
