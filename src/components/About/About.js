import Heading from "../SectionHeader";
import {
  LabelDiv,
  LabelNumber,
  LabelsWrapper,
  LabelIcon,
  Svg,
  LabelsDiv,
  FlexContainer,
  Image,
  LabelsDivDesktop,
  AboutTextContainer,
} from "./AboutStyles";
import { MainText } from "../../styledHelpers/Headers";
import { useMediaPredicate } from "react-media-hook";
import Theme from "../../styledHelpers/Theme";
import Section from "../../styledHelpers/Section";

function AboutSection() {
  return (
    <Section id="about">
      <FlexContainer>
        <AboutTextContainer>
          <Heading
            name="O NAS"
            title="Pracownia psychologiczna przy ul. Niskiej"
          />
          <MainText>
            Nasza pracownia powstała w 2006 roku. Posiada zaświadczenie o wpisie
            do rejestru przedsiębiorców prowadzących Pracownię Psychologiczną nr
            28/2006 wydane przez Marszałka Województwa Małopolskiego. Obecnie
            siedziba pracowni znajduję się w Krakowie przy ul. Niskiej 2.
          </MainText>
        </AboutTextContainer>
        <div>
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
              <LabelsDivDesktop>
                <Image
                  src={`${process.env.PUBLIC_URL}/assets/images/about-img.jpg`}
                  alt=""
                />

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
              </LabelsDivDesktop>
            )}
          </LabelsDiv>
        </div>
      </FlexContainer>
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
