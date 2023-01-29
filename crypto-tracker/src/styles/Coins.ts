import tw from "tailwind-styled-components";

export const Container = tw.div`
  w-full`;

export const Header = tw.div`
  flex,
  align-middle
  mb-5
`;

export const Title = tw.h1`
  font-bold
  text-2xl
  ml-0
  text-black

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

export const TopCoins = tw.div`
  w-full 
`;
export const TopCoinsHeader = tw.div`
  w-full
  grid-cols-[60px_2fr_1fr_100px]
  grid
  font-bold
  text-lg
  mb-2
  
`;
export const RankH = tw.div`flex justify-center place-items-center `;
export const CoinNameH = tw.div`flex flex-row place-items-center  text-start -m-[60px]`;
export const PriceH = tw.div`flex justify-end place-items-center `;
export const ChangeH = tw.div`flex justify-end place-items-center `;

export const TopCoinsData = tw.div` grid-cols-[60px_2fr_1fr_100px] grid w-full mb-1 h-14 `;

export const RankD = tw.div`flex justify-center place-items-center  text-center`;
export const CoinNameD = tw.div` flex flex-row place-items-center  text-start `;
export const CoinImg = tw.div`mr-4`;
export const CoinName = tw.div``;
export const PriceD = tw.div`flex justify-end place-items-center `;
export const ChangeD = tw.div`flex justify-end place-items-center `;
