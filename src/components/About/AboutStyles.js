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
    justify-content: space-between;
    align-items: center;
  }
`;
export const LabelsDivDesktop = styled.div`
  margin-right: 50px;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const LabelsDiv = styled.div`
  color: white;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media ${Theme.Breakpoints.mobile} {
    justify-content: center;
  }
  @media ${Theme.Breakpoints.tablet} {
    color: ${Theme.Colors.green};
  }
`;

export const Svg = styled.img`
  width: 100%;
  @media ${Theme.Breakpoints.tablet} {
    display: none;
  }
`;

export const LabelDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const LabelsWrapper = styled.div`
  position: absolute;
  margin-left: 40px;
  @media ${Theme.Breakpoints.tablet} {
    margin: 0;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
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
