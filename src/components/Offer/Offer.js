import Heading from "../SectionHeader";
import Section from "../../styledHelpers/Section";
import Overlay from "./Overlay";
import {
  faAmbulance,
  faCar,
  faChalkboardTeacher,
  faHardHat,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Tile } from "./Tile";
import { GridContainer, TilesDiv } from "./OfferStyles";

function Offer() {
  return (
    <Section id="offer">
      <GridContainer>
        <div>
          <Heading name="OFERTA BADAŃ" title="Badania psychologiczne" />
        </div>
        <Tile icon={faCar} text="Na nowe kategorie" />
        <Tile icon={faChalkboardTeacher} text="Instruktorów i egzaminatorów" />
        <Tile icon={faAmbulance} text="Do kierowania poj.uprzywilejowanymi" />
        <Tile icon={faTimesCircle} text="Po odebraniu prawa jazdy" />
        <Tile icon={faHardHat} text="W zakresie medycyny pracy" />
      </GridContainer>
      <Overlay />
    </Section>
  );
}

export default Offer;
