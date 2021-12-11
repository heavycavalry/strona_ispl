import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
//HEADER
export const TopbarContainer = styled.header`
  position: fixed;
  width: 100%;
  z-index: 9;
  & > div > div,
  nav > div {
    display: flex;
    justify-content: space-between;
  }
`;

//GREEN LINE
export const ContactLineDiv = styled.div`
  background: ${Theme.Colors.colorGradient};
  color: white;
`;

export const ContactLineIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

//NAVIGATION
export const HamburgerIcon = styled(FontAwesomeIcon)`
  color: ${Theme.Colors.blue};
  z-index: 9;
  margin: 10px 0;
  font-size: 2rem;
  cursor: pointer;
  @media ${Theme.Breakpoints.laptop} {
    display: none;
  }
`;

export const SidebarMenu = styled.aside`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  background-color: black;
  color: white;
`;

export const Logo = styled.h2`
  margin: 0;
  font-style: ${Theme.FontStyles.Jomhuria};
  line-height: 2.5;
`;

export const Nav = styled.nav`
  display: none;
  width: 50%;
  align-self: center;

  @media ${Theme.Breakpoints.laptop} {
    display: block;
    > ul {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const NavigationLineDiv = styled.div`
  background: white;
`;

export const SidebarLink = styled(Link)``;
