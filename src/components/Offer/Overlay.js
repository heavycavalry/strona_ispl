import { H3Styled } from "../../styledHelpers/Headers";
import { OverlayDiv, OverlayImageDiv, OverlayTextDiv } from "./OfferStyles";

function Overlay() {
  return (
    <OverlayImageDiv>
      <OverlayText />
      <OverlayDiv> </OverlayDiv>
    </OverlayImageDiv>
  );
}

function OverlayText() {
  return (
    <OverlayTextDiv>
      <p>Wykonujemy również:</p>
      <H3Styled>badania psychotechniczne</H3Styled>
      <H3Styled>badania wstępne</H3Styled>
      <H3Styled>badania okresowe</H3Styled>
      <H3Styled>badania kontrolne</H3Styled>
      <H3Styled>badania sanitarno-epidemiologiczne</H3Styled>
    </OverlayTextDiv>
  );
}

export default Overlay;
