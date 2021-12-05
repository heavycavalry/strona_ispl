import { Link } from "react-scroll";
import Container from "../../styledHelpers/Container";
import { H1Styled, MainText } from "../../styledHelpers/Headers";
import { Button, HomeOverlayDiv, HomeSection, Article } from "./HomeStyles";

function Home() {
  return (
    <HomeSection id="home">
      <HomeOverlayDiv>
        <Container>
          <Article>
            <H1Styled>Badania psychologiczne kierowców</H1Styled>
            <MainText>
              Wykonujemy również badania lekarskie oraz konsultacje
              specjalistyczne (OKULISTA, LARYNGOLOG, NEUROLOG i lekarz MEDYCYNY
              PRACY)
            </MainText>
          </Article>
          <Button>
            <Link
              spy={true}
              smooth="true"
              duration={500}
              exact="true"
              offset={-80}
              to="contact"
            >
              KONTAKT
            </Link>
          </Button>
        </Container>
      </HomeOverlayDiv>
    </HomeSection>
  );
}

export default Home;
