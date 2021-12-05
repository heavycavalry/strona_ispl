import styled from "styled-components";
import Theme from "./Theme";
export const Container = styled.div`
  max-width: 250px;
  margin: 0 auto;
  @media ${Theme.Breakpoints.smallDevices} {
    max-width: 370px;
  }
  @media ${Theme.Breakpoints.mobile} {
    max-width: 500px;
  }
  @media ${Theme.Breakpoints.tablet} {
    max-width: 668px;
  }
  @media ${Theme.Breakpoints.laptop} {
    max-width: 892px;
  }
  @media ${Theme.Breakpoints.desktop} {
    max-width: 1150px;
  }
  @media ${Theme.Breakpoints.bigScreen} {
    max-width: 1200px;
  }
`;

export default Container;
