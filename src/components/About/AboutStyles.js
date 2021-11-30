import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";

export const TextDiv = styled.div`
  font-weight: medium;
  color: ${Theme.Colors.mediumGray};
`;

// GREEN SHAPE DIV AND ICONS

export const ShapeDiv = styled.div`
  color: white;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 50px 0;
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
`;

export const LabelIcon = styled.img`
  width: 50px;
  margin-right: 20px;
  @media ${Theme.Breakpoints.mobile} {
    width: 70px;
  }
`;
export const LabelNumber = styled.p`
  font-size: 25px;
  font-weight: bold;
  line-height: 0px;
`;
export const LabelText = styled.p``;
export const LabelsWrapper = styled.div`
  position: absolute;
  padding: 0 20px;
`;
