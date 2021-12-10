import { Link } from "react-scroll";
import Container from "../../styledHelpers/Container";
import { H1Styled, MainText } from "../../styledHelpers/Headers";
import { Button, HomeOverlayDiv, HomeSection, Article } from "./HomeStyles";
import { useMediaPredicate } from "react-media-hook";
import Theme from "../../styledHelpers/Theme";
function Home() {
  return (
    <HomeSection id="home">
      {useMediaPredicate(`${Theme.Breakpoints.maxTablet}`) && (
        <HomeOverlayDiv>
          <Container>
            <Article>
              <H1Styled>Badania psychologiczne Kraków</H1Styled>
              <MainText>
                Wykonujemy również badania lekarskie oraz konsultacje
                specjalistyczne (OKULISTA, LARYNGOLOG, NEUROLOG i lekarz
                MEDYCYNY PRACY)
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
      )}
      {useMediaPredicate(`${Theme.Breakpoints.tablet}`) && (
        <Container>
          <HomeOverlayDiv>
            <Article>
              <H1Styled>Badania psychologiczne Kraków</H1Styled>
              <MainText>
                Wykonujemy również badania lekarskie oraz konsultacje
                specjalistyczne (OKULISTA, LARYNGOLOG, NEUROLOG i lekarz
                MEDYCYNY PRACY)
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
          </HomeOverlayDiv>
        </Container>
      )}
    </HomeSection>
  );
}

export default Home;
