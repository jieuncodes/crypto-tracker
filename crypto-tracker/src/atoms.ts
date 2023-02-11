import { atom } from "recoil";

const savedTheme = localStorage.getItem("SAVED_THEME")
  ? localStorage.getItem("SAVED_THEME")
  : "lightTheme";

export const lightAtom = atom({
  key: "light",
  default: savedTheme == "lightTheme" ? true : false,
});

export const timeRangeAtom = atom<String>({
  key: "timeRange",
  default: "1h",
});

export const showFullTextAtom = atom<boolean>({
  key: "showFullText",
  default: false,
});
