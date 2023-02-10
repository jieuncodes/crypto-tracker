import tw from "tailwind-styled-components";

export const Container = tw.div`dark:text-white`;
export const Rank = tw.div`bg-black/80 dark:bg-white/70 flex w-fit text-white dark:text-black rounded-md text-sm pl-2 pr-2 pt-[2px] pb-[2px] mb-4`;
export const Header = tw.div<any>`flex justify-start align-middle text-3xl font-semibold mb-3`;
export const CoinImg = tw.div<any>`pb-3 mr-3`;
export const Img = tw.img`
  w-10
  h-10
`;
export const Title = tw.h1`pt-[1px]`;
export const Ticker = tw.span`flex ml-3 mt-[7px] text-gray-500 font-thin text-xl`;
export const PriceChange = tw.div<any>`flex flex-row tracking-wide justify-start align-text-bottom font-roboto`;
export const PriceData = tw.div`text-4xl font-extrabold`;
export const ChangeData = tw.div<any>`flex ml-4 mt-2.5 text-lg `;
export const Description= tw.div<any>`mt-10`;
export const ShowMoreBtn = tw.span`text-gray-300 dark:text-gray-500 ml-5 hover:cursor-pointer absolute right-20 -mt-4`;

export const Tabs = tw.div<any>` grid grid-cols-2 mt-10 mb-10 gap-[10px]`;

