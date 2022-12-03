import React from "react";
import "./cards.css";

const Cards = ({ data, setData }) => {
  return (
    <div>
      {data.map((d) => {
        return (
          <div className="card">
            <img src={d.img} alt="" />
            <h1>{d.title}</h1>
            <span>{d.desc}</span>
            <p>{d.price}</p>
            <p>{d.ratings}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
