import { useEffect, useState } from "react";
import "../assets/css/navbar.css";
import logo from "../assets/png/image01.png";

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
        <a>Időponfoglalás</a>
        <a>Vásárlás</a>
        <a>Tájékoztatók</a>
        <a>Árak</a>
      </div>
    </nav>
  );
};

export default Navbar;
