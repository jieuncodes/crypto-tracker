import styled from "styled-components";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.accentColor};
  border-radius: 10px;
  width: 100%;
  height: 100px;
  margin: 5px 0;
`;

const ContentTitle = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
  font-weight: 800;
`;

const ContentMain = styled.div<{ checker?: number }>`
  font-size: 30px;
`;

interface IQuote {
  ath_price: number;
  market_cap: number;
  percent_change_1h: number;
  volume_24h: number;
}

interface IPrice {
  price: any;
  name: string;
}

function Price({ price, name }: IPrice) {
  const priceData: IQuote = price;
  return (
    <Container>
      <Helmet>
        <title>{`${name} Price`}</title>
      </Helmet>
      <Content>
        <ContentTitle>All Time High</ContentTitle>
        <ContentMain>${priceData.ath_price}</ContentMain>
      </Content>
      <Content>
        <ContentTitle>Market Cap</ContentTitle>
        <ContentMain>${priceData.market_cap}</ContentMain>
      </Content>
      <Content>
        <ContentTitle>Price Change in 1Hr</ContentTitle>
        <ContentMain checker={priceData.percent_change_1h}>
          {priceData.percent_change_1h}%
        </ContentMain>
      </Content>

      <Content>
        <ContentTitle>Coin Volume in 24hr</ContentTitle>
        <ContentMain>{priceData.volume_24h}</ContentMain>
      </Content>
    </Container>
  );
}

export default Price;
