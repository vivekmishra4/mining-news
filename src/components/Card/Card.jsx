import React from "react";
import "./Card.css";
function Card({ title, description, link, linkText }) {
  return (
    <div key={title} className="mb-4 p-4 border rounded my-item card">
      <h3 className="font-semibold">{title}</h3>
      <p>{description}</p>
      <a className="mt-2 px-2 py-1 rounded text-white" href={link}>
        {linkText}
      </a>
    </div>
  );
}

export default Card;
