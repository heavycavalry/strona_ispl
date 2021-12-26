import styled from "styled-components";
import Theme from "./Theme";

export const Section = styled.section`
  min-height: 100vh;
  padding: 20px 0;
  vertical-align: center;
  @media ${Theme.Breakpoints.laptop} {
    padding: 40px 0;
  }
`;

export default Section;
