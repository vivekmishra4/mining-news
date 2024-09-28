import React from "react";

function Code({ title, url, image }) {
  const imageUrl = require("../../assets/"+image);
  return (
    <a key={title} className="mb-4 p-4 border rounded list-item" href={url}>
      <img className="inline mr-4" src={imageUrl} alt={title} width="60px" />
      {title}
    </a>
  );
}

export default Code;
