import "../assets/css/giftsection.css";

import cleaner from "../assets/images/cleaner.jpg";
import cleaner_bottle from "../assets/images/cleaner_bottle.jpg";

//import giftPicture1 from "../assets/img/same-scale/IMG_0218.jpg";
import giftPicture1 from "../assets/images/IMG_0218.jpg";

function GiftSection() {
  return (
    <>
      <div className="gift-container ">
        <div className="gift-container-wrapper">
          <div className="recommend-header ">
            most minden mosolyékszer mellé ajándékkal kedveskedünk
          </div>
          <div className="text-container">
            <div className="gift-item">
              <div className="item-header">Tisztító folyadék</div>
              <div className="gift-item-picture-container">
                <img
                  src={cleaner_bottle}
                  className="gift-item-picture"
                  alt="cleaner gel"
                />
              </div>
              <div className="item-text">
                hogy a mosolyékszer mindig ragyogó és higiénikus legyen
              </div>
            </div>
            <div className="gift-item">
              <div className="item-header text-and">
                <p>és</p>
              </div>
            </div>
            <div className="gift-item">
              <div className="item-header">Tisztító tégely</div>
              <div className="gift-item-picture-container">
                <img
                  src={cleaner}
                  className="gift-item-picture"
                  alt="cleaner gel"
                />
              </div>
              <div className="item-text">
                hogy a tisztítás bárhol kényelmesen elvégezhető legyen
              </div>
            </div>
          </div>
          <div className="appointment-text">
            Amennyiben nem szeretnél lemaradni az ajándék termékekről,
            <a href="https://minnae.salonic.hu" className="gift-app-button">
              foglald le időpontod már ma
            </a>
          </div>
        </div>
        <div className="gift-image-container ">
          <img className="gift-image" src={giftPicture1} alt="" />
        </div>
      </div>
    </>
  );
}

export default GiftSection;
