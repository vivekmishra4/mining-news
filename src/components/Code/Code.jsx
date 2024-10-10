import React from "react";

function Code({ title, url, image }) {
  const imageUrl = require("../../assets/logos/"+image);
  return (
    <a key={title} className="block mb-4 p-4 border rounded my-item" href={url}>
      <img className="inline mr-4" src={imageUrl} alt={title} width="60px" />
      {title}
    </a>
  );
}

export default Code;
