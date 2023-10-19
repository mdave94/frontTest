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
        <div className=" center-container">
          <div className="header center">Használati útmutató:</div>
          <div className="section-b">
            Az első lépés az ékszer csomagolásának eltávolítása! Nyissa ki a
            tisztító folyadékot tartalmazó üvegcsét! Az üvegcsét "Tisztító
            folyadék" felirattal láttuk el! Vegye ki a tisztító tégelyt a
            csomagolásból! Nyissa ki a tégelyt, majd alaposan öblítse ki tiszta
            vízzel, végül törölje szárazra! Az ékszer hatékony tisztítása
            érdekében adagoljon annyi tisztító folyadékot a tégelybe, hogy az
            ékszerét éppen ellepje! A kitöltött folyadék alkalmas többszöri
            tisztításra (maximum 5 alkalom), de minden tisztítás előtt pótolni
            kell az elpárolgott folyadék mennyiséget. Mindig gondoskodjon arról,
            hogy a tisztító tégely teteje pontosan és szorosan záródjon! Hagyja
            ázni az ékszert 2 percig, majd vegye ki a tégelyből! A folyadék pár
            másodperc alatt elpárolog róla. Az ékszer most készen áll a
            behelyezésre!
            <br></br>
            <br></br>
            Az ékszert helyezze be a megfelelő fogközbe ujjai vagy egy csipesz
            segítségével. Az ékszer stiftjét óvatosan illessze a fog és az íny
            találkozásához, majd finom mozdulatokkal vezesse át a fogak között.
            Ha vérzést tapasztal, keresse fel fogorvosát vagy
            dentálhigiénikusát. Az ékszer behelyezése / viselése közben
            jelentkező ínyvérzés az ínygyulladás tünete lehet, mely fogászati
            ellátást igényel. Behelyezés után az ékszer nyugodtan viselhető,
            amíg kényelmesnek érződik. Ugyanakkor javasolt az ékszert legfeljebb
            4 óra viselés után kivenni és az ínyt ??? órán keresztül pihenni
            hagyni.
          </div>
        </div>

        <ParallaxComponent imageUrl={divider2} minHeight="200px" />
        <div className=" center-container">
          <div className="section-b">
            <div className="header center">Figyelmeztetés </div>
            <div className="section-b">
              Fogágybetegség esetén a mosoly ékszer viselése nem javasolt, mert
              fokozhatja a parodontológiai tüneteket, valamint gyorsíthatja a
              betegség progresszióját Ha fájdalmat tapasztal, távolítsa el a
              mosoly ékszert a fogai közül Mosolyékszer 16 éves kor alatt nem
              viselhető (18 áven aluli és gondozás alatt álló személyek esetén a
              gondviselő beleegyezésére van szükség.)
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
