import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhiteBoardDiv from "../../styledHelpers/WhiteBoardDiv";

export const GridWrapper = styled.div`
  @media ${Theme.Breakpoints.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }
`;

export const ContactAddress = styled.address`
  width: 85%;
  font-style: normal;
  max-height: 200px;
  font-size: 0.8rem;
  > a {
    text-decoration: underline;
    color: ${Theme.Colors.darkGray};
  }
  @media ${Theme.Breakpoints.smallDevices} {
    font-size: 0.9rem;
  }
  @media ${Theme.Breakpoints.mobile} {
    font-size: 1rem;
  }
  @media ${Theme.Breakpoints.desktop} {
    font-size: 1.2rem;
  }
`;

export const ContactDiv = styled(WhiteBoardDiv)`
  align-items: flex-start;
  padding: 10px;
`;

export const ContactIcon = styled(FontAwesomeIcon)`
  color: ${Theme.Colors.green};
  font-size: 20px;
  padding: 5px;
`;

export const ContactIconDiv = styled.div`
  text-align: center;
  width: 15%;
`;
