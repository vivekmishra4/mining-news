import React from "react";
import { useNavigate } from "react-router-dom";
function Token({ item }) {
  const { network, coin, open, high, low, last,tag } = item;
  let changePrice = open - last;
  let changePercent = Math.round((changePrice / open) * 100);
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/tokens/" + coin);
      }}
      key={coin}
      className="border p-3 border-gray-500 m-3"
      style={{
        boxShadow: "1px 3px 1px 3px rgb(0 0 0 / 20%)",
        cursor: "pointer",
      }}
    >
      <div>
        <span style={{ float: "left", paddingRight: "5px" }}>{coin}</span>
        <span>({network})</span>
        <span className="m-5 text-red-600">{tag!=="NA"&&tag}</span>
        <span style={{ float: "right" }}>{open}</span>
      </div>
      <span style={{ whiteSpace: "pre" }}>
        open:{open} high:{high} low:{low}
      </span>
      <span style={{ float: "right" }}>
        {changePrice >= 0 && "+"}
        {changePrice + "(" + changePercent + "%)"}
      </span>
    </div>
  );
}

export default Token;
