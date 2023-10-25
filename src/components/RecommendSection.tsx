import { Fade } from "react-awesome-reveal";
import "../assets/css/recommendation.css";

function RecommendSection() {
  return (
    <>
      <div className="recommendation-container">
        <Fade duration={2000} triggerOnce={true} delay={500}>
          <div className="wrapper">
            <div className="recommend-header ">
              Kinek ajálnjuk a MINNAE mosolyékszereket?
            </div>
            <div className="flex-column">
              <div className="recommend-header">Mindenkinek, aki:</div>
              <ul className="recommend-list">
                <li className="recommend-list-elem">magabiztos</li>
                <li className="recommend-list-elem">
                  szeret a figyelem középpontjába kerülni
                </li>
                <li className="recommend-list-elem">
                  tudatos szájápolás tekintetében
                </li>
                <li className="recommend-list-elem">
                  elegánsan szeretné hangsúlyozni mosolyát
                </li>
                <li className="recommend-list-elem">
                  szeretné elkerülni a fogakra ragasztott fogékszerek káros
                  hatásait
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
