import styled from "styled-components";
import Container from "../../styledHelpers/Container";
import Theme from "../../styledHelpers/Theme";

export const AboutTextContainer = styled.div`
  @media ${Theme.Breakpoints.tablet} {
    width: 50%;
  }
`;

export const FlexContainer = styled(Container)`
  @media ${Theme.Breakpoints.tablet} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Svg = styled.img`
  width: 100%;
  @media ${Theme.Breakpoints.tablet} {
    display: none;
  }
`;

export const DesktopImageSection = styled.div`
  margin-right: 1rem;
  > img {
    width: 100%;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const SvgContainer = styled.div`
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelsMobileContainer = styled.div`
  position: absolute;
`;

export const LabelDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelIcon = styled.img`
  width: 3rem;
  margin-right: 1rem;
  @media ${Theme.Breakpoints.tablet} {
    fill: green;
  }
`;

export const LabelNumber = styled.p`
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: bold;
  line-height: 0;
`;
