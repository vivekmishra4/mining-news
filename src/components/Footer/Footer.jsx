import React, { useState } from 'react'
import "./Footer.css"
import Item from './Item'

import {  TbBrandTelegram} from 'react-icons/tb'

import { ImCoinDollar} from 'react-icons/im'
import { GrKey } from 'react-icons/gr'

import { BiMessageDetail,BiPlayCircle } from 'react-icons/bi'
function Footer() {
  const [selected, setSelected] = useState("Games");
  return (
    <div className="footer">
        <Item to="/tokens" title="Tokens" image={<ImCoinDollar/>} selected={selected} setSelected={setSelected}/>
        <Item to="/news" title="News" image={<BiMessageDetail/>} selected={selected} setSelected={setSelected}/>
        <Item to="/" title="Bots" image={<BiPlayCircle/>} selected={selected} setSelected={setSelected}/>
        <Item to="/codes" title="Codes" image={<GrKey/>} selected={selected} setSelected={setSelected}/>
        <Item to="/channels" title="Channels" image={<TbBrandTelegram/>} selected={selected} setSelected={setSelected}/>
    </div>
  )
}

export default Footer