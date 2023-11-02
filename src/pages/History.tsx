import ParallaxComponent from "../components/ParallaxComponent";
import "../assets/css/historypage.css";
import greenTwo from "../assets/img/green_two.jpg";
import greenOne from "../assets/img/green_one.jpg";
import { useEffect } from "react";
import profPicture from "../assets/img/model_mirror_clipped.png";

function History() {
  useEffect(() => {
    console.log(" history useffect ");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParallaxComponent imageUrl={greenTwo} minHeight="200px" />
      <div className="first-section">
        <div className="section-header">TÖRTÉNETÜNK</div>
        <div className="first-section-text">
          <p>
            A Minnae-nél hisszük, hogy a legszebb ékszer egy magabiztos mosoly.
            Ezt szeretnénk kiemelni minden termékünkkel. Azoknak tervezünk, akik
            szeretnék a megjelenésüket egy igazán egyedi kiegészítővel
            felejthetetlenné tenni, hiszen mosolyékszereink páratlan
            eleganciával ruházzák fel viselőjüket.
          </p>
        </div>
      </div>
      <ParallaxComponent imageUrl={greenTwo} minHeight="200px" />

      <div className="container center">
        <div className="section-b">
          <div className="section-header">A MINNAE története</div>
          <p>
            Egy mosoly lehet a kezdete életünk legizgalmasabb történeteinek, jó
            érzés adni és kapni is.
          </p>
          <p>
            Mi azt tűztük ki célként, hogy ehhez tervezzünk egy ékszert, ami
            segít a mosolyokra vonni a figyelmet.
          </p>
        </div>
      </div>
      <ParallaxComponent imageUrl={greenOne} minHeight="200px" />
      <div className=" full-center flex-column ">
        <div className="section-b">
          <div className="section-header"> Honnan jött az ötlet? </div>
          “Kiskoromban édesanyám egyik munkatársnőjén láttam először fogékszert.
          Azonnal megtetszett és én is nagyon szerettem volna egy apró díszt a
          fogaimra. Aztán anyukám fogorvos lévén elmagyarázta, hogy milyen
          hátrányai lehetnek egy ilyen ékszernek. Mindig is nagyon büszke voltam
          arra, hogy a fogaim teljesen egészségesek, így ezt semmiképp sem
          akartam kockáztatni. Később, mikor már én is fogorvosként dolgoztam,
          továbbra is foglalkoztatott a gondolat, hogy a hagyományos fogékszerek
          egyikét sem tudom őszintén ajánlani a pácienseimnek. Ekkor született
          meg az ötlet, hogy tervezek egy saját ékszert, amit én is szívesen
          viselnék és bárkinek jószívvel ajánlhatok. A minnae mosolyékszerekkel
          ezt sikerült elérnem.”
        </div>
        <div id="prof-section-wrapper">
          <div className="prof-section">
            <img src={profPicture} id="prof-picture" />
            <div className="signature">
              <p>Dr. Szabó Zita Noémi</p>
              <p>fogorvos</p>
            </div>
          </div>
        </div>
      </div>
      <ParallaxComponent imageUrl={greenOne} minHeight="200px" />
      <div className="container center ">
        <div className="section-b">
          <div className="section-header">Célunk</div>
          <p>
            A MINNAE mosolyékszerek úgy lettek tervezve, hogy kihangsúlyozzák az
            egészséges fogak és fogíny szépségét.
          </p>
          <p>
            Ugyanakkor felhívják a figyelmet az ínygyulladásra is, amely a
            felnőtt lakosság közel 70%-át érinti.
          </p>
          <p>
            A fogínygyulladás kezeletlenül fogágybetegséghez vezethet, ami a
            fogak elvesztésének egyik leggyakoribb oka.
          </p>
          <p>
            Célunk a nagyfokú szerepvállalas a fogászati prevencióban, mely
            lehetővé teszi a fogak élethosszig tartó megőrzését.
          </p>
          <p>
            Folyamatos motivációnk, hogy a MINNAE mosolyékszerek, ne csak a
            szép, hanem az egészséges száj hírnökei legyenek.
          </p>
        </div>
      </div>
    </>
  );
}

export default History;
