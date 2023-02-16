import { IPrice, IQuote } from "../interfaces";
import { Container, Content, ContentTitle, ContentMain } from "../styles/Price";

function Price({ price }: IPrice) {
  const priceData: IQuote = price;
  return (
    <Container>
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
