
import { Link } from "react-router-dom";

function Item({ to, title, image,currentPage}) {
  return (
    <Link
    title={title}
    key={title}
      to={to}
      style={{ textAlign: "center" }}
      className={"footer-item"+(currentPage===title?" selected":"")}
    >
      {image}
      {title}
    </Link>
  );
}

export default Item;
