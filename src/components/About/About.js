import Heading from "../SectionHeader";
import Container from "../../styledHelpers/Container";
import Section from "../../styledHelpers/Section";
import {
  LabelDiv,
  LabelNumber,
  LabelsWrapper,
  LabelIcon,
  Svg,
  LabelsDiv,
  FlexContainer,
  Image,
} from "./AboutStyles";
import { MainText } from "../../styledHelpers/Headers";
import { useMediaPredicate } from "react-media-hook";
import Theme from "../../styledHelpers/Theme";

function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <FlexContainer>
          <div>
            <Heading
              name="O NAS"
              title="Pracownia psychologiczna przy ul. Niskiej"
            />
            <MainText>
              Nasza pracownia powstała w 2006 roku. Posiada zaświadczenie o
              wpisie do rejestru przedsiębiorców prowadzących Pracownię
              Psychologiczną nr 28/2006 wydane przez Marszałka Województwa
              Małopolskiego. Obecnie siedziba pracowni znajduję się w Krakowie
              przy ul. Niskiej 2.
            </MainText>
          </div>
          <div>
            <Image
              src={`${process.env.PUBLIC_URL}/assets/images/about-img.jpg`}
              alt=""
            />
            <LabelsDiv>
              <Svg
                src={`${process.env.PUBLIC_URL}/assets/images/green-shape.svg`}
              />
              {useMediaPredicate(`${Theme.Breakpoints.maxTablet}`) && (
                <LabelsWrapper>
                  <Label
                    image={`${process.env.PUBLIC_URL}/assets/images/winner-white.png`}
                    number="15"
                    text="lat doświadczenia"
                  />
                  <Label
                    image={`${process.env.PUBLIC_URL}/assets/images/people-white.png`}
                    number="100000+"
                    text="zadowolonych pacjentów"
                  />
                </LabelsWrapper>
              )}
              {useMediaPredicate(`${Theme.Breakpoints.tablet}`) && (
                <LabelsWrapper>
                  <Label
                    image={`${process.env.PUBLIC_URL}/assets/images/winner-green.png`}
                    number="15"
                    text="lat doświadczenia"
                  />
                  <Label
                    image={`${process.env.PUBLIC_URL}/assets/images/people-green.png`}
                    number="100000+"
                    text="zadowolonych pacjentów"
                  />
                </LabelsWrapper>
              )}
            </LabelsDiv>
          </div>
        </FlexContainer>
      </Container>
    </Section>
  );
}

function Label(props) {
  return (
    <LabelDiv>
      <div>
        <LabelIcon src={props.image} alt="" />
      </div>
      <div>
        <LabelNumber>{props.number}</LabelNumber>
        <MainText>{props.text}</MainText>
      </div>
    </LabelDiv>
  );
}

export default AboutSection;
