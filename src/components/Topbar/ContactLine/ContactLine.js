import { ContactLineDiv, ContactLineIcon } from "../TopbarStyles";
import Container from "../../../styledHelpers/Container";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { ContactLineText } from "../../../styledHelpers/Headers";

function ContactLine() {
  return (
    <ContactLineDiv>
      <Container>
        <ContactWrapper>
          <ContactLineIcon icon={faMobileAlt} />
          <ContactLineText>+48 601 633 400</ContactLineText>
        </ContactWrapper>
        <ContactWrapper>
          <ContactLineIcon icon={faEnvelope} />
          <ContactLineText>pracownia@gmail.com</ContactLineText>
        </ContactWrapper>
      </Container>
    </ContactLineDiv>
  );
}

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ContactLine;
