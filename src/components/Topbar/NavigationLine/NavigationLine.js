import Container from "../../../styledHelpers/Container";
import { HamburgerIcon, Logo, Nav } from "../TopbarStyles";
import { animateScroll as scroll, Link } from "react-scroll";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const NavigationLine = () => {
  const toggleHome = () => scroll.scrollToTop();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Nav>
      <Container>
        <Link to="/" onClick={toggleHome}>
          <Logo>Badania kierowców</Logo>
        </Link>
        <HamburgerIcon icon={faBars} onClick={toggleSidebar} />
        <Sidebar isOpen={isOpen} />
      </Container>
    </Nav>
  );
};
export default NavigationLine;
