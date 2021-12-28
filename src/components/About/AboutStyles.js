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
  }
`;

export const LabelsMobileContainer = styled.div`
  position: absolute;
  margin-left: 40px;
  @media ${Theme.Breakpoints.tablet} {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
`;

export const SvgContainer = styled.div`
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  @media ${Theme.Breakpoints.mobile} {
    justify-content: center;
  }
`;

export const LabelDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const LabelIcon = styled.img`
  width: 40px;
  margin-right: 10px;
  @media ${Theme.Breakpoints.mobile} {
    width: 70px;
  }
  @media ${Theme.Breakpoints.tablet} {
    fill: green;
  }
`;

export const LabelNumber = styled.p`
  font-size: 20px;
  font-weight: bold;
  line-height: 0px;
`;
