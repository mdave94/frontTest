import { useEffect, useState } from "react";
import "../assets/css/navbar.css";
import logo from "../assets/png/image01.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
};

export default Navbar;
