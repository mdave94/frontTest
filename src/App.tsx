import "./App.css";
import Navbar from "./components/Navbar";
import "../src/assets/css/herosection.css";
import Mainpage from "./pages/Mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InformationsPage from "./pages/InformationsPage";
import UserInstructions from "./pages/UserInstructions";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/informations" element={<InformationsPage />} />
          <Route path="/userinstructions" element={<UserInstructions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
