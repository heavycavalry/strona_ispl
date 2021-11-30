import { ContactLineDiv, ContactLineIcon } from "../HeaderStyles";
import Container from "../../../styledHelpers/Container";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import FlexDiv from "../../../styledHelpers/FlexDiv";

function ContactLine() {
  return (
    <ContactLineDiv>
      <Container>
        <FlexDiv>
          <ContactLineIcon icon={faMobileAlt} />
          <p>+48 601 633 400</p>
        </FlexDiv>
        <FlexDiv>
          <ContactLineIcon icon={faEnvelope} />
          <p>pracownia@gmail.com</p>
        </FlexDiv>
      </Container>
    </ContactLineDiv>
  );
}

export default ContactLine;
