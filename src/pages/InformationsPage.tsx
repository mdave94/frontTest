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
              <li>Elalvás előtt az ékszert mindig ki kell venni!</li>
              <li>Az ékszert viselve nem ajánlott étkezni!</li>
              <li>
                A szájüreg és a fogak megfelelő tisztítása nem kivitelezhető, ha
                az ékszer szájban van. Kövesd a tisztítási tájékoztatóban leírt
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
              <strong>Fogágybetegséggel összefüggő kockázatok: </strong> Az
              ékszer viselése után fokozottan figyelni kell a fogközök
              tisztítására. Nem megfelelő tisztítás esetén a lepedék
              felhalmozódhat a fogak között és az íny gyulladását, hosszútávon
              pedig ínysorvadást eredményezhet. Ugyancsak figyelni kell a
              viselés időtartamára is. Az ékszer behelyezve nyomást gyakorol a
              fogínyre, ezzel csökkenti a terület vérkeringését. Ha ez a hatás
              túl hosszan áll fenn, az az íny károsodását, visszahúzódását
              eredményezheti. Az íny visszahúzódása következtében fogérzékenység
              is megjelenhet.
            </p>
            <p>
              <strong>Fogszabályozást érintő kockázatok: </strong> Az ékszer
              behelyezve nyomást gyakorol a vele érintkező fogakra. Ha ez a
              hatás túl hosszú ideig áll fenn, az a fogak kismértékű
              elmozdulását eredményzheti.
            </p>
            <p>
              <strong> Konzerváló fogászati kockázatok: </strong> Az ékszer
              behelyezve nyomást gyakorol a vele érintkező fogakra. Az ékszer
              mozgása közben koptató hatást gyakorolhat a fogakra. Úgy
              terveztük, hogy az ékszer stabilan álljon a helyén. Mozgását a nem
              megfelelő méret, vagy rossz szokásként az ékszer piszkálása,
              mozgatása okozhatja. Célszerű tehát figyelni, hogy az ékszer
              stabilan áll-e, és törekedni a stabil pozícióban
              tartására.Amennyiben kopás alakul ki a fogakon az a fogak
              érzékenységét okozhatja. A kopás konzerváló fogászati módszerekkel
              orvosolható.
            </p>
            <p>
              Amennyiben kopás alakul ki a fogakon az a fogak érzékenységét
              okozhatja. A kopás fogtöméssel orvosolható.
            </p>
            <p>
              <strong>Idegen test aspiráció, lenyelés: </strong> Az ékszer
              lenyelése vagy légutakba kerülése esetén haladéktalanul orvoshoz
              kell fordulni!
            </p>
            <p>
              <strong> Az ékszer törése: </strong>
              Mosolyékszereinkre 3 év garanciát vállalunk. Az ékszer törése
              esetén kitöltendő a weboldalunkon elérhető hiba bejelentő
              űrlapunk. Ezután végig vezetünk a szükséges lépéseken, hogy újra
              élvezhesd a mosolyékszer viselés élményét.
            </p>
            <p>
              <strong>Fémből készült fogpótlás vagy fogtömés viselése: </strong>
              Mindenképpen tájékoztass minket, ha van valamilyen fémből készült
              fogpótlásod (amalgám tömés, arany inlay…). Szükség lehet fogorvosi
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
        {/* it needs for scrolling */}
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

          <p style={{ textAlign: "center" }}>
            Ha további kérdésed van vedd fel velünk a kapcsolatot e-mailben.
          </p>
          <a
            style={{ textDecoration: "none", color: "black" }}
            className="custom-button"
            href="https://minnae.salonic.hu"
          >
            Időpontfoglalás
          </a>
        </div>
      </div>
    </>
  );
}

export default InformationsPage;
