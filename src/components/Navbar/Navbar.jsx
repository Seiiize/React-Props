import React from "react";
import { Link } from "react-router-dom";
import za3im from "../../images/logoza3im.png";
import "./nav.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={za3im} alt="" className="logo" />
      <div className="links">
        <Link to="/">
          <a href="">Home</a>
        </Link>
        <Link to="/cards">
          <a href="">About</a>
        </Link>
        <Link to="/inputs">
          <a href="">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
