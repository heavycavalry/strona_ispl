import { Link } from "react-scroll";
import { Nav } from "../TopbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link
            spy={true}
            smooth="true"
            duration={500}
            exact="true"
            offset={-80}
            to="about"
          >
            O NAS
          </Link>
        </li>
        <li>
          <Link
            spy={true}
            smooth="true"
            duration={500}
            exact="true"
            offset={-80}
            to="offer"
          >
            OFERTA BADAŃ
          </Link>
        </li>
        <li>
          <Link
            spy={true}
            smooth="true"
            duration={500}
            exact="true"
            offset={-80}
            to="price"
          >
            CENNIK
          </Link>
        </li>
        <li>
          <Link
            spy={true}
            smooth="true"
            duration={500}
            exact="true"
            offset={-80}
            to="contact"
          >
            KONTAKT
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
