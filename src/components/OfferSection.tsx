import "../assets/css/offersection.css";
function OfferSection() {
  return (
    <>
      <div className="recommendation-container">
        <div className="wrapper">
          <div className="header-wrapper">
            <div className="recommend-header ">Mit kínálunk ?</div>
          </div>

          <ul className="offer-list">
            <li className="offer-list-elem">
              Elkészítjük a közösen megálmodott, egyedi MINNAE mosolyékszert a
              legmagasabb minőségben
            </li>
            <li className="offer-list-elem">
              Szeret a figyelem középpontjába kerülni
            </li>
            <li className="offer-list-elem">
              Megajándékozunk egy MINNAE tisztító folyadékkal és hozzá egy
              tisztító tégellyel, hogy a mosolyékszer mindig ragyoghasson
            </li>
            <li className="offer-list-elem">
              Mindezen kívül megháláljuk a bizalmat és meglepetésként egy
              ékszertartót is helyezünk a csomagba
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default OfferSection;
