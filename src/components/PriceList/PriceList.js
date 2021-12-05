import Container from "../../styledHelpers/Container";
import Section from "../../styledHelpers/Section";
import WhiteRoundDiv from "../../styledHelpers/WhiteRoundDiv";
import SectionHeading from "../common/SectionHeader";
import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";
import { MainText } from "../../styledHelpers/Headers";
const PriceList = () => {
  return (
    <Section id="price">
      <Container>
        <SectionHeading
          name="CENNIK USŁUG"
          title="Badania w przystępnych cenach"
        />
        <PriceTiles>
          <PriceTile
            price="210"
            title="Badanie lekarskie"
            text="w tym konsultacje z
laryngologiem,
neurologiem
i okulistą"
          />
          <PriceTile
            price="80"
            title="Badanie psychologiczne"
            text="z zakresu medycyny pracy"
          />
          <PriceTile
            price="150"
            title="Badanie psychologiczne"
            text="zgodnie z rozporządzeniem Ministra Zdrowia"
          />
          <PriceTile
            price="200"
            title="Badanie kandydata"
            text="na nową kategorie: A, B, E oraz T"
          />
          <PriceTile
            price="250"
            title="Badanie kandydata"
            text="na kategorie: C, D, E konsultacja okulistyczna w cenie"
          />
        </PriceTiles>
      </Container>
    </Section>
  );
};

const PriceTile = (props) => {
  return (
    <PriceTileDiv>
      <div>
        <Price>{props.price} zł</Price>
      </div>
      <div>
        <PricetTileTitle>{props.title}</PricetTileTitle>
        <PriceTileText>{props.text}</PriceTileText>
      </div>
    </PriceTileDiv>
  );
};

const PriceTileDiv = styled(WhiteRoundDiv)`
  height: 110px;
  padding: 5px 10px;
  z-index: 2;
  border-left: 5px solid ${Theme.Colors.green};
  position: relative;
  > :first-child {
    width: 30%;
  }
  > :nth-child(2) {
    width: 60%;
  }
`;

const PricetTileTitle = styled(MainText)`
  font-weight: bold;
  line-height: 1;
`;

const PriceTileText = styled(MainText)`
  color: ${Theme.Colors.mediumGray}; ;
`;

const Price = styled.p`
  color: ${Theme.Colors.green};
  font-size: 30px;
  text-align: center;
`;

const PriceTiles = styled.div`
  margin: 40px 0;
`;

export default PriceList;
