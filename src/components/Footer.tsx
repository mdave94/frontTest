import "../assets/css/footer.css";
import "../assets/css/mobileview.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { useEffect, useState } from "react";
import logo from "../assets/png/image01.png";
import { TfiEmail } from "react-icons/tfi";
import { LiaPinterest } from "react-icons/lia";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
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
              <p className="email-text">minnaemosolyekszer@gmail.com</p>
            </div>

            <a
              className="footer-icon"
              href="https://www.facebook.com/profile.php?id=61553699684640"
              style={{ maxWidth: "48px", maxHeight: "48px" }}
            >
              <CiFacebook className="bottom-button" />
            </a>

            <a
              className="footer-icon"
              href="https://www.instagram.com/minnae_official"
              style={{ maxWidth: "48px", maxHeight: "48px" }}
            >
              <CiInstagram className="bottom-button" />
            </a>
            <a
              className="footer-icon"
              href="https://hu.pinterest.com/minnae_official/"
              style={{ maxWidth: "48px", maxHeight: "48px" }}
            >
              <LiaPinterest className="bottom-button" />
            </a>
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
                  <div className="footer-header">Direkt elérhetőség</div>
                  minnaemosolyekszer@gmail.com
                </div>
                <img src={logo} alt="MINNAE logo" className="logo" />
                <div className="direct-contact">
                  <div className="icon-container ">
                    <a
                      className="footer-icon"
                      href="https://www.facebook.com/profile.php?id=61553699684640"
                    >
                      <CiFacebook className="bottom-button" />
                    </a>

                    <a
                      className="footer-icon"
                      href="https://www.instagram.com/minnae_official"
                    >
                      <CiInstagram className="bottom-button" />
                    </a>

                    <a
                      className="footer-icon"
                      href="https://hu.pinterest.com/minnae_official/"
                    >
                      <LiaPinterest className="bottom-button" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom" />

          <div className="full-center footer-bottom-container">
            <div className="footer-bottom">
              <div className="bottom-button">
                <a className="footer-icon" href="/aszf">
                  Általános Szolgáltatási Feltételek
                </a>
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
