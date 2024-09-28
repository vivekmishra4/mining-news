import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom';
import { useState } from 'react';
function Add() {
    const { currentPage, setCurrentPage } = useOutletContext();
    const {id}=useParams();
    let code=<>Add{id}</>;
    switch(id){
      case "tokens":
        break;
      case "news":
        code=<div>
        <input className='border-2' placeholder="Enter title"/><br/>
        <textarea className="border-2" placeholder="Description"></textarea><br/>
        <input className="border-2" placeholder="link"/><br/>
        <button className='border'>add</button>
        </div>
        break;
      case "games":
        break;
      case "codes":
        break;
      case "channels":
        break;
      default:
        break;
    }
  return code;
}

export default Add