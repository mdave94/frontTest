import { useEffect, useState, useRef } from "react";
import "../assets/css/navbar.css";
import logo from "../assets/png/image01.png";
import { Link, useNavigate } from "react-router-dom";
import { VscCalendar } from "react-icons/vsc";
import mobile_logo from "../assets/png/mobile_logo.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState<Boolean>(false);
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const [isMobile, setIsMobile] = useState<Boolean>(window.innerWidth <= 1200);
  const [isHovered, setIsHovered] = useState<Boolean>(false);

  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isMobile) {
    return (
      <>
        <div className={`sidebar-menu ${isActive ? "open" : ""}`} ref={menuRef}>
          <ul>
            <li onClick={toggleActiveClass}>
              <Link to="/">Főoldal</Link>
            </li>
            <li onClick={toggleActiveClass}>
              <Link to="/buyprocess">Vásárlás</Link>
            </li>
            <li onClick={toggleActiveClass}>
              <Link to="/history">Történetünk</Link>
            </li>
            <li onClick={toggleActiveClass}>
              <Link to="/informations">Információk</Link>
            </li>
            <li onClick={toggleActiveClass}>
              <Link to="/userinstructions">Tájékoztatók</Link>
            </li>
            <li onClick={toggleActiveClass}>
              <Link to="/prices">Áraink</Link>
            </li>
          </ul>
        </div>
        <div className="mobile-navbar-container">
          <div className="mobile-nav-left">
            <div className="mobile-logo">
              <Link to="/">
                <img
                  id="nav-logo"
                  src={mobile_logo}
                  alt=" "
                  onClick={() => {
                    navigate("/");
                    scrollToTop();
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="mobile-nav-right">
            <div className="appointment-mobile">
              <Link style={{ color: "black" }} to="https://minnae.salonic.hu">
                <VscCalendar />
              </Link>
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
        <img
          id="nav-logo"
          src={logo}
          alt=" "
          onClick={() => {
            navigate("/");
            scrollToTop();
          }}
        />
        <div className="nav-menu-list">
          <Link to="https://minnae.salonic.hu">
            <VscCalendar />
          </Link>
          <Link to="/buyprocess">Vásárlás</Link>
          <Link to="/history">TÖrténetünk</Link>
          <Link to="/informations">Információk</Link>
          <Link to="/userinstructions">Tájékoztatók</Link>
          <Link to="/prices">Áraink</Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
