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

export const TopCoinsTable = tw.table`
w-full
bg-slate-400
`;
export const TopCoinsTHeader = tw.thead`
font-bold
text-lg
`;

export const TopCoinsTBody = tw.tbody`w-full `;
export const Tr = tw.tr``;
export const RankH = tw.th`w-20 bg-red-100`;
export const RankD = tw.td`w-20 bg-slate-300 align-middle`;
export const CoinNameH = tw.th`w-96 bg-orange-700`;
export const CoinNameD = tw.td`w-96`;
export const PriceH = tw.th`w-44`;
export const PriceD = tw.td`w-44 text-end`;
export const ChangeH = tw.th`w-44 bg-green-50`;
export const ChangeD = tw.td`w-44`;
