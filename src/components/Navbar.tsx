import React, { useEffect, useState } from "react";
import "../assets/css/navbar.css";
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
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>NAVBAR </nav>
  );
};

export default Navbar;
