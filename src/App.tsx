import MainPagePicture from "../src/assets/image05.jpg";
import "./App.css";
import ParallaxComponent from "./components/ParallaxComponent";
import minnaeLogo from "./assets/png/image01.png";
import twoItem from "./assets/img/image07.jpg";
import InfoSection from "./components/InfoSection";
import SwiperComponent from "./components/SwiperComponent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ParallaxComponent imageUrl={MainPagePicture}>
        <div className="mainpage-center-text">
          <img
            id="mainPageLogo"
            className="fade-in-image"
            src={minnaeLogo}
            alt="logo"
          />
        </div>
      </ParallaxComponent>

      <InfoSection />

      <div className="center-container">
        <SwiperComponent title="Galéria" />
      </div>
      <ParallaxComponent imageUrl={twoItem}></ParallaxComponent>
      <Footer />
    </div>
  );
}

export default App;
