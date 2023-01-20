import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Container,
  Header,
  Title,
  TopCoinsTable,
  Loader,
  Img,
  TopCoinsTHeader,
  RankH,
  RankD,
  CoinNameD,
  CoinNameH,
  PriceH,
  ChangeH,
  Tr,
  TopCoinsTBody,
} from "../styles/Coins";
import { ITickers } from "../interfaces";
import { fetchTickers } from "../api";

function Coins() {
  const { isLoading, data } = useQuery<ITickers[]>("allCoins", fetchTickers);

  return (
    <Container>
      <Header>
        <Title>Top Coins</Title>
      </Header>

      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <TopCoinsTable>
          <TopCoinsTHeader>
            <Tr>
              <RankH scope="col">Rank</RankH>
              <CoinNameH scope="col">Coin</CoinNameH>
              <PriceH scope="col">Price</PriceH>
              <ChangeH scope="col">1h %</ChangeH>
            </Tr>
          </TopCoinsTHeader>

          {data?.slice(0, 100).map((coin) => (
            <TopCoinsTBody>
              <Tr>
                <RankD>{coin.rank}</RankD>
                <CoinNameD>
                  <Link to={`/${coin.id}`} state={coin}>
                    <Img
                      src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                    />
                    {coin.name}
                  </Link>
                </CoinNameD>
                <PriceH>$ {coin.quotes.USD.price.toFixed(2)}</PriceH>
                <ChangeH>{coin.quotes.USD.percent_change_1h}</ChangeH>
              </Tr>
            </TopCoinsTBody>
          ))}
        </TopCoinsTable>
      )}
    </Container>
  );
}

export default Coins;
