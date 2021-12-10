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

function Offer() {
  return (
    <Section id="offer">
      <Container>
        <Heading name="OFERTA BADAŃ" title="Badania psychologiczne" />
        <MediaOffer />
      </Container>
      <Overlay />
    </Section>
  );
}

const MediaOffer = () => {
  return (
    <>
      {useMediaPredicate(`${Theme.Breakpoints.maxTablet}`) && (
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
          <MobileTile icon={faTimesCircle} text="Po odebraniu prawa jazdy" />
          <MobileTile icon={faHardHat} text="W zakresie medycyny pracy" />
        </MobileTilesDiv>
      )}
      {useMediaPredicate(`${Theme.Breakpoints.tablet}`) && (
        <>
          <div>
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
          </div>
        </>
      )}
    </>
  );
};

export default Offer;
