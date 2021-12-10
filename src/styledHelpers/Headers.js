import styled from "styled-components";
import Theme from "./Theme";

export const H1Styled = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  line-height: 1.5;
  @media ${Theme.Breakpoints.smallDevices} {
    font-size: 2rem;
  }
  @media ${Theme.Breakpoints.mobile} {
    font-size: 2.5rem;
  }
  @media ${Theme.Breakpoints.tablet} {
    font-size: 2.8rem;
  }
  @media ${Theme.Breakpoints.laptop} {
    font-size: 3rem;
  }
  @media ${Theme.Breakpoints.desktop} {
    font-size: 3.5rem;
  }
`;

export const H2Styled = styled.h2`
  font-weight: bold;
  margin: 0;
  color: ${Theme.Colors.darkGray};
  font-size: 1.2rem;
  @media ${Theme.Breakpoints.smallDevices} {
    font-size: 1.7rem;
  }
  @media ${Theme.Breakpoints.tablet} {
    font-size: 2.2rem;
  }
  @media ${Theme.Breakpoints.laptop} {
    font-size: 2.7rem;
  }
  @media ${Theme.Breakpoints.desktop} {
    font-size: 3rem;
  }
`;

export const H3Styled = styled.h3`
  font-size: 1rem;
  font-weight: normal;
`;

export const GreenHeading = styled.p`
  font-size: 16px;
  color: ${Theme.Colors.green};
  font-family: ${Theme.FontStyles.Heebo};
  font-weight: bold;
`;

export const MainText = styled.p`
  font-size: 0.8rem;
  line-height: 1.6;
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

export const ContactLineText = styled.p`
  font-size: 0.6rem;
  @media ${Theme.Breakpoints.smallDevices} {
    font-size: 0.8rem;
  }
  @media ${Theme.Breakpoints.mobile} {
    font-size: 1rem;
  }
`;
