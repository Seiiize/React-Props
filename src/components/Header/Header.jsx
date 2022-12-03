import React from "react";
import ambar from "../../images/ambar.jpg";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="right">
        <h1>FITNESS CLASSES</h1>
        <span>Changing Lives, Right Here</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          quibusdam molestiae velit aspernatur necessitatibus quasi magnam
          consectetur, obcaecati hic et id minus eum voluptatum amet laboriosam
          eligendi, facere, deserunt architecto.
        </p>
        <button>READ MORE</button>
      </div>
      <div className="left">
        <img src={ambar} alt="" />
      </div>
    </div>
  );
};

export default Header;
