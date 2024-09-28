import React from "react";
import { BiEdit } from "react-icons/bi";
import { CgPlayButton } from "react-icons/cg";
import { MdDelete } from "react-icons/md";

function Game({index,title,monthlyUsers,link}) {
  return (
    <div className="mb-4 p-4 border rounded list-item">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <span>#{index + 1}</span>
        <span>{title}</span>
        <span>{monthlyUsers} monthly users</span>
      </div>

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
