import React from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../components/Card/Card";

function Channels() {
  const { currentPage, setCurrentPage } = useOutletContext();
  setCurrentPage("Channels");
  const channelList = [
    {
      title: "Drops Lab",
      description: "Telegram channel for aidrops",
      url: "https://t.me/+YNhB-0fmIJsxYjVi"
    },
    {
      title: "Du Rove's channel",
      description: "Telegram CEO",
      url: "https://t.me/durov",
    },
    {
      title: "Alex Falcon",
      description: "Founder of X Empire",
      url: "https://t.me/iamalexfalcon",
    },
    {
      title: "Crypto With Bhavesh(Hindi)",
      description: "Telegram channel for crypto airdrops in hindi",
      url: "https://t.me/cryptowithbhavesh",
    },
    {
      title: "Notcoin community",
      description: "Official channel of Notcoin",
      url: "https://t.me/notcoin",
    },
    {
      title: "Bitget Wallet Announcement",
      description: "Announcements of launchpool,projects,etc",
      url: "https://t.me/Bitget_Wallet_Announcement",
    },
    {
      title: "NOT pixel channel",
      description: "Announcements of Notcoin",
      url: "https://t.me/notpixel_channel",
    }
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
