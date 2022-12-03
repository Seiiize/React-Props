import React from "react";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";

const Home = ({ data, setData }) => {
  return (
    <div>
      <Header />
      <Cards data={data} setData={setData} />
    </div>
  );
};

export default Home;
