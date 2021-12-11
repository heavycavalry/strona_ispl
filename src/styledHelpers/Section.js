import styled from "styled-components";
import Container from "./Container";
import Theme from "./Theme";

export const Section = styled.section`
  min-height: calc(100vh - 80px);
  padding: 20px 0;
  /* border: 5px solid red; */
  @media ${Theme.Breakpoints.laptop} {
    padding: 40px 0;
  }
`;

export default Section;
