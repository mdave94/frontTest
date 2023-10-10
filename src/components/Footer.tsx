import "../assets/css/footer.css";
import "../assets/css/mobileview.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { useEffect, useState } from "react";
import logo from "../assets/png/image01.png";
import { TfiEmail } from "react-icons/tfi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile === true) {
    return (
      <>
        <div className="footer-container-mobile ">
          <div className="icon-container-mobile ">
            <div className="email-wrapper">
              <TfiEmail className="bottom-button" />
              <p className="email-text">info@minnae.com</p>
            </div>

            <CiFacebook className="bottom-button" />
            <CiInstagram className="bottom-button" />
          </div>
          <div
            className="bottom-button scroll-to-top-button center"
            onClick={scrollToTop}
          >
            Oldal tetejére
            <div className="up-icon">
              <MdKeyboardArrowUp />
            </div>
          </div>
        </div>
      </>
    );
  } else {
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
                <img src={logo} alt="" className="logo" />
                <div className="direct-contact">
                  <div className="header">Kövess be</div>
                  <div className="icon-container ">
                    <CiFacebook className="bottom-button" />
                    <CiInstagram className="bottom-button" />
                  </div>
                </div>
              </div>
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
                className="bottom-button scroll-to-top-button center"
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
}

export default Footer;
