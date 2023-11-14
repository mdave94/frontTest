import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ParallaxComponent from "../components/ParallaxComponent";

import mirrorPicture from "../assets/img/same-scale/a4A2A5167.jpg";
import divider1 from "../assets/img/same-scale/a4A2A5192.jpg";
import divider2 from "../assets/img/same-scale/IMG_0217.jpg";
import divider3 from "../assets/img/same-scale/IMG_0215.jpg";
import "../assets/css/faq.css";
import { faqArray } from "../helpers/faq";

function InformationsPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const queryParams = new URLSearchParams(location.search);
    const scrollTo = queryParams.get("scrollTo");

    if (scrollTo === "faq") {
      const section = document.getElementById("faq-section");
      if (section) {
        section.scrollIntoView();
      }
    }
  }, [location.search]);

  return (
    <>
      <div className="image-container">
        <img src={mirrorPicture} />
      </div>

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
              Vedd ki a tisztító tégelyt az ékszertaróból. Nyisd ki a tégelyt és
              tiszta vízzel alaposan öblítsd ki, majd töröld szárazra. Ezután
              önts a tisztító folyadékból a tégelybe annyi folyadékot, hogy a
              belefektetett ékszert éppen ellepje
            </p>
            <p>
              A kitöltött folyadék alkalmas többszöri tisztításra (maximum 5
              alkalom), de minden tisztítás előtt pótolni kell az elpárolgott
              folyadék mennyiséget. Mindig gondoskodj arról, hogy a tisztító
              tégely teteje pontosan és szorosan záródjon!
            </p>
            <p>
              Hagyd ázni az ékszert 2 percig, majd vedd ki a tégelyből! A
              folyadék pár másodperc alatt elpárolog róla. Az ékszer most készen
              áll a behelyezésre!
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
              Kérd fogorvosod vagy dentálhigiénikusod tanácsát az számodra
              legjobban megfelelő, egyedi szájhigiéniai rutin kialakításához!
            </p>
            <p>
              Évente látogass el fogászati ellenőrzésre, mert minden fogászati
              probléma legjobb megoldása a megelőzés!
            </p>
          </div>
        </div>
      </div>

      <div className="image-container">
        <ParallaxComponent imageUrl={divider1} minHeight="200px" />
      </div>

      <div className=" center-container">
        <div className="section-b">
          <div className="header "> tippek az ékszer megóvásához</div>
          <div className="section-b">
            <ul>
              <li>
                Az ékkövekkel díszített ékszerek napfénytől védve tárolandók.
              </li>
              <li>
                Kerüljük az ékszer kozmetikumokkal, szájhigiéniai termékekkel
                való érintkezését.
              </li>
              <li>
                Az ékszerek az arany puhasága miatt deformálódhatnak,ezért
                kerülendő a kemény felületekkel történő érintkeztetésük.
              </li>
              <li>
                A szájüreg és a fogak megfelelő tisztítása nem kivitelezhető, ha
                az ékszer szájban van. Kövesse a tisztítási tájékoztatóban leírt
                lépéseket a megfelelő higiénia biztosításához!
              </li>
              <li>
                Különböző kémiai anyagok hatásár az ékszer elszíneződhet (pl.:
                kén)
              </li>
              <li>
                Az ékszer tisztítása nem javasolt sem fogkrémmel, sem más
                szájápolási termékkel. A tisztítási útmutató lépéseit követve
                biztosíthatjuk az ékszerek épségének hosszútávú megőrzését.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ParallaxComponent imageUrl={divider2} minHeight="200px" />
      <div className=" center-container">
        <div className="section-b">
          <div className="header ">kockázatok </div>
          <div className="section-b">
            <p>
              <strong>Parodontológiai: </strong> Az ékszer viselése után
              fokozottan figyelni kell a fogközök tisztítására. Nem megfelelő
              tisztítás esetén a lepedék felhalmozódhat a fogak között és az íny
              gyulladását, hosszútávon pedig íny sorvadást eredményezhet.
              Ugyancsak figyelni kell a viselés időtartamára is. Az ékszer
              behelyezve nyomást gyakorol a fogínyre, ezzel csökkenti a terület
              vérkeringését. Ha ez a hatás túl hosszan áll fenn, az az íny
              károsodását, visszahúzódását eredményezheti. Az íny visszahúzódása
              következtében fogérzékenység is megjelenhet.
            </p>
            <p>
              <strong>Orthodontiai:</strong> Az ékszer behelyezve nyomást
              gyakorol a vele érintkező fogakra. Ha ez a hatás túl hosszú ideig
              áll fenn, az a fogak kismértékű elmozdulását eredményzheti.
            </p>
            <p>
              Konzerváló fogászati: Az ékszer behelyezve nyomást gyakorol a vele
              érintkező fogakra. Az ékszer mozgása közben koptató hatást
              gyakorolhat a fogakra. Úgy terveztük, hogy az ékszer stabilan
              álljon a helyén. Mozgását a nem megfelelő méret, vagy rossz
              szokásként az ékszer piszkálása, mozgatása okozhatja. Célszerű
              tehát figyelni, hogy az ékszer stabilan áll-e és törekedni a
              stabil pozícióban tartására.
            </p>
            <p>
              Amennyiben kopás alakul ki a fogakon az a fogak érzékenységét
              okozhatja. A kopás fogtöméssel orvosolható.
            </p>
            <p>
              Idegen test aspiráció, lenyelés: Az ékszer lenyelése vagy
              légutakba kerülése esetén haladéktalanul orvoshoz kell fordulni!
            </p>
            <p>
              Az ékszer törése: Mosoly ékszereinkre 3 év garanciát vállalunk. Az
              ékszer törése esetén kitöltendő a weboldalunkon elérhető hiba
              bejelentő űrlapunk. Ezután végig vezetünk a szükséges lépéseken,
              hogy újra élvezhesd a mosolyékszer viselés élményét.
            </p>
            <p>
              Fémből készült fogpótlás vagy fogtömés viselése: Mindenképpen
              tájékoztass minket, ha van valamilyen fémből készült fogpótlásod
              (amalgám tömés, arany inlay…). Szükség lehet fogorvosi
              szakvéleményre is, de ezt alaposan átbeszélhetjük az első
              mosolyékszer megtervezésekor.
            </p>
            <p>
              Az ékszer nem megfelelő / túlzott viselése következtében
              jelentkező mechanikai stressz hosszú távon károsíthatja a
              foganyagot, vagy a fogínyt. A nem megfelelő használat miatt a
              fogzománcon kopás jelentkezhet, mely a fogak hideg / meleg ingerre
              való érzékenységét eredményezheti. A nem megfelelő használat
              következtében a fogíny folyamatos dörzsölése az íny
              visszahúzódását okozhatja, melynek szintén a fogak érzékenysége,
              íny gyulladás, súlyosan elhanyagolt esetben fogágybetegség lehet a
              következménye.
            </p>
            <p>
              A kockázatok csökkentése érdekében javasoljuk, hogy fordíts
              kiemelt figyelmet a használati útmutatóban olvasott ajánlásokra,
              és rendszeresen keresd fel fogorvosodat, dentálhigiénkusodat!
            </p>
          </div>
        </div>
        {/* needs it for scrolling  */}
        <div id="faq-section"></div>
      </div>

      <ParallaxComponent imageUrl={divider3} minHeight="200px" />
      <div className=" center-container">
        <div className="section-b">
          <div className="header "> gyakori kérdések </div>
          <section>
            {faqArray.map((item) => (
              <div className="section-b">
                <div className="infopage-question">{item.question}</div>
                <div className="infopage-answert">{item.answer}</div>
              </div>
            ))}
          </section>
          <div className="custom-button">Időpontfoglalás</div>
        </div>
      </div>
    </>
  );
}

export default InformationsPage;
