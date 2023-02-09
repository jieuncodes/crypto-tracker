import tw from "tailwind-styled-components";

export const Container = tw.div<any>`
  w-full`;

export const Header = tw.div<any>`
  flex,
  align-middle
  mb-5
`;

export const Title = tw.h1`
  font-bold
  text-2xl
  ml-0
  text-black
  mb-8

`;

export const Coin = tw.div`
  w-full
  border-solid
  border-b-2
  border-grey
  
`;
export const Loader = tw.span`
    align-middle
`;
export const Img = tw.img`
  w-10
  h-10
`;

export const TopCoins = tw.div<any>`
  w-full 
`;
export const TopCoinsHeader = tw.div<any>`
  w-full
  grid-cols-[60px_2fr_1fr_100px]
  grid
  font-bold
  text-lg
  pb-2
  border-solid
  border-b-[1px] border-slate-300
`;
export const RankH = tw.div`flex justify-center place-items-center `;
export const CoinNameH = tw.div`flex flex-row place-items-center  text-start -m-[60px]`;
export const PriceH = tw.div`flex justify-end place-items-center `;
export const ChangeH = tw.div`flex justify-end place-items-center `;

export const TopCoinsData = tw.div<any>` grid-cols-[60px_2fr_1fr_100px] grid w-full h-20 border-solid border-b-[1px]  border-slate-300 align-middle hover:bg-slate-200 transition duration-150 ease-out hover:ease-in `;

export const RankD = tw.div`flex justify-start place-items-center text-center ml-3`;
export const CoinNameD = tw.div<any>` flex flex-row place-items-center  text-start`;
export const CoinImg = tw.div<any>`mr-4`;
export const CoinName = tw.div<any>``;
export const PriceD = tw.div`flex justify-end place-items-center `;
export const ChangeD = tw.div`flex justify-end place-items-center `;
