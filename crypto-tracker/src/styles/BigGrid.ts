import tw from "tailwind-styled-components";

export const Contents = tw.div<any>`grid grid-flow-dense grid-cols-[100px_auto_100px] w-full h-full`;

export const Header = tw.div<any>`z-10 fixed flex w-full top-0  h-14 place-items-center justify-center col-span-3 backdrop-blur-sm bg-black/60 text-white`;

export const ThemeBtnDiv = tw.div<any>`flex right-0 w-28 absolute `;

export const HomeBtnDiv = tw.div<any>`flex left-0 ml-7 absolute fill-white h-6`;

export const Body = tw.div` flex w-auto m-10 pt-14 col-start-2 `;

