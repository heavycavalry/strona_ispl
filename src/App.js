import About from "./components/About/About";
import Home from "./components/Home/Home";
import Offer from "./components/Offer/Offer";
import Contact from "./components/Contact/Contact";
import Topbar from "./components/Topbar/Topbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <>
      <Topbar />
      <Home />
      <About />
      <Offer />
      <Contact />
      <PriceList />
    </>
  );
}
export default App;
