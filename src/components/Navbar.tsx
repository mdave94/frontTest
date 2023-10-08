import { useEffect, useState } from "react";
import "../assets/css/navbar.css";
import logo from "../assets/png/image01.png";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <>
        <div className="mobile-navbar-container">
          <div className="mobile-nav-left">
            <div className="mobile-logo">M</div>
          </div>
          <div className="mobile-nav-right">
            <div className="appointment">IDŐPONT</div>

            <div className="burger">
              <div
                className={`hamburger ${isActive ? "active" : ""}`}
                onClick={toggleActiveClass}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
        <img id="nav-logo" src={logo} alt=" " onClick={() => navigate("/")} />
        <div className="nav-menu-list">
          <Link to="/history">
            <a>TÖrténetünk</a>
          </Link>
          <Link to="/informations">
            <a>Információk</a>
          </Link>
          <Link to="/userinstructions">
            <a>Tájékoztatók</a>
          </Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
