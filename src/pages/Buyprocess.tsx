import { useEffect } from "react";
import ParallaxComponent from "../components/ParallaxComponent";
import headerPicture from "../assets/img/3item.jpg";
import mirrorPicture from "../assets/img/model_mirror.jpg";
import divider1 from "../assets/img/6item.jpg";
import divider2 from "../assets/img/4item.jpg";

import "../assets/css/buyprocess.css";

function Buyprocess() {
  useEffect(() => {
    console.log(" history useffect ");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="image-container">
        <img src={mirrorPicture} />
      </div>
      <div className=" center-container">
        <div className="header center">Vásárlás menete</div>
        <div className="section-b">
          Az előzetesen lefoglalt időpontban várunk központunkban. Mivel minden
          ékszerünk tökéletesen személyre szabott, a tervezés közösen történik.
          Kiválasztjuk a díszlap formáját, méretét, majd a díszítését. Ezután
          meghatározzuk az átmenő stift méretét. Végül felvesszük a
          megrendelést. Ékszerészünk elkészíti a közösen megálmodott
          mosolyékszert. Az elkészült ékszert kiszállítjuk Neked
        </div>
      </div>
      <ParallaxComponent imageUrl={divider2} minHeight="300px" />
      <div className=" center-container">
        <div className="section-b">
          <div className="header center"> Hogyan készítjük? </div>
          <div className="section-b">
            A Minnae mosolyékszerek fogorvosok és ékszerészek közös tervezésének
            eredménye. Így az esztétika és a kényelem egyszerre valósul meg.
            Ékszereink csak a legjobb minőségű anyagokból készülnek. 14 karátos
            aranyat használunk és magas értékű drágakövekkel tesszük az egyes
            modelleket még egyedibbé.
          </div>
        </div>
        <div className="custom-button">Időpontfoglalás</div>
      </div>
      <ParallaxComponent imageUrl={divider1} minHeight="300px" />
    </>
  );
}

export default Buyprocess;
