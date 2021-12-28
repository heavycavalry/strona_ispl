import Container from "../../styledHelpers/Container";
import { CenteredSection } from "../../styledHelpers/Section";
import { WhiteBoardDiv } from "../../styledHelpers/WhiteBoardDiv";
import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";
import { MainText } from "../../styledHelpers/Headers";
import SectionHeading from "../SectionHeader";
import { useMediaPredicate } from "react-media-hook";
const PriceList = () => {
  return (
    <CenteredSection id="price">
      <Container>
        <SectionHeading
          name="CENNIK USŁUG"
          title="Badania w przystępnych cenach"
        />
        {useMediaPredicate(`${Theme.Breakpoints.maxTablet}`) && (
          <PriceTilesMobile>
            <PriceTileMobile
              price="210"
              title="Badanie lekarskie"
              text="w tym konsultacje z
laryngologiem,
neurologiem
i okulistą"
            />
            <PriceTileMobile
              price="80"
              title="Badanie psychologiczne"
              text="z zakresu medycyny pracy"
            />
            <PriceTileMobile
              price="150"
              title="Badanie psychologiczne"
              text="zgodnie z rozporządzeniem Ministra Zdrowia"
            />
            <PriceTileMobile
              price="200"
              title="Badanie kandydata"
              text="na nową kategorie: A, B, E oraz T"
            />
            <PriceTileMobile
              price="250"
              title="Badanie kandydata"
              text="na kategorie: C, D, E konsultacja okulistyczna w cenie"
            />
          </PriceTilesMobile>
        )}
        {useMediaPredicate(`${Theme.Breakpoints.tablet}`) && (
          <Grid>
            <PriceTileDesktop>
              <div>
                <PricetTileTitle>
                  Badania kandydatów na kierowcę
                </PricetTileTitle>
                <PriceTileText>na nową kategorie A, B, E oraz T</PriceTileText>
                <Price>200 PLN</Price>
              </div>
              <div>
                <PriceTileText>
                  na kategorie C, D, E z konsultacją okulistyczną
                </PriceTileText>
                <Price>250 PLN</Price>
              </div>
            </PriceTileDesktop>
            <PriceTileDesktop>
              <div>
                <PricetTileTitle>Badanie lekarskie</PricetTileTitle>
                <PriceTileText>
                  w tym konsultacje (laryngolog, neurolog, okulista)
                </PriceTileText>
                <Price>210 PLN</Price>
              </div>
            </PriceTileDesktop>
            <PriceTileDesktop>
              <div>
                <PricetTileTitle>Badanie psychologiczne</PricetTileTitle>
                <PriceTileText>z zakresu medycyny pracy</PriceTileText>
                <Price>80 PLN</Price>
              </div>
              <div>
                <PriceTileText>
                  (zgodnie z rozporządzeniem Ministra Zdrowia z dnia 8.07.2014r.
                  w sprawie badań psychologicznych)
                </PriceTileText>
                <Price>150 PLN</Price>
              </div>
            </PriceTileDesktop>
          </Grid>
        )}
      </Container>
    </CenteredSection>
  );
};

const PriceTileDesktop = styled(WhiteBoardDiv)`
  flex-direction: column;
  padding: 1rem 2rem;
  justify-content: flex-start;
  align-items: center;
  > :first-child {
    border-bottom: 2px solid ${Theme.Colors.greenOpacity};
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const PriceTileMobile = (props) => {
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

const PriceTileDiv = styled(WhiteBoardDiv)`
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

const PriceTilesMobile = styled.div`
  margin: 40px 0;
`;

export default PriceList;
