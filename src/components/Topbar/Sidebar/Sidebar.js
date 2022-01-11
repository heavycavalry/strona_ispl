import { SidebarLink, SidebarMenu } from "../TopbarStyles";

const Sidebar = ({ isOpen }) => {
  return (
    <SidebarMenu isOpen={isOpen}>
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
    </SidebarMenu>
  );
};

export default Sidebar;
