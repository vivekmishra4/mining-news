import React from "react";
import { useOutletContext } from "react-router-dom";
import Game from "../components/Game/Game";
function Home() {
  const { currentPage, setCurrentPage } = useOutletContext();
  setCurrentPage("Bots");
  const gameList = [
    {
      title: "Hamster Kombat",
      monthlyUsers: 111366208,
      description:"NA",
      link: "https://t.me/hamster_kombAt_bot/start?startapp=kentId1752010214",
    },
    {
      title: "Blum",
      monthlyUsers: 47882463,
      description:"NA",
      link: "https://t.me/blum/app?startapp=ref_lnwmJjFVhO",
    },
    {
      title: "Major",
      monthlyUsers: 39155175,
      description:"NA",
      link: "https://t.me/major/start?startapp=1752010214",
    },
    {
      title: "Cats",
      monthlyUsers: 47424670,
      description:"NA",
      link: "https://t.me/catsgang_bot/join?startapp=GAZAfGlPFm3wNRi63JZ8x",
    },
    {
      title: "Memefi",
      monthlyUsers: 26221870,
      description:"NA",
      link: "https://t.me/memefi_coin_bot/main?startapp=r_714ac48d29",
    },{
      title:"Tomarket",
      monthlyUsers:31455090,
      description:"NA",
      link:"https://t.me/Tomarket_ai_bot/app?startapp=0000nmAn"
    },{
      title:"Lost Dogs",
      monthlyUsers:11323054,
      description:"NA",
      link:"https://t.me/lost_dogs_bot/lodoapp?startapp=ref-u_1752010214__s_573809"
    },{
      title:"HOT Wallet",
      monthlyUsers:14932628,
      description:"NA",
      link:"https://t.me/herewalletbot/app?startapp=13565617-village-46774"
    },{
      title:"TapSwap",
      monthlyUsers:13216431,
      description:"NA",
      link:"https://t.me/tapswap_mirror_1_bot?start=r_1752010214"
    },{
      title:"X empire",
      monthlyUsers:36899753,
      description:"NA",
      link:"https://t.me/empirebot/game?startapp=hero1752010214"
    },{
      title:"Catizen",
      monthlyUsers:21203915,
      description:"NA",
      link:"https://t.me/catizenbot/gameapp?startapp=r_904_26649636"
    },{
      title:"NOT pixel",
      monthlyUsers:12945309,
      description:"NA",
      link:"https://t.me/notpixel/app?startapp=f1752010214"
    },{
      title:"Binance MoonBix",
      monthlyUsers:20093022,
      description:"NA",
      link:"https://t.me/Binance_Moonbix_bot/start?startApp=ref_1752010214&startapp=ref_1752010214&utm_medium=web_share_copy"
    },{
      title:"Coub",
      monthlyUsers:10079709,
      description:"NA",
      link:"https://t.me/coub/app?startapp=coub__marker_18542914"
    },{
      title:"SideFans",
      monthlyUsers:8669098,
      description:"NA",
      link:"https://t.me/sidekick_fans_bot?start=1752010214"
    },{
      title:"Yescoin",
      monthlyUsers:20393938,
      description:"NA",
      link:"https://t.me/theYescoin_bot/Yescoin?startapp=uAY5oO"
    },{
      title:"UXLINK",
      monthlyUsers:101218,
      description:"NA",
      link:"https://t.me/uxlink_bot/uxlinkapp?startapp=55999892"
    },{
      title:"Notcoin",
      monthlyUsers:8333269,
      description:"NA",
      link:"https://t.me/notcoin_bot?start=er_42767435"
    },{
      title:"DOGS",
      monthlyUsers:27167663,
      description:"NA",
      link:"https://t.me/dogshouse_bot/join?startapp=6hrZbbfUQhKteZDLh7LEHQ"
    }
  ];
  gameList.sort((a, b) => {
    return b.monthlyUsers - a.monthlyUsers;
  });
  return (
    <div>
      {gameList.map((item, index) => (
        <Game
          index={index}
          title={item.title}
          monthlyUsers={item.monthlyUsers}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default Home;
