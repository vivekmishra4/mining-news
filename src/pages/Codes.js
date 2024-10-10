import React from "react";
import { useOutletContext } from "react-router-dom";
import Code from "../components/Code/Code";
function Codes() {
  const { currentPage, setCurrentPage } = useOutletContext();
  setCurrentPage("Codes");
  const gamesList = [
    { title: "Tomarket", url: "https://t.me/TomarkettCombo",image:"tomarket.jpg" },
    { title: "Memefi", url: "https://t.me/memefidailycodes",image:"memefi.jpg" },
    { title: "Tapswap", url: "https://t.me/tapswapcode6",image:"tapswap.jpg" },
    { title: "Blum", url: "https://t.me/Blum_Codes_Daily_Combo",image:"blum.jpg" },
    { title: "X empire", url: "https://t.me/Daily_Combo_X_Empire_Combo",image:"x empire.jpg" },
    { title: "Major", url: "https://t.me/Major_Combo_Daily_Puzzle",image:"major.jpg" },
    { title: "Hamster Kombat", url: "https://t.me/dailycombo_0",image:"hamster kombat.jpg" },
  ];
  return (
    <div>
      {gamesList.map((item) =>{
        return <Code title={item.title} url={item.url} image={item.image}/>;
      })}
    </div>
  );
}

export default Codes;
