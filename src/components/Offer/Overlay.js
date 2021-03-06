import { H3Styled } from "../../styledHelpers/Headers";
import { ImageDiv, OverlayDiv, OverlayTextDiv } from "./OfferStyles";

function Overlay() {
  return (
    <ImageDiv title="Mężczyzna za kierownicą">
      <OverlayTextDiv>
        <p>Wykonujemy również:</p>
        <H3Styled>badania psychotechniczne</H3Styled>
        <H3Styled>badania wstępne</H3Styled>
        <H3Styled>badania okresowe</H3Styled>
        <H3Styled>badania kontrolne</H3Styled>
        <H3Styled>badania sanitarno-epidemiologiczne</H3Styled>
      </OverlayTextDiv>
    </ImageDiv>
  );
}

export default Overlay;
