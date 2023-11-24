import "../assets/css/questionsection.css";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function QuestionSection() {
  const navigate = useNavigate();
  const scrollToFAQ = () => {
    navigate("/informations?scrollTo=faq");
  };
  return (
    <>
      <div className="recommendation-container background-light">
        <Fade duration={2000} triggerOnce={true} delay={500}>
          <div className="wrapper-question">
            <div className="header-wrapper">
              <div className="recommend-header ">maradt még kérdésed?</div>
            </div>

            <ul className="questions-list">
              <li>
                <span>
                  Keress rá választ a
                  <a className="faq-link-button" onClick={() => scrollToFAQ()}>
                    gyakran feltett kérdések
                  </a>
                  gyűjteményében
                </span>
              </li>
              <li>Vagy vedd fel velünk a kapcsolatot</li>
              <li>
                Iratkozz fel hírlevelünkre, hogy még több ajánlatról
                értesíthessünk
              </li>
            </ul>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default QuestionSection;
