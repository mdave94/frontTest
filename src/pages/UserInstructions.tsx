import { useEffect } from "react";
import ParallaxComponent from "../components/ParallaxComponent";
import CustomButton from "../components/ui/CustomButton";

import topPicture from "../assets/img/same-scale/2item_glass.jpg";
import divider1 from "../assets/images/subpages/IMG_0220.jpg";
import divider2 from "../assets/images/subpages/userInstuctions2.jpg";
import divider3 from "../assets/images/subpages/IMG_0232.jpg";

function UserInstructions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <>
        <div className="image-container">
          <img src={topPicture} />
        </div>
        <div className="center-container">
          <div className="section-b">
            <div className="header ">használati útmutató:</div>
            <div className="section-b">
              <p>
                Első lépésként távolítsuk el az ékszerről a csomagolást! Bontsd
                ki a tisztító folyadékot tartalmazó üvegcsét. A tisztító
                folyadékot tartalmazó üvegcsét “Tisztító folyadék” felirattal
                láttuk el.
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

        <ParallaxComponent imageUrl={divider1} minHeight="200px" />

        <div className=" center-container">
          <div className="section-b">
            <div className="header "> tisztán tartás</div>
            <div className="section-b">
              <p>
                Bontsd ki a tisztító folyadékot tartalmazó üvegcsét. A tisztító
                folyadékot tartalmazó üvegcsét “Tisztító folyadék” felirattal
                láttuk el.
              </p>
              <p>
                Vedd ki a tisztító tégelyt az ékszertaróból. Nyisd ki a tégelyt
                és tiszta vízzel alaposan öblítsd ki, majd töröld szárazra.
                Ezután önts a tisztító folyadékból a tégelybe annyi folyadékot,
                hogy a belefektetett ékszert éppen ellepje
              </p>
              <p>
                A kitöltött folyadék alkalmas többszöri tisztításra (maximum 5
                alkalom), de minden tisztítás előtt pótolni kell az elpárolgott
                folyadék mennyiséget. Mindig gondoskodj arról, hogy a tisztító
                tégely teteje pontosan és szorosan záródjon!
              </p>
              <p>
                Amennyiben jelenleg nem szeretnéd viselni az ékszert, helyezd
                szárazon az ékszertartóba.
              </p>
              <p>
                Az ékszer viselése előtt és után mindig alaposan moss fogat! A
                tökéletes szájhigiénia eléréséhez ajánlott fogselymet és
                fogköztisztító kefét is használni!
              </p>
              <p>
                Kérd fogorvosod vagy dentálhigiénikusod tanácsát az számodra a
                legjobban megfelelő, egyedi szájhigiéniai rutin kialakításához!
              </p>
              <p>
                Évente látogass el fogászati ellenőrzésre, mert minden fogászati
                probléma legjobb megoldása a megelőzés!
              </p>
            </div>
          </div>
        </div>
        <ParallaxComponent imageUrl={divider2} minHeight="200px" />
        <div className=" center-container">
          <div className="section-b">
            <div className="header ">figyelmeztetés </div>
            <div className="section-b">
              <p>
                Fogágybetegség esetén a mosolyékszer viselése nem javasolt, mert
                fokozhatja a parodontológiai tüneteket, valamint gyorsíthatja a
                betegség progresszióját
              </p>
              <p>
                Fájdalom tapasztalása esetén a mosolyékszert el kell távolítani
                a fogak közül
              </p>
              <p>
                A mosolyékszereket étkezés előtt el kell távolítan a szájból
              </p>
              <p>
                Elalvás előtt a mosolyékszert el kell távolítani a fogak közül
              </p>
              <p>
                A biztonságos és rendeltetésszerű használat magában foglalja az
                íny megfelelő időtartamú pihentetését és a kiváló szájhigiéné
                fenntartását
              </p>
              <p>
                Mosolyékszer 16 éves kor alatt nem viselhető (18 éven aluli és
                gondozás alatt álló személyek esetén a gondviselő beleegyezésére
                van szükség.)
              </p>
              <p>
                Nem javasolt az ékszer viselése közben bármely tárgyat, idegen
                testet szájba venni, mert azok egymással kölcsönhatásba kerülve
                különböző sérüléseket, károkat okozhatnak egymáson
              </p>
              <p>
                Az ékszer viselése nem javasolt alkoholos befolyásoltság
                állapotában
              </p>
              <p>
                A fogak (pozíciója, mérete, állapota) vagy a fogíny természetes
                vagy külső behatásra történő változásaból adódóan a szomszédos
                fogak közötti tér mérete megváltozhat és ez az ékszer
                stabilitásának romlását eredményezhati. Amennyiben az ékszer nem
                áll stabilan, a viselése nem javasolt
              </p>
              <p>
                A javasolt használat a fent leírtaktól egyénenként eltérhet,
                függően egyéni adottságoktól, szokásoktól, egészségügyi
                állapottól!
              </p>
            </div>
            <CustomButton
              href="https://minnae.salonic.hu"
              title="Időpontfoglalás"
            />
          </div>
        </div>
        <ParallaxComponent imageUrl={divider3} minHeight="200px" />
      </>
    </>
  );
}

export default UserInstructions;
