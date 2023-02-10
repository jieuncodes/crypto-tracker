import { atom } from "recoil";

export const lightAtom = atom({
  key: "light",
  default: true,
});

export const timeRangeAtom = atom<String>({
  key: "timeRange",
  default: "1h",
});

export const showFullTextAtom = atom<boolean>({
  key: "showFullText",
  default: false,
})