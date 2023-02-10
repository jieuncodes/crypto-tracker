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
import { InfoData, ITickers, RouteState } from "../interfaces";
import { Container } from "@mui/material";
import {
  ChangeData,
  CoinImg,
  Description,
  Header,
  Img,
  PriceChange,
  PriceData,
  Rank,
  ShowMoreBtn,
  Tabs,
  Ticker,
  Title,
} from "../styles/Coin";
import ChangeDataOfTime from "../components/ChangeDataOfTime";
import { useRecoilState, useRecoilValue } from "recoil";
import { lightAtom, showFullTextAtom } from "../atoms";
import ShortenedText from "../components/ShortendText";

export const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
  background-color: rgba(206, 154, 100, 0.2);
  border: solid;
  border: 1px;
  padding: 7px 0px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isActive ? props.theme.accentColor : null};
  
  a {
    padding: 7px 0px;
    display: block;
  }
`;


function Coin() {
  const { state } = useLocation() as RouteState;
  const { coinId } = useParams();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  const isLight = useRecoilValue(lightAtom);
  const [showFullText, setShowFullText] = useRecoilState(showFullTextAtom);

  const onClick = () => setShowFullText((current) => !current);

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
      <Rank>Rank #{infoData?.rank}</Rank>
      <Header>
        <CoinImg>
          <Img src={infoData?.logo} />
        </CoinImg>
        <Title>
          {state?.name
            ? state.name
            : infoLoading || tickersLoading
            ? "Loading..."
            : null}
        </Title>
        <Ticker>{infoData?.symbol}</Ticker>
      </Header>
      <PriceChange>
        {tickersData ? (
          <>
            <PriceData>${tickersData.quotes.USD.price.toFixed(3)}</PriceData>
            <ChangeData>
              {ChangeDataOfTime("1d", tickersData, isLight)}
            </ChangeData>
          </>
        ) : (
          <div>"loading..."</div>
        )}
      </PriceChange>
      {infoData ? infoData.description.length > 200 ? (
        <>
          <Description>
            {ShortenedText(infoData?.description, 200, showFullText)}
          </Description>
          <ShowMoreBtn onClick={onClick}>{showFullText ? "▲ less": "more ▼"}</ShowMoreBtn>
        </>
      ):(<Description>
        {infoData.description}
      </Description>) : (
        <div>"loading..."</div>
      )}

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
    </Container>
  );
}

export default Coin;
