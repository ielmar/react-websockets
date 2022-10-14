import Head from 'next/head'
import { useEffect, useState } from "react";

const apiCall = {
  op: "subscribe",
  args: ["orderBookL2_25:XBTUSD"]
};

export default function Home() {
    const [bid, setBid] = useState(0);
    const [pair, setPair] = useState("");
  
    useEffect(() => {
      const ws = new WebSocket("wss://ws.bitmex.com/realtime");
  
      ws.onopen = (event) => {
        ws.send(JSON.stringify(apiCall));
      };
      ws.onmessage = function (event) {
        const json = JSON.parse(event.data);
  
        try {
          if (json.action === "insert") {
            setBid(json.data[0].price);
            setPair(json.data[0].symbol);
          }
        } catch (err) {
          console.log(err);
        }
      };
  
      return () => ws.close();
    }, []);

  return (
    <div>
      <Head>
        <title>Realtime cryptocurrency prices</title>
      </Head>
      {pair !== "" && (
        <>
          <h1>Welcome to {pair} realtime price page</h1>
          <h2>
            {pair} price is {bid}
          </h2>
        </>
      )}
    </div>
  )
}