import { useEffect } from "react";
import ParallaxComponent from "../components/ParallaxComponent";
import mirrorPicture from "../assets/img/smile1.jpg";
import divider1 from "../assets/img/smile2.jpg";
import divider2 from "../assets/img/model2.jpg";
import divider3 from "../assets/img/model1.jpg";
import "../assets/css/faq.css";

function InformationsPage() {
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
        <div className="header center">Tisztán tartás</div>
        <div className="section-b">
          Nyissa ki a tisztító folyadékot tartalmazó üvegcsét! Az üvegcsét
          "Tisztító folyadék" felirattal láttuk el! Vegye ki a tisztító tégelyt
          a csomagolásból! Nyissa ki a tégelyt, majd alaposan öblítse ki tiszta
          vízzel, végül törölje szárazra! Az ékszer hatékony tisztítása
          érdekében adagoljon annyi tisztító folyadékot a tégelybe, hogy az
          ékszerét éppen ellepje! A kitöltött folyadék alkalmas többszöri
          tisztításra (maximum 5 alkalom/egy nap), de minden tisztítás előtt
          pótolni kell az elpárolgott folyadék mennyiséget. Mindig gondoskodjon
          arról, hogy a tisztító tégely teteje pontosan és szorosan záródjon!
          Amennyiben látható szennyeződés van az ékszeren, azt le kell róla
          törölni, majd helyezze a folyadékkal töltött tégelybe az ékszert.
          Hagyja ázni 2 percig, majd vegye ki a tégelyből! A folyadék pár
          másodperc alatt elpárolog róla. Az ékszer most készen áll a
          behelyezésre! Amennyiben jelenleg nem szeretné viselni az ékszert,
          helyezze szárazon a tároló tégelybe. Az ékszer viselése előtt és után
          mindig alaposan mosson fogat! A tökéletes szájhigiénia eléréséhez
          ajánlott fogselymet és fogköztisztító kefét is használni! Kérje
          fogorvosa vagy dentálhigiénikusa tanácsát az Ön számára legjobban
          megfelelő, egyedi szájhigiéniai rutin kialakításához! Évente
          látogasson el fogászati ellenőrzésre, mert minden fogászati probléma
          legjobb megoldása a megelőzés!
        </div>
      </div>
      <div className="image-container">
        <ParallaxComponent imageUrl={divider2} minHeight="200px" />
      </div>

      <div className=" center-container">
        <div className="section-b">
          <div className="header center"> Tippek az ékszer megóvásához</div>
          <div className="section-b">
            <ul>
              <li>
                Az ékkövekkel díszített ékszerek napfénytől védve tárolandók.
              </li>
              <li>
                Kerülje az ékszer kozmetikumokkal, szájhigiéniai termékekkel
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
      <ParallaxComponent imageUrl={divider1} minHeight="200px" />
      <div className=" center-container">
        <div className="section-b">
          <div className="header center">Kockázatok </div>
          <div className="section-b">
            <strong>Parodontológiai: </strong> Az ékszer viselése után
            fokozottan figyelni kell a fogközök tisztítására. Nem megfelelő
            tisztítás esetén a lepedék felhalmozódhat a fogak között és az íny
            gyulladását, hosszútávon pedig íny sorvadást eredményezhet.
            Ugyancsak figyelni kell a viselés időtartamára is. Az ékszer
            behelyezve nyomást gyakorol a fogínyre, ezzel csökkenti a terület
            vérkeringését. Ha ez a hatás túl hosszan áll fenn, az az íny
            károsodását, visszahúzódását eredményezheti. Az íny visszahúzódása
            következtében fogérzékenység is megjelenhet.
            <br></br>
            <strong>Orthodontiai:</strong> Az ékszer behelyezve nyomást gyakorol
            a vele érintkező fogakra. Ha ez a hatás túl hosszú ideig áll fenn,
            az a fogak kismértékű elmozdulását eredményzheti. Konzerváló
            fogászati: Az ékszer behelyezve nyomást gyakorol a vele érintkező
            fogakra. Az ékszer mozgása közben koptató hatást gyakorolhat a
            fogakra. Úgy terveztük, hogy az ékszer stabilan álljon a helyén.
            Mozgását a nem megfelelő méret, vagy rossz szokásként az ékszer
            piszkálása, mozgatása okozhatja. Célszerű tehát figyelni, hogy az
            ékszer stabilan áll-e és törekedni a stabil pozícióban tartására.
            Amennyiben kopás alakul ki a fogakon az a fogak érzékenységét
            okozhatja. A kopás fogtöméssel orvosolható. Idegen test aspiráció,
            lenyelés: Az ékszer lenyelése vagy légutakba kerülése esetén
            haladéktalanul orvoshoz kell fordulni! Az ékszer törése: Mosoly
            ékszereinkre 3 év garanciát vállalunk. Az ékszer törése esetén
            kitöltendő a weboldalunkon elérhető hiba bejelentő űrlapunk. Ezután
            végig vezetjük a szükséges lépéseken, hogy újra élvezhesse a
            mosolyékszere élményét. Többféle fém a szájban (pl tömések),
            galvánelem reakció. Mindenképpen tájékoztasson minket, ha van
            valamilyen fémből készült fogpótlása(amalgám tömés, arany inlay…).
            Szükség lehet fogorvosi szakvéleményre is, de ezt alaposan
            átbeszélhetjük az első mosolyékszer megtervezésekor. Az ékszer nem
            megfelelő / túlzott viselése következtében jelentkező mechanikai
            stressz hosszú távon károsíthatja a foganyagot, vagy a fogínyt. A
            nem megfelelő használat miatt a fogzománcon kopás jelentkezhet, mely
            a fogak hideg / meleg ingerre való érzékenységét eredményezheti. A
            nem megfelelő használat következtében a fogíny folyamatos dörzsölése
            az íny visszahúzódását okozhatja, melynek szintén a fogak
            érzékenysége, íny gyulladás, súlyosan elhanyagolt esetben
            fogágybetegség lehet a következménye. A kockázatok csökkentése
            érdekében javasoljuk, hogy fordítson kiemelt figyelmet a használati
            útmutatóban olvasott ajánlásokra, és rendszeresen keresse fel
            fogorvosát, dentálhigiénkusát!
          </div>
        </div>
      </div>
      <ParallaxComponent imageUrl={divider3} minHeight="200px" />
      <div className=" center-container">
        <div className="section-b">
          <div className="header center"> Gyakori kérdések </div>
          <section id="faq">
            <div className="section-b">
              Parodontológiai kockázatok kivédése: Pihentesse megfelelő ideig a
              fogait! Figyeljen a fogínye jelzéseire! Ha vérzést tapasztal, vagy
              az ínye megduzzad, kipirosodik akkor ne viselje az ékszert, hanem
              keresse fel fogorvosát, dentálhigiénikusát és kérjen tanácsot
              tőlük! Orthodontiai kockázatok kivédése: Ha korábban volt
              fogszabályozása, javasolt az ékszer viselése után a fenntartó
              eszközének használata ( a legtöbb fogszabályozás után időről időre
              kell egy kivehető készüléket használni az eredmény fenntartása
              érdekében). Ha jelenleg fogszabályzó kezelés alatt áll,
              érdeklődjön fogorvosánál, a fogékszer viseléséről. Az ékszer
              viselése befolyásolhatja a fogszabályozó kezelés folyamatát. Ne
              viselje folyamatosan az ékszert, hagyjon elég időt a fogainak
              pihenni két alkalom között. Eltörött az ékszer: Mosoly
              ékszereinkre 3 év garanciát vállalunk. Az ékszer törése esetén
              töltse ki weboldalunkon elérhető hiba bejelentő űrlapunkat. Ezután
              végig vezetjük a szükséges lépéseken, hogy újra élvezhesse a
              mosolyékszere élményét. Lenyelte az ékszert: Az ékszer anyaga nem
              fejt ki káros hatást a szervezetre, kövesse figyeemmel, hogy
              természetes úton távozik-e. Amennyiben bármilyen emésztőrendszeri
              tünetet, fájdalmat tapasztal, esetleg változást az
              anyagcseréjében, haladéktalanul forduljon orvosához! Korona/héj
              van a fogamon: Az ékszer megfelelően készített, ép korona/héj
              mellett is használható. Nem megfelelő használat, vagy a korona/héj
              nem tökéletes állapota esetén viszont a koronán/héjon is kopást
              okozhat. Koronával/héjjal borított fog mellett fokozott óvatosság
              szükséges az alkalmazáshoz, és javasolt a rendszeres fogászati
              ellenőrzés! Hídpótlás van a fogaimon: Hídpótlással általában
              foghiányt pótolnak. Mivel a hiányzó fog és a hiánnyal szomszédos
              fog között nincs kialakítva átjárható fogköz, sajnos ide nem lehet
              behelyezni mosoly ékszert. Másik fogközben viszont valószínűleg
              gond nélkül viselhető. Az ékszer kiválasztásakor segítünk
              felmérni, hogy melyik fogközök alkalmasak a kiválasztott ékszer
              viselésére. Inlay/onlay/overlay pótlás van a fogamon: Az ékszer
              megfelelően készített, ép inlay/onlay/overlay pótlás mellett is
              használható. Nem megfelelő használat, vagy a pótlás nem tökéletes
              állapota esetén viszont a pótláson is kopást okozhat.
              Inlay/onlay/overlay pótlással ellátott fog mellett fokozott
              óvatosság szükséges az alkalmazáshoz, és javasolt a rendszeres
              fogászati ellenőrzés! Réses fogazat (diasthema): Fémet tartalmazó
              fogtömés/fogpótlás található a szájában (amalgám, arany, titán):
              Ha amalgám tömése van, azt érdemes cserélni (ide majd ezt
              lehivatkozom).Több fogorvosi tanulmány bizonyítja az amalgám
              tömések káros hatását és javasolja a modern fehér tömő anyagokra
              való cserét. Érdeklődjön fogorvosánál, hogy az Ön esetében
              indokolt lehet-e ez a megoldás. Amalgám tömés mellett nem ajánlott
              más fémet viselni a szájban, mert a különböző fémek reakcióba
              léphetnek egymással. Arany vagy titán fogtömés/fogpótlás mellett
              biztonságosan viselhető a mosolyékszer.
            </div>
          </section>
          <div className="card-button">Időpontfoglalás</div>
        </div>
      </div>
    </>
  );
}

export default InformationsPage;
