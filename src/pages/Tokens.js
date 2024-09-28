import React from "react";
import { useOutletContext } from "react-router-dom";
import Token from "../components/Token/Token";
function Tokens() {
  const tokenList = [
    { network: "TON", coin: "DOGS", open: 23, high: 24, low: 20, last: 21,tag:"NA" },
    { network: "TON", coin: "$X", open: 23, high: 24, low: 20, last: 21,tag:"NA" },
    { network: "TON", coin: "TON", open: 23, high: 24, low: 20, last: 21,tag:"NA" },
    { network: "TON", coin: "NOT", open: 23, high: 24, low: 20, last: 21,tag:"NA" },
    { network: "TON", coin: "CATI", open: 23, high: 24, low: 20, last: 21,tag:"NA" },
    { network: "TON", coin: "HAM", open: 23, high: 24, low: 20, last: 21,tag:"NA" },
    { network: "TON", coin: "Major", open: 23, high: 24, low: 20, last: 21,tag:"NA" },
    { network: "TON", coin: "GAMEE", open: 25, high: 24, low: 20, last: 21,tag:"premarket" },
  ];
  tokenList.sort((item1, item2) => {
    const change1 = Math.round(((item1.open - item1.last) / item1.open) * 100);
    const change2 = Math.round(((item2.open - item2.last) / item2.open) * 100);
    return change2 - change1;
  });
  const { currentPage, setCurrentPage } = useOutletContext();
  setCurrentPage("Tokens");

  return (
    <div>
      {/* <Link to={"/tokens/" + 12}>Click</Link> */}
      {tokenList.map((item) => (
        <Token item={item} />
      ))}
    </div>
  );
}

export default Tokens;
