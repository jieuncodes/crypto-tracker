import { atom } from "recoil";



export const lightAtom = atom<Boolean>({
  key: "light",
  default: localStorage.getItem("SAVED_THEME") == "lightTheme" ? true : false,
});

export const timeRangeAtom = atom<String>({
  key: "timeRange",
  default: "1h",
});

export const showFullTextAtom = atom<boolean>({
  key: "showFullText",
  default: false,
})