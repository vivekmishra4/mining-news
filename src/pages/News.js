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
      title:"Cats Airdrop",
      description:"Cats token generation event on 08-10-24",
      url:"https://t.me/Cats_housewtf/164"
    }
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
