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
import {
  ChangeData,
  CoinImg,
  Container,
  Description,
  Header,
  Img,
  PriceChange,
  PriceData,
  Rank,
  ShowMoreBtn,
  Tab,
  Tabs,
  Ticker,
  Title,
} from "../styles/Coin";
import ChangeDataOfTime from "../components/ChangeDataOfTime";
import { useRecoilState, useRecoilValue } from "recoil";
import { lightAtom, showFullTextAtom } from "../atoms";
import ShortenedText from "../components/ShortendText";

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
          {infoData?.name
            ? infoData.name
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
      {infoData ? (
        infoData.description.length > 200 ? (
          <>
            <Description>
              {ShortenedText(infoData?.description, 200, showFullText)}
            </Description>
            <ShowMoreBtn onClick={onClick}>
              {showFullText ? "▲ less" : "more ▼"}
            </ShowMoreBtn>
          </>
        ) : (
          <Description>{infoData.description}</Description>
        )
      ) : (
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
          element={<Price price={tickersData?.quotes.USD} />}
        />
        <Route path="chart" element={<Chart coinId={coinId!} />} />
      </Routes>
    </Container>
  );
}

export default Coin;
