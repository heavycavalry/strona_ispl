import Heading from "../SectionHeader";
import Section from "../../styledHelpers/Section";
import Overlay from "./Overlay";
import Theme from "../../styledHelpers/Theme";
import {
  faAmbulance,
  faCar,
  faChalkboardTeacher,
  faHardHat,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { DesktopTile, MobileTile } from "./OfferTile";
import Container from "../../styledHelpers/Container";
import { MobileTilesDiv } from "./OfferStyles";
import { useMediaPredicate } from "react-media-hook";
import styled from "styled-components";

function Offer() {
  return (
    <>
      <Section id="offer">
        {useMediaPredicate(`${Theme.Breakpoints.maxTablet}`) && (
          <Container>
            <Heading name="OFERTA BADAŃ" title="Badania psychologiczne" />
            <MobileTilesDiv>
              <MobileTile icon={faCar} text="Na nowe kategorie" />
              <MobileTile
                icon={faChalkboardTeacher}
                text="Instruktorów i egzaminatorów"
              />
              <MobileTile
                icon={faAmbulance}
                text="Do kierowania poj.uprzywilejowanymi"
              />
              <MobileTile
                icon={faTimesCircle}
                text="Po odebraniu prawa jazdy"
              />
              <MobileTile icon={faHardHat} text="W zakresie medycyny pracy" />
            </MobileTilesDiv>
          </Container>
        )}
        {useMediaPredicate(`${Theme.Breakpoints.tablet}`) && (
          <GridContainer>
            <Heading name="OFERTA BADAŃ" title="Badania psychologiczne" />
            <DesktopTile icon={faCar} text="Na nowe kategorie" />
            <DesktopTile
              icon={faChalkboardTeacher}
              text="Instruktorów i egzaminatorów"
            />
            <DesktopTile
              icon={faAmbulance}
              text="Do kierowania poj.uprzywilejowanymi"
            />
            <DesktopTile icon={faTimesCircle} text="Po odebraniu prawa jazdy" />
            <DesktopTile icon={faHardHat} text="W zakresie medycyny pracy" />
          </GridContainer>
        )}
        <Overlay />
      </Section>
    </>
  );
}

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items: end;
`;

export default Offer;
