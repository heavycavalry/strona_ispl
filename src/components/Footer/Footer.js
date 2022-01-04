import Container from "../../styledHelpers/Container";
import { ContactLineDiv } from "../Topbar/TopbarStyles";
import styled from "styled-components";
function Footer() {
  return (
    <ContactLineDiv>
      <Container>
        <Text>@Copyrights Klaudia Paluch</Text>
      </Container>
    </ContactLineDiv>
  );
}

const Text = styled.p`
  padding: 1rem 0;
`;
export default Footer;
