import ParallaxComponent from "../components/ParallaxComponent";
import minnaeLogo from "../assets/png/image01.png";
import MainPagePicture from "../assets/image05.jpg";
import ScrolltoElementButton from "../components/ScrollToElementButton";
import InfoSection from "../components/InfoSection";
import SwiperComponent from "../components/SwiperComponent";
import twoItem from "../assets/img/image07.jpg";
import Gallery from "../components/Gallery";
import Opinions from "../components/Opinions";
import RecommendSection from "../components/RecommendSection";

function Mainpage() {
  return (
    <>
      <ParallaxComponent className="full-center" imageUrl={MainPagePicture}>
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
        <SwiperComponent title="Galéria" />
      </div>
      {/*<ParallaxComponent imageUrl={twoItem}></ParallaxComponent>*/}
      <RecommendSection />
      <Gallery />
      <Opinions />
    </>
  );
}

export default Mainpage;
