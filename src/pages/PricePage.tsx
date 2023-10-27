import "../assets/css/pricepage.css";
import ParallaxComponent from "../components/ParallaxComponent";
import divider1 from "../assets/img/1item_pink.jpg";
import picture1 from "../assets/img/1item.jpg";
import picture2 from "../assets/img/1item_diamond.jpg";

function PricePage() {
  return (
    <>
      <div className="image-container">
        <img src={divider1} />
      </div>
      <div className="center-container">
        <div className="header center">ÁRAINK</div>
        <div className="center">
          <div className="pricepage-container">
            <div className="pricepage-section">
              <div className="price-text-wrapper">
                <p>
                  Mosolyékszereink árazása egyedileg történik. Mivel minden
                  tervezéskor új ékszer születik, az árakat is ezzel egy időben
                  tudjuk meghatározni.
                </p>
                <p>
                  Ékszereink 14 karátos aranyból készülnek és változatos
                  ékkövekkel díszíthetőek.
                </p>
                <p>
                  Az arany ékszerek egyediségét a díszlap alakja és mérete
                  önmagában is különlegessé teszi.
                </p>
              </div>
              <div className="image-wrapper">
                <img src={picture1} className="pricepage-picture" alt="" />
              </div>
            </div>
            <div className="pricepage-section">
              <div className="price-text-wrapper">
                <p>
                  Amennyiben ékköveket is választ rá, azzal tovább emelheti
                  mosolyékszere ragyogását.
                </p>
              </div>

              <div className="image-wrapper">
                <img src={picture2} className="pricepage-picture" alt="" />
              </div>
            </div>

            <div className="pricepage-section">
              <p>Viszonyításként az alábbi irányadó árakat tüntethetjük fel:</p>

              <div className="price-box">
                Arany ékszer ékkövek nélkül: ~ 200.000 Ft <br></br> Arany ékszer
                1 db ékkővel díszítve ~ 250.000 - 350.000 Ft<br></br> Arany
                ékszer több ékkővel díszítve: ~350.000 -450.000 Ft
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricePage;
