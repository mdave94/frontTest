import { useEffect, useState } from "react";
import "../assets/css/navbar.css";
import logo from "../assets/png/image01.png";
import { Link, useNavigate } from "react-router-dom";
import { VscCalendar } from "react-icons/vsc";
import mobile_logo from "../assets/img/mobile_logo.png";
const Navbar = () => {
  const [isActive, setIsActive] = useState<Boolean>(false);

  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const [isMobile, setIsMobile] = useState<Boolean>(window.innerWidth <= 768);
  const [isHovered, setIsHovered] = useState<Boolean>(false);

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
        <div className={`sidebar-menu ${isActive ? "open" : ""}`}>
          <ul>
            <li onClick={toggleActiveClass}>
              <Link to="/">Főoldal</Link>
            </li>
            <li onClick={toggleActiveClass}>
              <Link to="/buyprocess">Vásárlás</Link>
            </li>
            <li>
              <Link to="/history">TÖrténetünk</Link>
            </li>
            <li>
              <Link to="/informations">Információk</Link>
            </li>
            <li>
              <Link to="/userinstructions">Tájékoztatók</Link>
            </li>
            <li onClick={toggleActiveClass}>
              <Link to=" /prices">Áraink</Link>
            </li>
          </ul>
        </div>
        <div className="mobile-navbar-container">
          <div className="mobile-nav-left">
            <div className="mobile-logo">
              <img style={{ height: "100px" }} src={mobile_logo} />
            </div>
          </div>
          <div className="mobile-nav-right">
            <div className="appointment-mobile">
              <VscCalendar />
            </div>

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
      <nav
        className={`navbar ${isVisible || isHovered ? "visible" : "hidden"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img id="nav-logo" src={logo} alt=" " onClick={() => navigate("/")} />
        <div className="nav-menu-list">
          <Link to="/appointment">
            <a>
              <VscCalendar />
            </a>
          </Link>
          <Link to="/buyprocess">
            <a>Vásárlás</a>
          </Link>
          <Link to="/history">
            <a>TÖrténetünk</a>
          </Link>
          <Link to="/informations">
            <a>Információk</a>
          </Link>
          <Link to="/userinstructions">
            <a>Tájékoztatók</a>
          </Link>
          <Link to="/prices">
            <a>Áraink</a>
          </Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
