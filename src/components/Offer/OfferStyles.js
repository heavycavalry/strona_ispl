import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhiteBoardDiv from "../../styledHelpers/WhiteBoardDiv";
import Container from "../../styledHelpers/Container";

export const ImageDiv = styled.div`
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
  @media ${Theme.Breakpoints.laptop} {
    background: url(${`${process.env.PUBLIC_URL}/assets/images/overlay-img-desktop.jpg`})
      no-repeat center fixed;
    background-size: cover;
  }
`;

export const OverlayDiv = styled.div`
  width: 100%;
  background-color: black;
  opacity: 0.5;
`;

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1;
  @media ${Theme.Breakpoints.laptop} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
`;

export const OfferIcon = styled(FontAwesomeIcon)`
  color: ${Theme.Colors.green};
  font-size: 35px;
  @media ${Theme.Breakpoints.laptop} {
    font-size: 60px;
  }
`;

export const TileDiv = styled(WhiteBoardDiv)`
  align-items: center;
  justify-content: flex-start;
  border-bottom: 5px solid ${Theme.Colors.green};
  transition: all 0.5s;
  &:hover {
    background-color: ${Theme.Colors.green};
    color: white;
    ${OfferIcon} {
      color: white;
    }
  }
  @media ${Theme.Breakpoints.laptop} {
    flex-direction: column;
    justify-content: center;
  }
  @media ${Theme.Breakpoints.desktop} {
    height: 200px;
  }
`;

export const IconWrapper = styled.div`
  padding: 20px 0;
  width: 25%;
  text-align: center;
  }
`;

export const OverlayTextDiv = styled.div`
  color: white;
  z-index: 2;
  position: absolute;
`;
