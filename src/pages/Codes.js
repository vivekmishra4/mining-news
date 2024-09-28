import React from "react";
import { useOutletContext } from "react-router-dom";
import Code from "../components/Code/Code";
function Codes() {
  const { currentPage, setCurrentPage } = useOutletContext();
  setCurrentPage("Codes");
  const gamesList = [{ title: "Hamster Kombat", url: "https://google.com",image:"logo.png" },
    { title: "Tomarket", url: "https://google.com",image:"logo.png" },
    { title: "Memefi", url: "https://google.com",image:"logo.png" },
    { title: "Tapswap", url: "https://google.com",image:"logo.png" },
    { title: "Blum", url: "https://google.com",image:"logo.png" },
    { title: "X empire", url: "https://google.com",image:"logo.png" },
    { title: "Major", url: "https://google.com",image:"logo.png" }
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
