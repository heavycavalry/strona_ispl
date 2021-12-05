import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhiteRoundDiv from "../../styledHelpers/WhiteRoundDiv";

export const ContactAddress = styled.address`
  width: 85%;
  font-style: normal;
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

export const ContactDiv = styled(WhiteRoundDiv)`
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
