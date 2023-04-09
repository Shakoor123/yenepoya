import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Yenepoya University Fee Structure 2023-24</h1>
      <h2 className="subTitle">Choose Your Campus</h2>
      <div className="buttons">
        <Link to={"/mangalore"}>
          <button className="button button1">MANGALORE</button>
        </Link>
        <Link to={"/mangalore"}>
          <button className="button button2">BANGALORE</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
