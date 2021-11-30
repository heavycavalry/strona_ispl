import { animateScroll as scroll, Link } from "react-scroll";
import Container from "../../../styledHelpers/Container";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HamburgerIcon, Nav, SidebarLink, SidebarMenu } from "../HeaderStyles";
import React, { useState } from "react";
import Theme from "../../../styledHelpers/Theme";
import styled from "styled-components";
const toggleHome = () => {
  scroll.scrollToTop();
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Nav>
      <Container>
        <Link to="/" onClick={toggleHome}>
          <Logo>Pracownia - Kraków</Logo>
        </Link>
        <HamburgerIcon icon={faBars} onClick={toggleSidebar} />
      </Container>
      <Sidebar isOpen={isOpen} />
    </Nav>
  );
};

const Sidebar = ({ isOpen }) => {
  return (
    <SidebarMenu isOpen={isOpen}>
      <li>
        <SidebarLink
          spy={true}
          smooth="true"
          duration={500}
          exact="true"
          offset={-80}
          to="about"
        >
          O NAS
        </SidebarLink>
      </li>
      <li>
        <SidebarLink
          spy={true}
          smooth="true"
          duration={500}
          exact="true"
          offset={-80}
          to="offer"
        >
          OFERTA BADAŃ
        </SidebarLink>
      </li>
      <li>
        <SidebarLink
          spy={true}
          smooth="true"
          duration={500}
          exact="true"
          offset={-80}
          to="price"
        >
          CENNIK
        </SidebarLink>
      </li>
      <li>
        <SidebarLink
          spy={true}
          smooth="true"
          duration={500}
          exact="true"
          offset={-80}
          to="contact"
        >
          KONTAKT
        </SidebarLink>
      </li>
    </SidebarMenu>
  );
};

export const Logo = styled.h2`
  font-size: ${Theme.FontSizes.logo};
  margin: 0;
  font-style: ${Theme.FontStyles.Jomhuria};
`;

export default Navigation;
