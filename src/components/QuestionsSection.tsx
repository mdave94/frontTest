import "../assets/css/questionsection.css";
import { useNavigate } from "react-router-dom";

function QuestionSection() {
  const navigate = useNavigate();
  const scrollToFAQ = () => {
    navigate("/informations?scrollTo=faq");
  };
  return (
    <>
      <div
        className="recommendation-container background-light"
        style={{ height: "400px" }}
      >
        <div className="flex-column">
          <div className="recommend-header">Maradt még kérdésed?</div>
          <ul className="questions-list">
            <li>
              <span>
                Keress rá választ
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
      </div>
    </>
  );
}

export default QuestionSection;
