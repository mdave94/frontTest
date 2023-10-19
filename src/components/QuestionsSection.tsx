import "../assets/css/questionsection.css";
import { useNavigate } from "react-router-dom";

function QuestionSection() {
  const navigator = useNavigate();

  return (
    <>
      <div
        className="recommendation-container  background-light"
        style={{ height: "400px" }}
      >
        <div className="flex-column">
          <div className="recommend-header">Maradt Még kérdésed ? </div>
          <ul className="questions-list">
            <li>Kerress rá választ gyakran feltett kérdések gyűjtemenyében</li>
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
