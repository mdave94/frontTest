import "../assets/css/giftsection.css";
import giftPicture1 from "../assets/img/image05.jpg";

function GiftSection() {
  return (
    <>
      <div className="gift-container ">
        <div className="gift-container-wrapper">
          <div className="recommend-header ">
            Most minden mosolyékszer mellé ajándékkal kedveskedünk
          </div>
          <div className="text-container">
            <div className="gift-item">
              <div className="item-header">Tisztító folyadék</div>
              <div className="item-text">
                Hogy a mosolyékszer mindig ragyogó és higiénikus legyen
              </div>
            </div>
            <div className="gift-item">
              <div className="item-header text-and">ÉS</div>
            </div>
            <div className="gift-item">
              <div className="item-header">Tisztító tégely</div>
              <div className="item-text">
                Hogy a tisztitás bárhol kényelmesen elvégezhető legyen
              </div>
            </div>
          </div>
          <div className="appointment-text">
            Amennyiben nem szeretnél lemaradni az ajándék termékekről,
            <div className="gift-app-button"> foglald le időpontod már ma</div>
          </div>
        </div>
        <div className="gift-image-container">
          <img className="gift-image" src={giftPicture1} alt="" />
        </div>
      </div>
    </>
  );
}

export default GiftSection;