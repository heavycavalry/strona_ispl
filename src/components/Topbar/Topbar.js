import ContactLine from "./ContactLine/ContactLine";
import NavigationLine from "./NavigationLine/NavigationLine";
import { TopbarContainer } from "./TopbarStyles";

const Topbar = () => {
  return (
    <TopbarContainer>
      <ContactLine />
      <NavigationLine />
    </TopbarContainer>
  );
};

export default Topbar;
