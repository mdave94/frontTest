import "./App.css";
import "./assets/css/fonts.css";
import Navbar from "./components/Navbar";
import "../src/assets/css/herosection.css";
import Mainpage from "./pages/Mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InformationsPage from "./pages/InformationsPage";
import UserInstructions from "./pages/UserInstructions";
import History from "./pages/History";
import Footer from "./components/Footer";
import Buyprocess from "./pages/Buyprocess";
import PricePage from "./pages/PricePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/informations" element={<InformationsPage />} />
          <Route path="/userinstructions" element={<UserInstructions />} />
          <Route path="/history" element={<History />} />
          <Route path="/buyprocess" element={<Buyprocess />} />
          <Route path="/prices" element={<PricePage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
