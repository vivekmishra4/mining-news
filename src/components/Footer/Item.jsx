
import { Link } from "react-router-dom";

function Item({ to, title, image,selected,setSelected }) {
  return (
    <Link
    title={title}
      to={to}
      style={{ textAlign: "center" }}
      className={"footer-item"+(selected===title?" selected":"")}
      onClick={(event) => {
        if(event.target.title!=selected){
        setSelected(event.target.title);
        }
      }}
    >
      {image}
      {title}
    </Link>
  );
}

export default Item;
