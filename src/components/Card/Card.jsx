import React from "react";

function Card({ title, description, link, linkText }) {
  return (
    <div key={title} className="mb-4 p-4 border rounded list-item">
      <h3 className="font-semibold">{title}</h3>
      <p>{description}</p>
      <a className="mt-2 px-2 py-1 rounded bg-gray-500 text-white" href={link}>
        {linkText}
      </a>
    </div>
  );
}

export default Card;
