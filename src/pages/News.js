import { useOutletContext } from "react-router-dom";
import Card from "../components/Card/Card";

function News() {
  const newsList = [
    {
      title: "Cats Snapshot",
      description: "Cats snapshot postponed to 3rd october",
      url: "https://t.me/Cats_housewtf/147",
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
  const { currentPage, setCurrentPage } = useOutletContext();
  setCurrentPage("News");

  return (
    <div>
      {newsList.map((item) => (
        <Card
          title={item.title}
          description={item.description}
          link={item.url}
          linkText="view"
        />
      ))}
    </div>
  );
}

export default News;
