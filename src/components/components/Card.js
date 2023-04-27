import React from "react";
import "./css/card.css";
import Banner from "./Banner";
import SmallSec from "./SmallSec";
import Search from "./Search";

function Card({ data, ad, err }) {
  return (
    <div className="card" style={{ marginBottom: "50px" }}>
      <Search ad={ad} err={err} />
      <Banner data={data} />
      <SmallSec data={data} />
    </div>
  );
}

export default Card;
