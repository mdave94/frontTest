import { useEffect } from "react";
import ParallaxComponent from "../components/ParallaxComponent";

import divider1 from "../assets/img/1item_diamond.jpg";
import divider2 from "../assets/img/1item_pink.jpg";
import divider3 from "../assets/img/1item.jpg";

function UserInstructions() {
  useEffect(() => {
    console.log(" history useffect ");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <>
        <div className="image-container">
          <img src={divider1} />
        </div>
        <div className="center-container">
          <div className="section-b">
            <div className="header ">Használati útmutató:</div>
            <div className="section-b">
              <p>
                Első lépésként távolítsuk el az ékszerről a csomagolást! Bontsd
                ki a tisztító folyadékot tartalmazó üvegcsét. A tisztító
                folyadékot tartalmazó üvegcsét “Tisztító folyadék” felirattal
                láttuk el.{" "}
              </p>
              <p>
                Vedd ki a tisztító tégelyt az ékszertaróból. Nyisd ki a tégelyt
                és tiszta vízzel alaposan öblítsd ki, majd töröld szárazra.
                Ezután önts a tisztító folyadékból a tégelybe annyi folyadékot,
                hogy a belefektetett ékszert éppen ellepje
              </p>
              <p>
                Vedd ki a tisztító tégelyt az ékszertaróból. Nyisd ki a tégelyt
                és tiszta vízzel alaposan öblítsd ki, majd töröld szárazra.
                Ezután önts a tisztító folyadékból a tégelybe annyi folyadékot,
                hogy a belefektetett ékszert éppen ellepje A kitöltött folyadék
                alkalmas többszöri tisztításra (maximum 5 alkalom), de minden
                tisztítás előtt pótolni kell az elpárolgott folyadék
                mennyiséget. Mindig gondoskodj arról, hogy a tisztító tégely
                teteje pontosan és szorosan záródjon!
              </p>
              <p>
                Hagyd ázni az ékszert 2 percig, majd vedd ki a tégelyből! A
                folyadék pár másodperc alatt elpárolog róla. Az ékszer most
                készen áll a behelyezésre!
              </p>
              <p>
                Ujjaid vagy egy csipesz segítségével helyezd a fogékszert a
                megfelelő fogközbe.
              </p>
              <p>
                Az ékszer stiftjét óvatosan illesszd a fog és az íny
                találkozásához, majd finom mozdulatokkal vezesd át a fogak
                között. Ha vérzést tapasztalsz, keresd fel fogorvosodat vagy
                dentálhigiénikusodat. Az ékszer behelyezése / viselése közben
                jelentkező ínyvérzés az ínygyulladás tünete lehet, mely
                fogászati ellátást igényel.
              </p>
              <p>
                Behelyezés után az ékszer nyugodtan viselhető, amíg kényelmesnek
                érződik. Ugyanakkor javasolt az ékszert legfeljebb 4 óra viselés
                után kivenni és az ínyt 8 órán keresztül pihenni hagyni.
              </p>
              <p>
                Az ékszer eltávolításához fogd meg az ékszer díszlap részének
                széleit az ujjaid vagy csipesz segítségével.
              </p>
              <p>
                Ezután óvatos, finom mozdulatokkal húzd ki a fogközből. A
                szájból való eltávolítás után az ékszert a tisztítási útmutató
                szerint meg kell tisztítani, majd szárazon az ékszertartóba
                helyezni
              </p>
              <p>
                A biztonságos használat elengedhetetlen része a szájüreg
                egészséges állapota és annak rendszeres kontrollálása, valamint
                a kiváló szájhigiéné.
              </p>
            </div>
          </div>
        </div>

        <ParallaxComponent imageUrl={divider2} minHeight="200px" />
        <div className=" center-container">
          <div className="section-b">
            <div className="header ">Figyelmeztetés </div>
            <div className="section-b">
              <p>
                Fogágybetegség esetén a mosolyékszer viselése nem javasolt, mert
                fokozhatja a parodontológiai tüneteket, valamint gyorsíthatja a
                betegség progresszióját.
              </p>
              <p>
                Ha fájdalmat tapasztalsz, távolítsd el a mosoly ékszert a fogaid
                közül.
              </p>
              <p>
                Mosolyékszer 16 éves kor alatt nem viselhető (18 áven aluli és
                gondozás alatt álló személyek esetén a gondviselő beleegyezésére
                van szükség.)
              </p>
            </div>
            <div className="custom-button">Időpontfoglalás</div>
          </div>
        </div>
        <ParallaxComponent imageUrl={divider3} minHeight="200px" />
      </>
    </>
  );
}

export default UserInstructions;
