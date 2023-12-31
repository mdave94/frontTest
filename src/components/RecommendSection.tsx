import { Fade } from "react-awesome-reveal";
import "../assets/css/recommendation.css";

function RecommendSection() {
  return (
    <>
      <div className="recommendation-container">
        <Fade duration={2000} triggerOnce={true} delay={500}>
          <div className="wrapper">
            <div className="recommend-header ">
              kinek ajánljuk a MINNAE mosolyékszereket:
            </div>
            <div className="flex-column">
              <div className="recommend-header">mindenkinek, aki:</div>
              <ul className="recommend-list">
                <li>
                  <div className="recommend-list-elem"> magabiztos</div>
                </li>
                <li>
                  <div className="recommend-list-elem">
                    szeret a figyelem középpontjába kerülni
                  </div>
                </li>
                <li>
                  <div className="recommend-list-elem">
                    tudatos a szájápolás tekintetében
                  </div>
                </li>
                <li>
                  <div className="recommend-list-elem">
                    elegánsan szeretné hangsúlyozni a mosolyát
                  </div>
                </li>
                <li>
                  <div className="recommend-list-elem">
                    szeretné elkerülni a fogakra ragasztott fogékszerek káros
                    hatásait
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default RecommendSection;
