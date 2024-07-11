import "../assets/css/questionsection.css";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function QuestionSection() {
  const navigate = useNavigate();
  const scrollToFAQ = () => {
    navigate("/informations?scrollTo=faq");
  };

  return (
    <div className="recommendation-container background-light">
      <Fade duration={2000} triggerOnce={true} delay={500}>
        <div className="wrapper-question">
          <div className="header-wrapper">
            <div className="recommend-header">maradt még kérdésed?</div>
          </div>

          <ul className="questions-list">
            <li>
              <span>
                Keress rá választ a
                <a className="faq-link-button" onClick={scrollToFAQ}>
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
      <div className="iframe-container">
        <iframe
          src="https://embeds.beehiiv.com/966bc8cb-93a5-4db7-a83d-bbf4293847e6"
          data-test-id="beehiiv-embed"
          width="100%"
          height="320"
          frameBorder="0"
          scrolling="no"
          style={{
            borderRadius: "4px",
            border: "2px solid #e5e7eb",
            margin: 0,
            backgroundColor: "transparent",
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default QuestionSection;
