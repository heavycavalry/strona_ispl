import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlexDiv from "../../styledHelpers/FlexDiv";

export const OverlayImageDiv = styled.div`
  background: url(${`${process.env.PUBLIC_URL}/assets/images/overlay-img-mobile.jpg`})
    no-repeat center center fixed;
  background-size: cover;
  max-width: 100vw;
  height: 50vh;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  display: flex;
  justify-content: center;
  text-align: center;
  @media (${Theme.Breakpoints.laptop}) {
    background: url(${`${process.env.PUBLIC_URL}/assets/images/overlay-img-desktop.jpg`})
      no-repeat center fixed;
    background-size: cover;
  }
`;

export const OverlayDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`;

export const OfferIcon = styled(FontAwesomeIcon)`
  color: ${Theme.Colors.green};
  font-size: 25px;
  padding: 15px 20px;
`;

export const OfferTilesDiv = styled.div`
  margin-bottom: 30px;
`;

export const OfferTileDiv = styled(FlexDiv)`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: white;
  margin-bottom: 20px;
  > div {
    width: 20%;
    text-align: center;
  }
`;

export const OverlayTextDiv = styled.div`
  color: white;
  font-size: 18px;
  padding: 10px;
  z-index: 2;
  position: absolute;
`;
