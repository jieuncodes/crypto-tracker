import tw from "tailwind-styled-components";

export const Contents = tw.div<any>`grid grid-flow-dense grid-cols-[auto_auto_auto] w-full h-full`;

export const HeaderArea = tw.div<any>`z-10 fixed flex w-full top-0 h-16 place-items-center justify-center col-span-3 backdrop-blur-sm bg-black/60 text-white`;

export const ThemeBtnDiv = tw.div<any>`flex right-0 w-28 absolute`;

export const BackBtn = tw.div<any>`left-0 top-4 ml-7 absolute fill-white hover:cursor-pointer `;

export const Body = tw.div<any>`flex w-auto m-10 pt-14 col-start-2`;
