import React from "react";
import { CgPlayButton } from "react-icons/cg";
import "./Game.css"
function Game({index,title,monthlyUsers,link,description}) {
  return (
    <div className="mb-4 p-4 border rounded my-item game">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <span>#{index + 1}</span>
        <span>{title}</span>
        <span>{monthlyUsers} monthly users</span>
      </div>
      <div className="text-center">{description!=="NA"&&description}</div>
      <a
        className="block w-fit px-2 py-0 bg-red-500 border"
        style={{ margin: "0 auto" }}
        href={link}
      >
        play <CgPlayButton className="inline" size="25" />
      </a>
    </div>
  );
}

export default Game;
