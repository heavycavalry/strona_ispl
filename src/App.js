import About from "./components/About/About";
import Home from "./components/Home/Home";
import Offer from "./components/Offer/Offer";
import Contact from "./components/Contact/Contact";
import Topbar from "./components/Topbar/Topbar";
import PriceList from "./components/PriceList/PriceList";
import GlobalStyle from "./styledHelpers/GlobalStyle";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Topbar />
      <About />
      <Offer />
      <Contact />
      <PriceList />
      <Footer />
    </>
  );
}
export default App;
