import { Link } from "react-router-dom";
import { withTheme } from "styled-components";

import { useQuery } from "react-query";
import {
  Container,
  Header,
  Title,
  TopCoins,
  Loader,
  Img,
  TopCoinsHeader,
  RankD,
  CoinNameD,
  TopCoinsData,
  RankH,
  CoinNameH,
  PriceH,
  ChangeH,
  PriceD,
  ChangeD,
  CoinImg,
  CoinName,
} from "../styles/Coins";
import { fetchTickers } from "../api";
import TimeRangeBtns from "../components/TimeRangeBtns";
import { ITickers } from "../interfaces";
import { useRecoilValue } from "recoil";
import { lightAtom, timeRangeAtom } from "../atoms";
import changeDataOfTime from "../components/ChangeDataOfTime";

function Coins() {
  const { isLoading, data } = useQuery<ITickers[]>("allCoins", fetchTickers);
  const timeRange = useRecoilValue(timeRangeAtom);
  const isLight = useRecoilValue(lightAtom);

  return (
    <Container>
      <Header>
        <Title>Top Coins</Title>
        <TimeRangeBtns />
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <TopCoins>
          <TopCoinsHeader>
            <RankH></RankH>
            <CoinNameH>Coin</CoinNameH>
            <PriceH>Price</PriceH>
            <ChangeH>{timeRange} %</ChangeH>
          </TopCoinsHeader>

          {data?.slice(0, 100).map((coin) => (
            <Link to={`/${coin.id}`} state={coin} key={coin.id}>
              <TopCoinsData>
                <RankD>{coin.rank}</RankD>
                <CoinNameD>
                  <CoinImg>
                    <Img
                      src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                    />
                  </CoinImg>
                  <CoinName>
                    <span> {coin.name}</span>
                  </CoinName>
                </CoinNameD>
                <PriceD>$ {coin.quotes.USD.price.toFixed(2)}</PriceD>
                <ChangeD>{changeDataOfTime(timeRange, coin, isLight)}</ChangeD>
              </TopCoinsData>
            </Link>
          ))}
        </TopCoins>
      )}
    </Container>
  );
}

export default Coins;
