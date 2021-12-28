import Heading from "../SectionHeader";
import {
  LabelDiv,
  LabelNumber,
  LabelsMobileContainer,
  LabelIcon,
  Svg,
  FlexContainer,
  SvgContainer,
  DesktopImageSection,
  AboutTextContainer,
} from "./AboutStyles";
import { MainText } from "../../styledHelpers/Headers";
import { useMediaPredicate } from "react-media-hook";
import Theme from "../../styledHelpers/Theme";
import { CenteredSection } from "../../styledHelpers/Section";

function AboutSection() {
  return (
    <CenteredSection id="about">
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

        {useMediaPredicate(`${Theme.Breakpoints.maxTablet}`) && (
          <SvgContainer>
            <Svg
              src={`${process.env.PUBLIC_URL}/assets/images/green-shape.svg`}
            />
            <LabelsMobileContainer>
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
            </LabelsMobileContainer>
          </SvgContainer>
        )}
        {useMediaPredicate(`${Theme.Breakpoints.tablet}`) && (
          <DesktopImageSection>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/about-img.jpg`}
              alt=""
            />
            <div>
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
            </div>
          </DesktopImageSection>
        )}
      </FlexContainer>
    </CenteredSection>
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
