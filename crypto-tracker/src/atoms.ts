import { atom } from "recoil";

const savedTheme = localStorage.getItem("SAVED_THEME");

export const lightAtom = atom({
  key: "light",
  default: savedTheme ? (savedTheme == "lightTheme" ? true : false) : true,
});

export const timeRangeAtom = atom<String>({
  key: "timeRange",
  default: "1h",
});

export const showFullTextAtom = atom<boolean>({
  key: "showFullText",
  default: false,
});
