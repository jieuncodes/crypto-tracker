import { Link } from "react-router-dom";
import { fetchCoins, fetchCoinTickers } from "../api";
import { useQuery } from "react-query";
import {
  Container,
  Header,
  Title,
  CoinList,
  Coin,
  Loader,
  Img,
} from "../styles/Coins";
import { ICoin, IPriceData } from "../interfaces";

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Header>
        <Title>Top Coins</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <thead>
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">Coin</th>
                  <th scope="col">Price</th>
                  <th scope="col">1h %</th>
                </tr>
              </thead>
              <td>{coin.rank}</td>
              <td>
                <Link to={`/${coin.id}`} state={coin}>
                  <Img
                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  />
                  {coin.name}
                </Link>
              </td>
              <td>$ {coin.quotes.USD.price.toFixed(2)}</td>
              <td>{coin.quotes.USD.percent_change_1h}</td>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
