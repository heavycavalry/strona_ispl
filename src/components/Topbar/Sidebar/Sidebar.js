import { SidebarLink, SidebarMenu } from "../TopbarStyles";

const Sidebar = ({ isOpen }) => {
  return (
    <SidebarMenu isOpen={isOpen}>
      <ul>
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
      </ul>
    </SidebarMenu>
  );
};

export default Sidebar;
