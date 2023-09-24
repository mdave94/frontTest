import bottomPicture from "../assets/img/image02.jpg";
import groupPicture_5_piece from "../assets/img/groupPicture_5.jpg";
import "../assets/css/infosection.css";
import "../assets/css/mobileview.css";
function InfoSection() {
  return (
    <div className="center">
      <div className="infosection-container">
        <div className="section">
          <div className="topleft">
            <div className="topleft-text">MI AZ A MOSOLYÉKSZER ?</div>
          </div>
          <div className="topright">
            <p>
              A hagyományos fogékszerektől eltérően mosolyékszereink egyszerűen
              használhatóak, könnyen behelyezhetőek és eltávolíthatók a szájból.
            </p>
            <p>
              Nem igényelnek fogászati beavatkozást, sem fogorvos
              közreműködését.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="bottomleft">
            <img
              id="picture-infosection"
              src={groupPicture_5_piece}
              alt="Group"
            />
          </div>
          <div className="bottomright">
            <p>
              Behelyezésükhöz nem szükséges megbontani az egészséges fogzománc
              egységét sem fúrással, sem savas felület előkezeléssel.
            </p>
            <p>
              Megfelelő használat mellett tehát teljesen biztonságos eszköz
              mosolyunk ékítésére.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
