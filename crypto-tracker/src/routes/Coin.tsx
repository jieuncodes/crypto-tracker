import styled from "styled-components";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import Chart from "./Chart";
import Price from "./Price";
import { fetchCoinInfo, fetchTickerInfo } from "../api";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import { InfoData, ITickers } from "../interfaces";


const Container = styled.div``;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isActive ? props.theme.accentColor : null};
  a {
    padding: 7px 0px;

    display: block;
  }
`;

const Title = styled.h1``;


interface RouteState {
  state: { name: string };
}

function Coin() {
  const { state } = useLocation() as RouteState;
  const { coinId } = useParams();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(String(coinId)),
    { staleTime: 30000 }
  );

  const { isLoading: tickersLoading, data: tickersData } = useQuery<ITickers>(
    ["tickers", coinId],
    () => fetchTickerInfo(String(coinId)),
    { refetchInterval: 5000 }
  );
  console.log("infoData", infoData);
  console.log("tickersData", tickersData?.quotes);

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name
            ? state.name
            : infoLoading || tickersLoading
            ? "Loading..."
            : null}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name
            ? state.name
            : infoLoading || tickersLoading
            ? "Loading..."
            : null}
        </Title>
      </Header>
      <>
        <Overview>
          <OverviewItem>
            <span>Rank : </span>
            <span>{infoData?.rank}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Symbol :</span>
            <span>{infoData?.symbol}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Price</span>
            <span>${tickersData?.quotes.USD.price.toFixed(3)}</span>
          </OverviewItem>
        </Overview>
        <Description>{infoData?.description}</Description>

        <Overview>
          <OverviewItem>
            <span>Total Supply</span>
            <span>{tickersData?.total_supply}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Max Supply</span>
            <span>{tickersData?.max_supply}</span>
          </OverviewItem>
        </Overview>
        <Tabs>
          <Tab isActive={chartMatch !== null}>
            <Link to={`/${coinId}/chart`}>Chart</Link>
          </Tab>
          <Tab isActive={priceMatch !== null}>
            <Link to={`/${coinId}/price`}>Price</Link>
          </Tab>
        </Tabs>

        <Routes>
          <Route
            path="price"
            element={
              <Price
                name={tickersData?.name as string}
                price={tickersData?.quotes.USD}
              />
            }
          />
          <Route path="chart" element={<Chart coinId={coinId!} />} />
        </Routes>
      </>
    </Container>
  );
}

export default Coin;
