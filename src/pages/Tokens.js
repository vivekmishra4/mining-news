import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import Token from "../components/Token/Token";
const fetch = require('node-fetch');

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl = "https://coinmarketcap.com/currencies/cats/";
getData(proxyUrl + targetUrl);

const tokens = [
  {
    name: "TON coin",
    coin: "TON",
    api: "https://api.binance.com/api/v3/ticker/24hr?symbol=TONUSDT",
    apiType: "Binance",
    tagName: "NA",
    logo: "notcoin.jpg",
  },
  {
    name: "NOT coin",
    coin: "NOT",
    api: "https://api.binance.com/api/v3/ticker/24hr?symbol=NOTUSDT",
    apiType: "Binance",
    tagName: "NA",
    logo: "notcoin.jpg",
  },
  {
    name: "DOGS",
    coin: "DOGS",
    api: "https://api.binance.com/api/v3/ticker/24hr?symbol=DOGSUSDT",
    apiType: "Binance",
    tagName: "NA",
    logo: "",
  },
  {
    name: "hamster Kombat",
    coin: "HMSTR",
    api: "https://api.binance.com/api/v3/ticker/24hr?symbol=HMSTRUSDT",
    apiType: "Binance",
    tagName: "NA",
    logo: "",
  },
  {
    name: "Bitcoin",
    coin: "BTC",
    api: "https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT",
    apiType: "Binance",
    tagName: "NA",
    logo: "",
  },
  {
    name: "Catizen",
    coin: "CATI",
    api: "https://api.binance.com/api/v3/ticker/24hr?symbol=CATIUSDT",
    apiType: "Binance",
    tag: "NA",
    logo: "",
  },
  {
    name: "Cats",
    coin: "CATS",
    api: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=cats-2&x_cg_demo_api_key=CG-TpHtcyG3ZzTdcQiBHB71S7pk",
    apiType: "Coin gecko",
    tag: "NA",
    logo: "",
  },
  {
    name: "Rabbit coin",
    coin: "RBTC",
    api: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=rabbitcoin-2",
    apiType: "Coin gecko",
    tag: "NA",
    logo: "",
  },
  {
    name: "Watcoin",
    coin: "WAT",
    api: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=watcoin",
    apiType: "Coin gecko",
    tag: "NA",
    logo: "",
  },
];
function Tokens() {
  let [tokenList, setTokenList] = useState([]);
  tokenList.sort((item1, item2) => {
    const change1 = Math.round(((item1.open - item1.last) / item1.open) * 100);
    const change2 = Math.round(((item2.open - item2.last) / item2.open) * 100);
    return change2 - change1;
  });
  const { currentPage, setCurrentPage } = useOutletContext();
  setCurrentPage("Tokens");
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPriceData();
      setTokenList(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <Link to={"/tokens/" + 12}>Click</Link> */}
      {tokenList.map((item) => (
        <Token item={item} />
      ))}
    </div>
  );
}
async function fetchPriceData() {
  // Use Promise.all to wait for all promises in the map to resolve
  const tokenList = await Promise.all(
    tokens.map(async ({ name, coin, api, apiType, tagName }) => {
      const { open, high, low, changePrice, changePercent, tag } =
        await loadCoin(api, apiType, tagName);
      return {
        name,
        coin,
        open,
        high,
        low,
        changePrice,
        changePercent,
        tag,
      };
    })
  );
  return tokenList;
}

async function loadCoin(api, apiType, tag) {
  try {
    const response = await fetch(api); // Replace with your coin
    let data = await response.json();
    if (apiType === "Binance") {
      return {
        open: Number(data.openPrice),
        high: Number(data.highPrice),
        low: Number(data.lowPrice),
        changePrice: Number(data.priceChange),
        changePercent: Number(data.priceChangePercent),
        tag: tag,
      };
    } else if (apiType === "Coin gecko") {
      data=data[0];
      return {
        open:data.current_price,
        high:data.high_24h,
        low:data.low_24h,
        changePrice:data.price_change_24h,
        changePercent:data.price_change_percentage_24h,
        tag:tag
      }
    }
    else if (apiType === "Coin market cap") {
      const priceData = data.data[0].quote.USD;
      return {
        open: priceData.price,  // CoinMarketCap does not give explicit open, using price
        high: priceData.high_24h,
        low: priceData.low_24h,
        changePrice: priceData.price_change_24h,
        changePercent: priceData.percent_change_24h,
        tag: tag,
      };
    }
  } catch (e) {}

  return {
    open: 0,
    high: 0,
    low: 0,
    changePrice: 0,
    changePercent: 0,
    tag: "Unable to load",
  };
}

export default Tokens;
