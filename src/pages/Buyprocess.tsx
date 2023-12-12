import { useEffect } from "react";
import ParallaxComponent from "../components/ParallaxComponent";
import CustomButton from "../components/ui/CustomButton";
//import topPicture from "../assets/img/same-scale/IMG_0211.jpg";

import topPicture from "../assets/images/subpages/IMG_0211.jpg";
//import divider1 from "../assets/img/6item.jpg";
import divider1 from "../assets/images/subpages/6item.jpg";

//import divider2 from "../assets/images/4item_1.jpg";
import divider2 from "../assets/images/subpages/4item.jpg";

import "../assets/css/buyprocess.css";

function Buyprocess() {
  useEffect(() => {
    console.log(" history useffect ");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="image-container">
        <img src={topPicture} />
      </div>
      <div className=" center-container">
        <div className="section-b">
          <div className="header ">vásárlás menete</div>
          <div className="section-b">
            Az előzetesen lefoglalt időpontban várunk központunkban. Mivel
            minden ékszerünk tökéletesen személyre szabott, a tervezés közösen
            történik. Kiválasztjuk a díszlap formáját, méretét, majd a
            díszítését. Ezután meghatározzuk az átmenő stift méretét. Végül
            felvesszük a megrendelést. Ékszerészünk elkészíti a közösen
            megálmodott mosolyékszert. Az elkészült ékszert kiszállítjuk Neked
          </div>
        </div>
      </div>
      <ParallaxComponent imageUrl={divider2} minHeight="300px" />
      <div className=" center-container">
        <div className="section-b">
          <div className="header "> hogyan készítjük? </div>
          <div className="section-b">
            A Minnae mosolyékszerek fogorvosok és ékszerészek közös tervezésének
            eredménye. Így az esztétika és a kényelem egyszerre valósul meg.
            Ékszereink csak a legjobb minőségű anyagokból készülnek. 14 karátos
            aranyat használunk és magas értékű drágakövekkel tesszük az egyes
            modelleket még egyedibbé.
          </div>
        </div>
        <CustomButton
          href="https://minnae.salonic.hu"
          title="Időpontfoglalás"
        />
      </div>
      <ParallaxComponent imageUrl={divider1} minHeight="300px" />
    </>
  );
}

export default Buyprocess;
