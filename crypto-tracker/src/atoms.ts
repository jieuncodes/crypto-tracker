import { atom } from "recoil";

export const lightAtom = atom({
  key: "light",
  default: true,
});

export const timeRangeAtom = atom({
  key: "timeRange",
  default: "1h",
});
