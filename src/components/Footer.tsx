import "../assets/css/footer.css";
import "../assets/css/mobileview.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <>
      <div className="footer-container ">
        <div className="footer-top">
          <div className="footer-top-container">
            <div className="upper-container">
              <div className="direct-contact">
                <div className="header">Direkt elérhetőség</div>
                lopreis@umasd.hu
              </div>
              <div className="direct-contact">
                <div className="header">Kövess be</div>
                <div className="icon-container ">
                  <CiFacebook className="bottom-button" />
                  <CiInstagram className="bottom-button" />
                </div>
              </div>
            </div>

            <div className="minnae-logo">MINNAE</div>
          </div>
        </div>
        <div className="border-bottom" />

        <div className="full-center footer-bottom-container">
          <div className="footer-bottom">
            <div className="bottom-button">
              Általános Szolgáltatási Feltételek
            </div>
            <div className="copy-text">Copyright © All rights reserved.</div>
            <div
              className="bottom-button scroll-to-top-button"
              onClick={scrollToTop}
            >
              Oldal tetejére
              <div className="up-icon">
                <MdKeyboardArrowUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
