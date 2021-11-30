import styled from "styled-components";
import Theme from "./Theme";

export const H1Styled = styled.h1`
  @media ${Theme.Breakpoints.smallDevices} {
    font-size: 28px;
  }
  @media ${Theme.Breakpoints.tablet} {
    font-size: 28px;
  }
  @media ${Theme.Breakpoints.laptop} {
    font-size: 35px;
  }
  @media ${Theme.Breakpoints.desktop} {
    font-size: 45px;
  }
`;

export const H2Styled = styled.h2`
  font-size: ${Theme.FontSizes.mobileH2};
  font-weight: bold;
  color: ${Theme.Colors.darkGray};
  @media ${Theme.Breakpoints.smallDevices} {
    font-size: 22px;
  }
  @media ${Theme.Breakpoints.tablet} {
    font-size: 25px;
  }
  @media ${Theme.Breakpoints.laptop} {
    font-size: 32px;
  }
  @media ${Theme.Breakpoints.desktop} {
    font-size: 42px;
  }
`;

export const H3Styled = styled.h3`
  font-size: 16px;
  font-weight: normal;
`;

export const GreenHeading = styled.p`
  font-size: ${Theme.FontSizes.mobileSectionHeader};
  color: ${Theme.Colors.green};
  font-family: ${Theme.FontStyles.Heebo};
  font-weight: bold;
`;
