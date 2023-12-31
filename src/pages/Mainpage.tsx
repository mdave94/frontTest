import ParallaxComponent from "../components/ParallaxComponent";
//import minnaeLogo from "../assets/png/image01.png";
import minnaeLogo from "../assets/png/mainpageLogo.png";
import MainPagePicture from "../assets/images/mainpageimage.jpg";
import ScrolltoElementButton from "../components/ScrollToElementButton";
import InfoSection from "../components/InfoSection";
import SwiperComponent from "../components/SwiperComponent";
import Gallery from "../components/Gallery";
import Opinions from "../components/Opinions";
import RecommendSection from "../components/RecommendSection";
import GiftSection from "../components/GiftSection";
import OfferSection from "../components/OfferSection";
import QuestionSection from "../components/QuestionsSection";
import { useEffect } from "react";

function Mainpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ParallaxComponent className="center " imageUrl={MainPagePicture}>
        <div className="mainpage-center-text">
          <img
            id="mainPageLogo"
            className="fade-in-image"
            src={minnaeLogo}
            alt="logo"
          />
        </div>

        <ScrolltoElementButton targetId="infosection" />
      </ParallaxComponent>
      <div id="infosection">
        <InfoSection />
      </div>
      <div className="center-container">
        <SwiperComponent title="mi a különbség egy fogékszer és a mosolyékszereink között? " />
      </div>

      <RecommendSection />
      <Gallery />
      <GiftSection />
      <Opinions />
      <OfferSection />
      <QuestionSection />
    </>
  );
}

export default Mainpage;
