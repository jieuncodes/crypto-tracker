import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";

const Container = styled.div``;
const Header = styled.header``;
const Overview = styled.div``;
const OverviewItem = styled.div``;
const Description = styled.p``;
const Tabs = styled.div``;
const Tab = styled.span``;

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coin() {
  return (
    <Container>
      <Helmet>
        <Header></Header>
      </Helmet>

      <>
        <Overview>
          <OverviewItem>
            <span>Rank</span>
          </OverviewItem>
          <OverviewItem>
            <span>Symbol</span>
          </OverviewItem>
          <OverviewItem>
            <span>Price</span>
          </OverviewItem>
        </Overview>
        <Description></Description>
        <Overview>
          <OverviewItem>
            <span>Total Supply</span>
          </OverviewItem>
          <OverviewItem>
            <span>Max Supply</span>
          </OverviewItem>
        </Overview>

        <Tabs>
          <Tab>
            <Link to="">Price</Link>
          </Tab>
          <Tab>
            <Link to="">Chart</Link>
          </Tab>
        </Tabs>
      </>
    </Container>
  );
}

export default Coin;
