import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../common/SectionHeading";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Section from "../../styledHelpers/Section";
import Container from "../../styledHelpers/Container";
import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";
function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Heading name="DANE KONTAKTOWE" title="Serdecznie zapraszamy!" />
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
            Rejestracja telefoniczna: <br /> tel.
            <a href="tel:124235500">12 423 55 00</a> <br />
            kom. <a href="tel:+48601633400">601 633 400</a>
            <p>czynne od pon - pt od 8:00 do 16:00</p>
          </ContactAddress>
        </ContactDiv>
      </Container>
    </Section>
  );
}

export const ContactAddress = styled.address`
  width: 85%;
  font-style: normal;
`;

export const ContactDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin: 10px 0;
  padding: 10px;
  box-shadow: ${Theme.Colors.shadow};
`;

export const ContactIcon = styled(FontAwesomeIcon)`
  color: ${Theme.Colors.green};
  font-size: 20px;
  padding: 5px;
`;

export const ContactIconDiv = styled.div`
  text-align: center;
  width: 15%;
`;

export default Contact;
