import React from "react";
import { useOutletContext } from "react-router-dom";
import Game from "../components/Game/Game";
function Home() {
  const { currentPage, setCurrentPage } = useOutletContext();
  setCurrentPage("Bots");
  const gameList = [
    {
      title: "Hamster Kombat",
      monthlyUsers: 12000000,
      link: "https://google.com",
    },
    {
      title: "Hamster Kombat",
      monthlyUsers: 12000000,
      link: "https://google.com",
    },
    {
      title: "Hamster Kombat",
      monthlyUsers: 12000000,
      link: "https://google.com",
    },
    {
      title: "Hamster Kombat",
      monthlyUsers: 12000000,
      link: "https://google.com",
    },
    { title: "Memefi", monthlyUsers: 12000001, link: "https://google.com" },
  ];
  gameList.sort((a, b) => {
    return b.monthlyUsers - a.monthlyUsers;
  });
  return (
    <div>
      {gameList.map((item, index) => <Game index={index} title={item.title} monthlyUsers={item.monthlyUsers} link={item.link}/>)}
    </div>
  );
}

export default Home;
