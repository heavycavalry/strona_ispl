import Container from "../../../styledHelpers/Container";
import { HamburgerIcon, Logo, NavigationLineDiv } from "../TopbarStyles";
import { animateScroll as scroll, Link } from "react-scroll";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const NavigationLine = () => {
  const toggleHome = () => scroll.scrollToTop();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <NavigationLineDiv>
      <Container>
        <Link to="/" onClick={toggleHome}>
          <Logo>Badania kierowców</Logo>
        </Link>
        <HamburgerIcon icon={faBars} onClick={toggleSidebar} />
        <Sidebar isOpen={isOpen} />
        <Navbar />
      </Container>
    </NavigationLineDiv>
  );
};
export default NavigationLine;
