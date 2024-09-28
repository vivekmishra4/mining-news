import React from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../components/Card/Card";

function Channels() {
  const { currentPage, setCurrentPage } = useOutletContext();
  setCurrentPage("Channels");
  const channelList = [
    {
      title: "Hamster kombat",
      description: "Airdrop on 26th september",
      url: "https://www.google.com",
    },
    {
      title: "Hamster kombat",
      description: "Airdrop on 26th september",
      url: "https://www.google.com",
    },
    {
      title: "Hamster kombat",
      description: "Airdrop on 26th september",
      url: "https://www.google.com",
    },
    {
      title: "Hamster kombat",
      description: "Airdrop on 26th september",
      url: "https://www.google.com",
    },
    {
      title: "Hamster kombat",
      description: "Airdrop on 26th september",
      url: "https://www.google.com",
    },
    {
      title: "Hamster kombat",
      description: "Airdrop on 26th september",
      url: "https://www.google.com",
    },
    {
      title: "Hamster kombat",
      description: "Airdrop on 26th september",
      url: "https://www.google.com",
    },
    {
      title: "Hamster kombat",
      description: "Airdrop on 26th september",
      url: "https://www.google.com",
    },
    {
      title: "Hamster kombat",
      description: "Airdrop on 26th september",
      url: "https://www.google.com",
    },
    {
      title: "Hamster kombat",
      description: "Airdrop on 26th september",
      url: "https://www.google.com",
    },
    {
      title: "Hamster kombat",
      description: "Airdrop on 26th september",
      url: "https://www.google.com",
    },
  ];
  return (
    <div>
      {channelList.map((item) => (
        <Card
          title={item.title}
          description={item.description}
          link={item.url}
          linkText="view channel"
        />
      ))}
    </div>
  );
}

export default Channels;
