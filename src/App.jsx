import "./App.css";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./components/Services";
import Deals from "./components/Deals";
import MyNavbar from "./components/Navbar";
import TyreSold from "./components/TyreSold";
import PaymentMode from "./components/PaymentMode";
import AskQuestion from "./components/AskQuestion";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white">
      <MyNavbar />
      <Main />
      <Deals />
      <Services />
      <TyreSold />
      <PaymentMode />
      <AskQuestion />
      <Footer />
    </div>
  );
}

export default App;
