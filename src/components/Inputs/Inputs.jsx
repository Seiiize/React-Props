import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Inputs = ({ setData, data }) => {
  const history = useHistory();
  const [items, setItems] = useState({
    img: "",
    title: "",
    desc: "",
    price: "",
    fullDesc: "",
    ratings: "",
  });

  const change = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const submit = () => {
    setData([
      ...data,
      {
        img: items.img,
        title: items.title,
        desc: items.desc,
        price: items.price,
        fullDesc: parseInt(items.fullDesc),
        ratings: parseInt(items.ratings),
      },
    ]);
    history.push("/cards");
  };

  return (
    <div>
      <div className="inputs">
        <input type="text" name="img" onChange={change} placeholder="img" />
        <input type="text" name="title" onChange={change} />
        <input type="text" name="desc" onChange={change} />
        <input type="text" name="fullDesc" onChange={change} />
        <input type="text" name="price" onChange={change} />
        <input type="text" name="ratings" onChange={change} />
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export default Inputs;
