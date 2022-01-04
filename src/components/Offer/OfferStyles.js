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
  margin-top: 1rem;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  @media ${Theme.Breakpoints.laptop} {
    background: url(${`${process.env.PUBLIC_URL}/assets/images/overlay-img-desktop.jpg`})
      no-repeat center center fixed;
    background-size: cover;
  }
`;

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1;
  @media ${Theme.Breakpoints.laptop} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 2rem 0;
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
  transition: 0.5s;
  @media ${Theme.Breakpoints.laptop} {
    flex-direction: column;
    justify-content: center;
    &:hover {
      background-color: ${Theme.Colors.green};
      p {
        color: white;
      }
      ${OfferIcon} {
        color: white;
      }
    }
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
  font-size: 1.1rem;
  text-align: center;
  padding: 1rem;
`;
