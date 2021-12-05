import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";

// GREEN SHAPE DIV AND ICONS

export const ShapeDiv = styled.div`
  margin: 50px 0;
  color: white;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media ${Theme.Breakpoints.mobile} {
    justify-content: center;
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

export const LabelIcon = styled.img`
  width: 40px;
  margin-right: 10px;
  @media ${Theme.Breakpoints.mobile} {
    width: 70px;
  }
`;
export const LabelNumber = styled.p`
  font-size: 20px;
  font-weight: bold;
  line-height: 0px;
`;
export const LabelsWrapper = styled.div`
  position: absolute;
  padding: 0 20px;
`;
