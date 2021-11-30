import Heading from "../common/SectionHeading";
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
} from "./AboutStyles";

function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <Heading name="O NAS" title="Pracownia psychologiczna" />
        <TextDiv>
          <p>
            Nasza pracownia powstała w 2006 roku. Posiada zaświadczenie o wpisie
            do rejestru przedsiębiorców prowadzących Pracownię Psychologiczną nr
            28/2006 wydane przez Marszałka Województwa Małopolskiego. Obecnie
            siedziba pracowni znajduję się w Krakowie przy ul. Niskiej 2.
          </p>
        </TextDiv>
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
        <LabelText>{props.text}</LabelText>
      </div>
    </LabelDiv>
  );
}

export default AboutSection;
