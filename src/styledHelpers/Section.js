import styled from "styled-components";
const Section = styled.section`
  min-height: 100vh;
  padding: 2rem 0;
`;

const CenteredSection = styled(Section)`
  display: flex;
  align-items: center;
  padding: 0;
`;

export { Section, CenteredSection };
