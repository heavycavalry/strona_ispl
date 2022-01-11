import Container from "../../styledHelpers/Container";
import { ContactLineDiv } from "../Topbar/TopbarStyles";
function Footer() {
  return (
    <ContactLineDiv>
      <Container>
        <footer>
          <small>
            &copy; Copyright {new Date().getFullYear()}, Klaudia Paluch
          </small>{" "}
        </footer>
      </Container>
    </ContactLineDiv>
  );
}

export default Footer;
