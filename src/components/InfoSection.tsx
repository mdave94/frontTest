import "../assets/css/infosection.css";
import "../assets/css/mobileview.css";
import leftPicture from "../assets/images/4item_1.jpg";

import { Fade } from "react-awesome-reveal";

function InfoSection() {
  return (
    <div className="center">
      <div className="infosection-container">
        <div className="section topsection">
          <Fade duration={2000} triggerOnce={true} direction="up">
            <div className="topleft">
              <div className="topleft-text">mi is az a Mosolyékszer</div>
            </div>
          </Fade>
          <Fade duration={2000} triggerOnce={true} direction="up" delay={1000}>
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
          <Fade duration={2000} triggerOnce={true} direction="up" delay={1500}>
            <div className="bottomleft">
              <img id="picture-infosection" src={leftPicture} alt="Group" />
            </div>
          </Fade>
          <div className="bottomright">
            <Fade
              duration={2000}
              triggerOnce={true}
              delay={2000}
              direction="up"
            >
              <p>
                Behelyezésükhöz nem szükséges megbontani az egészséges fogzománc
                egységét sem fúrással, sem savas felület előkezeléssel.
              </p>
              <p>
                Megfelelő használat mellett tehát teljesen biztonságos eszköz
                mosolyunk ékítésére.
              </p>
              <p>
                Kialakításuknak köszönhetően stabilan helyben maradnak,
                ugyanakkor nem zavarják a fogak érintkezését.
              </p>
              <p>
                Ennek eredményeként nem kell a helybentartásukra koncentrálni,
                és nem zavarják a beszédet.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
