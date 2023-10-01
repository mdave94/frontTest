import { useEffect, useState } from "react";
import "../assets/css/navbar.css";
import logo from "../assets/png/image01.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        console.log("megyez");
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add a scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <img id="nav-logo" src={logo} alt="" />
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
