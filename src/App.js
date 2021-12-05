import About from "./components/About/About";
import Home from "./components/Home/Home";
import Offer from "./components/Offer/Offer";
import Contact from "./components/Contact/Contact";
import Header from "./components/Topbar/Topbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Offer />
      <Contact />
      <PriceList />
    </>
  );
}
export default App;
