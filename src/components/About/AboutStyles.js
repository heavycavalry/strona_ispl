import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";

export const FlexContainer = styled.div`
  @media ${Theme.Breakpoints.tablet} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    max-width: 100%;
  }
`;

export const Image = styled.img`
  display: none;
  margin-right: 50px;
  @media ${Theme.Breakpoints.tablet} {
    display: unset;
  }
`;

export const LabelsDiv = styled.div`
  margin: 50px 0;
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
  margin-left: 10px;
`;

export const LabelsWrapper = styled.div`
  position: absolute;
  padding: 0 20px;
  @media ${Theme.Breakpoints.tablet} {
    display: flex;
    justify-content: space-between;
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
