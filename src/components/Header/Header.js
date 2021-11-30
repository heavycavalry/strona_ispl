import ContactLine from "./ContactLine/ContactLine";
import Navigation from "./NavBar/NavBar";
import { HeaderContainer } from "./HeaderStyles";
function Header() {
  return (
    <HeaderContainer>
      <ContactLine />
      <Navigation />
    </HeaderContainer>
  );
}

export default Header;
