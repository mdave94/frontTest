import "../assets/css/infosection.css";
import "../assets/css/mobileview.css";
import leftPicture from "../assets/img/image04_clipped.png";
import { Fade } from "react-awesome-reveal";

function InfoSection() {
  return (
    <div className="center">
      <div className="infosection-container">
        <div className="section topsection">
          <Fade duration={2000} triggerOnce={true} direction="left">
            <div className="topleft">
              <div className="topleft-text">MI AZ A MOSOLYÉKSZER ?</div>
            </div>
          </Fade>
          <Fade
            duration={2000}
            triggerOnce={true}
            direction="right"
            delay={1000}
          >
            <div className="topright">
              <p>
                A hagyományos fogékszerektől eltérően mosolyékszereink
                egyszerűen használhatóak, könnyen behelyezhetőek és
                eltávolíthatók a szájból.
              </p>
              <p>
                Nem igényelnek fogászati beavatkozást, sem fogorvos
                közreműködését.
              </p>
            </div>
          </Fade>
        </div>

        <div className="section">
          <Fade
            duration={2000}
            triggerOnce={true}
            direction="left"
            delay={1500}
          >
            <div className="bottomleft">
              <img id="picture-infosection" src={leftPicture} alt="Group" />
            </div>
          </Fade>
          <div className="bottomright">
            <Fade
              duration={2000}
              triggerOnce={true}
              delay={2000}
              direction="right"
            >
              <p>
                Behelyezésükhöz nem szükséges megbontani az egészséges fogzománc
                egységét sem fúrással, sem savas felület előkezeléssel.
              </p>
              <p>
                Megfelelő használat mellett tehát teljesen biztonságos eszköz
                mosolyunk ékítésére.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
