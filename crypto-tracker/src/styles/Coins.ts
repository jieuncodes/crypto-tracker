import tw from "tailwind-styled-components";

export const Container = tw.div`
w-full`;

export const Header = tw.div`
flex,
align-middle
`;

export const Title = tw.h1`
  font-bold
  text-2xl
  ml-0
  text-black

`;

export const CoinList = tw.table`
w-full`;

export const Coin = tw.div`
  bg-slate-100
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
