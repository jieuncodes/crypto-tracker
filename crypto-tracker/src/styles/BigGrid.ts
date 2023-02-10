import tw from "tailwind-styled-components";

export const Contents = tw.div<any>`dark:text-white grid grid-flow-dense grid-cols-[auto_auto_auto] w-full h-full`;

export const HeaderArea = tw.div<any>`z-10 fixed flex w-full top-0 h-16 place-items-center justify-center col-span-3 backdrop-blur-sm dark:bg-[#181c20]/30 bg-white/30 shadow-lg dark:text-white`;

export const ThemeBtnDiv = tw.div<any>`flex -right-6 top-0 h-28 w-28 absolute`;

export const ThemeBtn = tw.button`h-16 w-16`;

export const BackBtn = tw.div<any>`left-0 top-4 ml-7 absolute fill-white hover:cursor-pointer `;

export const Body = tw.div<any>`flex w-auto m-10 pt-14 col-start-2 `;
