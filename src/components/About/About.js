import Heading from "../common/SectionHeader";
import Container from "../../styledHelpers/Container";
import Section from "../../styledHelpers/Section";
import {
  TextDiv,
  LabelDiv,
  LabelNumber,
  LabelText,
  LabelsWrapper,
  LabelIcon,
  Svg,
  ShapeDiv,
  ContentDiv,
} from "./AboutStyles";
import { MainText } from "../../styledHelpers/Headers";

function AboutSection() {
  return (
    <Section id="about">
      <Container>
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
        <ShapeDiv>
          <Svg
            src={`${process.env.PUBLIC_URL}/assets/images/green-shape.svg`}
          />
          <LabelsWrapper>
            <Label
              image={`${process.env.PUBLIC_URL}/assets/images/winner.png`}
              number="15"
              text="lat doświadczenia"
            />
            <Label
              image={`${process.env.PUBLIC_URL}/assets/images/people.png`}
              number="100000+"
              text="zadowolonych pacjentów"
            />
          </LabelsWrapper>
        </ShapeDiv>
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
