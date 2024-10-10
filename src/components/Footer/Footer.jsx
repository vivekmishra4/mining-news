import React, { useState } from 'react'
import "./Footer.css"
import Item from './Item'

import {  TbBrandTelegram} from 'react-icons/tb'

import { ImCoinDollar} from 'react-icons/im'
import { GrKey } from 'react-icons/gr'

import { BiMessageDetail,BiPlayCircle } from 'react-icons/bi'
function Footer({currentPage}) {
  const [selected, setSelected] = useState("Bots");
  return (
    <div className="footer bg-cyan-500">
        <Item to="/tokens" title="Tokens" image={<ImCoinDollar size="45%" style={{display:"block",margin:"auto"}}/>} currentPage={currentPage}/>
        <Item to="/news" title="News" image={<BiMessageDetail size="45%" style={{display:"block",margin:"auto"}}/>} currentPage={currentPage}/>
        <Item to="/" title="Bots" image={<BiPlayCircle size="45%" style={{display:"block",margin:"auto"}}/>} currentPage={currentPage}/>
        <Item to="/codes" title="Codes" image={<GrKey size="45%" style={{display:"block",margin:"auto"}}/>} currentPage={currentPage}/>
        <Item to="/channels" title="Channels" image={<TbBrandTelegram size="45%" style={{display:"block",margin:"auto"}}/>} currentPage={currentPage}/>
    </div>
  )
}

export default Footer