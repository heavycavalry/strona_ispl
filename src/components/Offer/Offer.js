import Heading from "../common/SectionHeading";
import Section from "../../styledHelpers/Section";
import Overlay from "./Overlay";
import {
  faAmbulance,
  faCar,
  faChalkboardTeacher,
  faHardHat,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import OfferTile from "./OfferTile";
import Container from "../../styledHelpers/Container";
import { OfferTilesDiv } from "./OfferStyles";

function Offer() {
  return (
    <Section id="offer">
      <Container>
        <Heading name="OFERTA BADAŃ" title="Badania psychologiczne" />
        <OfferTilesDiv>
          <OfferTile icon={faCar} text="Na nowe kategorie" />
          <OfferTile
            icon={faChalkboardTeacher}
            text="Instruktorów i egzaminatorów"
          />
          <OfferTile
            icon={faAmbulance}
            text="Do kierowania poj.uprzywilejowanymi"
          />
          <OfferTile icon={faTimesCircle} text="Po odebraniu prawa jazdy" />
          <OfferTile icon={faHardHat} text="W zakresie medycyny pracy" />
        </OfferTilesDiv>
      </Container>
      <Overlay />
    </Section>
  );
}

export default Offer;
