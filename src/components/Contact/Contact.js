import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Section } from "../../styledHelpers/Section";
import Container from "../../styledHelpers/Container";
import Map from "./Map";
import {
  ContactIconDiv,
  ContactAddress,
  ContactDiv,
  ContactIcon,
  GridWrapper,
} from "./ContactStyles";
import SectionHeading from "../SectionHeader";

function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeading name="DANE KONTAKTOWE" title="Serdecznie zapraszamy!" />
        <GridWrapper>
          <ContactDiv>
            <ContactIconDiv>
              <ContactIcon icon={faMapMarkerAlt} />
            </ContactIconDiv>
            <ContactAddress>
              Indywidualna Specjalistyczna Praktyka Lekarska
              <br />
              Marek Góra <br />
              Pracownia Psychologiczna <br />
              31-306 Kraków ul. Niska 2 <br />
              Nip 677-147-12-78
            </ContactAddress>
          </ContactDiv>
          <ContactDiv>
            <ContactIconDiv>
              <ContactIcon icon={faPhoneAlt} />
            </ContactIconDiv>
            <ContactAddress>
              Rejestracja telefoniczna: <br />
              tel. <a href="tel:124235500">12 423 55 00</a> <br />
              kom. <a href="tel:+48601633400">601 633 400</a>
              <p>czynne od pon - pt od 8:00 do 16:00</p>
            </ContactAddress>
          </ContactDiv>
        </GridWrapper>
      </Container>
      <Map />
    </Section>
  );
}

export default Contact;
