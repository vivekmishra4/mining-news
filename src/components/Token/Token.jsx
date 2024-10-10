import React from "react";
import { useNavigate } from "react-router-dom";
function Token({ item }) {
  const { name, coin, open, high, low, changePrice,changePercent,tag } = item;
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/tokens/" + coin);
      }}
      key={coin}
      className="border p-3 border-gray-500 mb-3 my-item"
      style={{
        boxShadow: "1px 3px 1px 3px rgb(0 0 0 / 20%)",
        cursor: "pointer",
      }}
    >
      <div>
        <span style={{ float: "left", paddingRight: "5px" }}>{coin}</span>
        <span>({name})</span>
        <span className="m-5 text-red-600">{tag!=="NA"&&tag}</span>
        <span style={{ float: "right" }}>price: {open}$</span>
      </div>
      <span style={{ whiteSpace: "pre" }}>
        high:{high} low:{low}
      </span>
      <span style={{ float: "right" }}>
        {changePercent + "% ( " + changePrice + "$)"}
      </span>
    </div>
  );
}

export default Token;
