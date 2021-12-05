import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhiteRoundDiv from "../../styledHelpers/WhiteRoundDiv";

export const OverlayImageDiv = styled.div`
  background: url(${`${process.env.PUBLIC_URL}/assets/images/overlay-img-mobile.jpg`})
    no-repeat center center fixed;
  background-size: cover;
  max-width: 100vw;
  height: 40vh;
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
  font-size: 30px;
`;

export const MobileTilesDiv = styled.div`
  margin-bottom: 20px;
`;

export const MobileTileDiv = styled(WhiteRoundDiv)`
  justify-content: flex-start;
  font-size: 13px;
  position: relative;
  border-bottom: 3px solid ${Theme.Colors.green};
  transition: all 0.5s;
  &:hover {
    background-color: ${Theme.Colors.green};
    color: white;
    > div > svg {
      color: white;
    }
  }
  > div {
    width: 25%;
    text-align: center;
  }
`;

export const DesktopTileDiv = styled(WhiteRoundDiv)``;

export const OverlayTextDiv = styled.div`
  color: white;
  z-index: 2;
  position: absolute;
`;
